import SHA256 from 'crypto-js/sha256';

// Max value when hash is equal to ZZZZZZZZZZ
const MAX_ASCII_VALUE = 1800;

export const getHashedName = (name: string): string => {
  if (!name) return '';
  // Uppercase so it is case insensitive (return same values for different cases)
  const nameHash = SHA256(name.trim().toUpperCase()).toString();

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
  const sumOfAscii = getSum(asciiCodes.map((arr) => getSum(arr)));

  // return the % of max ascii value
  return Number((sumOfAscii / MAX_ASCII_VALUE).toFixed(2));
};

export default calculateRating;
