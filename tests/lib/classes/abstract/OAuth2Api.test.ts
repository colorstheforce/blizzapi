import OAuth2API from '../../../../src/classes/abstract/OAuth2API';

// tslint:disable
class OAuth2APIMock extends OAuth2API {
  constructor() {
    super('foo', 'bar');
  }

  query(uri: string) {
    return {
      status: 'ok',
      uri,
    };
  }
}
// tslint:enable

describe('OAuth2API class', () => {
  test('should be defined', () => {
    expect(OAuth2API).toBeDefined();
  });

  test('should define clientId property', () => {
    expect(new OAuth2APIMock().clientId).toBe('foo');
  });

  test('should define clientSecret property', () => {
    expect(new OAuth2APIMock().clientSecret).toBe('bar');
  });

  test('should implement query method', () => {
    expect(new OAuth2APIMock().query).toBeDefined();
  });
});
