import calculateRating, {
  getAsciiCodes,
  getHashedName,
  getSum,
} from './calculateRating';

// TODO: Add scenario for wrong inputs etc.

describe('getHashedName', () => {
  it('returns hash of length 10', () => {
    expect(getHashedName('Alice').length).toBe(10);
  });

  it('returns valid hash', () => {
    expect(getHashedName('Bob')).toBe('52579f5dd4');

    expect(getHashedName('Alice')).toBe('e7dcee3cc6');
  });

  it('returns same hash for different cases', () => {
    expect(getHashedName('Maria') === getHashedName('maria')).toBeTruthy();

    expect(getHashedName('Maria') === getHashedName('MARIA')).toBeTruthy();

    expect(getHashedName('Maria') === getHashedName('mArIa')).toBeTruthy();

    expect(getHashedName('Maria') === getHashedName('MArIa')).toBeTruthy();
  });

  it('returns same hash when name has whitespaces', () => {
    expect(getHashedName('Maria') === getHashedName(' Maria ')).toBeTruthy();
  });

  it('returns same hash when name has whitespaces', () => {
    expect(getHashedName('Maria') === getHashedName(' Maria ')).toBeTruthy();
  });
});

describe('getAsciiCodes', () => {
  it('returns valid code', () => {
    expect(getAsciiCodes('aa')).toEqual([97, 97]);

    expect(getAsciiCodes('z')).toEqual([122]);

    expect(getAsciiCodes('zzzzzzczzz')).toEqual([
      122,
      122,
      122,
      122,
      122,
      122,
      99,
      122,
      122,
      122,
    ]);
  });
});

describe('getSum', () => {
  it('returns valid sum', () => {
    expect(getSum([1, 1, 1, 1])).toBe(4);
  });
});

describe('calculateRating', () => {
  it('returns valid percentage', () => {
    expect(calculateRating('Bob', 'Alice')).toBe(0.85);
  });

  it('returns same percentage for different cases', () => {
    expect(
      calculateRating('Bob', 'Alice') === calculateRating('bob', 'alice'),
    ).toBeTruthy();

    expect(
      calculateRating('Bob', 'Alice') === calculateRating('BOB', 'ALICE'),
    ).toBeTruthy();

    expect(
      calculateRating('Bob', 'Alice') === calculateRating('bOb', 'AlIcE'),
    ).toBeTruthy();
  });

  it('throws an error on empty strings', () => {
    expect(() => {
      calculateRating('', '');
    }).toThrow('Invalid names!');

    expect(() => {
      calculateRating('Bob', '');
    }).toThrow('Invalid names!');

    expect(() => {
      calculateRating('', 'Alice');
    }).toThrow('Invalid names!');
  });
});
