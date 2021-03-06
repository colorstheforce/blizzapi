import * as utils from '../../../../../src/utils';
import constants from '../../../../../src/constants';
const { LOCALES } = constants;
const { getLocalesByRegionId } = utils;

import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

describe('getLocalesByRegionId()', () => {
  test('should be defined', () => {
    expect(getLocalesByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getLocalesByRegionId).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach(regionId =>
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getLocalesByRegionId(regionId)).toBe(LOCALES[regionId]);
    }),
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(wrongRegionId =>
    test('should throw RangeError for ${wrongRegionId} as invalid region id', () => {
      expect(() => getLocalesByRegionId(wrongRegionId)).toThrow(RangeError);
    }),
  );
});
