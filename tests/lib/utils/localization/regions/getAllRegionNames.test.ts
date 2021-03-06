import * as utils from '../../../../../src/utils';
import constants from '../../../../../src/constants';

const { REGIONS } = constants;

const { getAllRegionNames } = utils;

describe('getAllRegionNames()', () => {
  test('should be defined', () => {
    expect(getAllRegionNames).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllRegionNames).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllRegionNames).toBeTruthy();
    expect(getAllRegionNames().constructor === Array).toBe(true);
  });

  test('number of returned elements should match length of constants.REGIONS values after flattening', () => {
    const flattenedRegionsLength = <number>(
      ([] as ReadonlyArray<string>).concat(...Object.values(REGIONS)).length
    );
    expect(getAllRegionNames().length).toStrictEqual(flattenedRegionsLength);
  });
});
