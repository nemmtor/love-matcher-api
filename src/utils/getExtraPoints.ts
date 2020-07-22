export default function getExtraPoints(name1: string, name2: string): number {
  let extra = 0;

  // If names are Kacper and Karolina then return lots of points to get 100% rating
  // Btw. thats for me and my gf <3
  // if (
  //   [name1, name2].includes('karolina') &&
  //   [name1, name2].includes('kacper')
  // ) {
  //   extra += 10000;
  // }

  // Add extra points when both names start with same letters
  if (name1[0] === name2[0]) extra += 250;

  // Add extra points when both names have same length
  if (name1.length === name2.length) extra += 250;

  // Add 50 points for each unique char in names toghether
  const namesTogether = name1 + name2;
  const uniqueChars = [...new Set(namesTogether.toLowerCase())];
  extra += (namesTogether.length - uniqueChars.length) * 50;

  // Substract 300 points when both names are odd
  if ([name1, name2].every((name) => name.length % 2 !== 0)) extra -= 300;

  // Substract 300 points when both names are longer than 7
  if ([name1, name2].every((name) => name.length > 7)) extra -= 100;

  return extra;
}
