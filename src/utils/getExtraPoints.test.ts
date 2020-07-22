import getExtraPoints from './getExtraPoints';

describe('Get extra points', () => {
  it('returns 400', () => {
    expect(getExtraPoints('Bob', 'Bala')).toBe(400);
  });
});
