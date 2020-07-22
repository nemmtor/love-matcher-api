// Karolina
// Kacper

export default function getExtraPoints(name1: string, name2: string): number {
  let extra = 0;

  // Add extra points when both names start with same letters
  if (name1[0] === name2[0]) extra += 100;

  // Add extra points when both names have same length
  if (name1.length === name2.length) extra += 100;

  return extra;
}
