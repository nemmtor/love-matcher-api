import getExtraPoints from './getExtraPoints';

describe('Get extra points', () => {
  it('returns 100 when names start with same letter', () => {
    expect(getExtraPoints('Alice', 'Adam')).toBe(100);
  });
  it('returns 100 when names have same length', () => {
    expect(getExtraPoints('Bob', 'Ame')).toBe(100);
  });
  it('returns 200 when names have same length and start with same letter', () => {
    expect(getExtraPoints('Aga', 'Ame')).toBe(200);
  });
});
