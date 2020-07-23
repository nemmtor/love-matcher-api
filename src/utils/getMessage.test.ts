import getMessage, { pickIndex } from './getMessage';

describe('pickIndex', () => {
  it('is defined', () => {
    expect(pickIndex).toBeDefined();
  });
  it('is a function', () => {
    expect(typeof pickIndex).toBe('function');
  });
  it('returns 0', () => {
    expect(pickIndex(0.12)).toBe(0);
    expect(pickIndex(0)).toBe(0);
    expect(pickIndex(0.25)).toBe(0);
  });
  it('returns 1', () => {
    expect(pickIndex(0.26)).toBe(1);
    expect(pickIndex(0.43)).toBe(1);
    expect(pickIndex(0.5)).toBe(1);
  });
  it('returns 2', () => {
    expect(pickIndex(0.51)).toBe(2);
    expect(pickIndex(0.69)).toBe(2);
    expect(pickIndex(0.75)).toBe(2);
  });
  it('returns 3', () => {
    expect(pickIndex(0.76)).toBe(3);
    expect(pickIndex(0.81)).toBe(3);
    expect(pickIndex(1)).toBe(3);
  });
});

describe('getMessage', () => {
  it('is defined', () => {
    expect(getMessage).toBeDefined();
  });
  it('is a function', () => {
    expect(typeof getMessage).toBe('function');
  });
  it('returns random message based on rating', () => {
    const lowRatingMessages = [
      'Be careful with that',
      'You better think twice about that',
      'It just cannot work',
      'You definetly dont match',
    ];
    expect(lowRatingMessages.includes(getMessage(0.2))).toBeTruthy();
  });
});
