// [0] - messages for lowest ratings
// [1] - messages for lowmiddle ratings
// [2] - messages for highmiddle ratings
// [3] - messages for highest ratings

export const loveMessages = [
  [
    'Be careful with that',
    'You better think twice about that',
    'It just cannot work',
    'You definetly dont match',
  ],
  [
    "It might work but I can't promise",
    "You will like each other, but that's it",
    "It's not really worth it",
    'There is a chance, but very tiny one',
  ],
  [''],
  [],
];

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
