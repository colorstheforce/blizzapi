import constants from '../../../../lib/constants';

const { DEFAULT_LOCALES } = constants;

describe('DEFAULT_LOCALES', () => {
  test('should be defined', () => {
    expect(DEFAULT_LOCALES).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(DEFAULT_LOCALES)).toBe(true);
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(DEFAULT_LOCALES).length).toStrictEqual(4);
  });

  test('should contain property "1"', () => {
    expect(DEFAULT_LOCALES[1]).toBeDefined();
  });

  test('property "1" should be equal to 0', () => {
    expect(DEFAULT_LOCALES[1]).toStrictEqual(0);
  });

  test('should contain property "2"', () => {
    expect(DEFAULT_LOCALES[2]).toBeDefined();
  });

  test('property "2" should be equal to 0', () => {
    expect(DEFAULT_LOCALES[2]).toStrictEqual(0);
  });

  test('should contain property "3"', () => {
    expect(DEFAULT_LOCALES[3]).toBeDefined();
  });

  test('property "3" should be equal to 0', () => {
    expect(DEFAULT_LOCALES[3]).toStrictEqual(0);
  });

  test('should contain property "5"', () => {
    expect(DEFAULT_LOCALES[5]).toBeDefined();
  });

  test('property "5" should be equal to 0', () => {
    expect(DEFAULT_LOCALES[5]).toStrictEqual(0);
  });
});
