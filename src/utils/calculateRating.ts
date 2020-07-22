import SHA256 from 'crypto-js/sha256';

import getExtraPoints from './getExtraPoints';

// Min value of single hash with 10 chars is 480
// It is when hash is 0000000000
// This is later substracted from sum of hash
// So the percentage of hash rating is more real
//
// For example if hash sum of given name is 700
// than the match % will be
// 700/1220 which is 57%
// But if we substract min value:
// (700-480)/1220 which is 18%

// If we dont substract 480 then we will never get low values
// because hash can be [0-9a-Z], so the lowest value of char (0) is 48

const MIN_ASCII_VALUE = 480;

// Max value of single hash with 10 chars is 900
// It is when hash is zzzzzzzzzz
const MAX_ASCII_VALUE = 1220;

export const getHashedName = (name: string): string => {
  if (!name) return '';
  // Lowercase so it is case insensitive (return same values for different cases)
  const nameHash = SHA256(name.trim().toLowerCase()).toString();

  // Return only first 10 characters of hash so the calculation becomes easier
  return nameHash.slice(0, 10);
};

export const getAsciiCodes = (value: string): number[] => {
  const chars = value.split('');
  return chars.map((char) => char.charCodeAt(0));
};

export const getSum = (arr: number[]): number => {
  return arr.reduce((prev, curr) => prev + curr);
};

const calculateRating = (name1: string, name2: string): number => {
  if (!name1 || !name2) throw new Error('Invalid names!');
  const names = [name1, name2];
  const hashedNames = names.map((name) => getHashedName(name));
  const asciiCodes = hashedNames.map((name) => getAsciiCodes(name));

  // Use getSum twice, first to sum subarrays and then to sum whole array
  // Substract MIN_ASCII_VALUE so we can get low values
  // See top of this file for explanation
  const sumOfAscii = getSum(
    asciiCodes.map((arr) => getSum(arr) - MIN_ASCII_VALUE),
  );

  const sumWithExtraPoints = sumOfAscii + getExtraPoints(name1, name2);

  const rating = Number(
    (sumWithExtraPoints / (MAX_ASCII_VALUE * 2)).toFixed(2),
  );

  if (rating > 1) return 1;

  return rating;
};

export default calculateRating;
