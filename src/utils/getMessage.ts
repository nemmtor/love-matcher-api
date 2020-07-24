import loveMessages from './loveMessages';

export const pickIndex = (rating: number): number => {
  if (rating === 0) return 0;
  const whichQuarter = Math.ceil((rating * 100) / 25);
  const index = whichQuarter - 1;
  return index;
};

export default function getMessage(rating: number): string {
  // Pick index based on rating
  const index = pickIndex(rating);

  // Pick subarray from loveMessages
  const messages = loveMessages[index];

  // Return random message
  return messages[Math.floor(Math.random() * messages.length)];
}
