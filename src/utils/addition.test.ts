import addition from './addition';

describe('addition', () => {
  it('should return 5, when a=2 and b = 3', () => {
    expect(addition(2, 3)).toBe(5);
  });
});
