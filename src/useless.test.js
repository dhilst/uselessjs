// @flow
import useless_, { useless, UselessClass, UselessPromise } from './useless';

describe("Testing code that does nothing! Please make a donation!", () => {
  it('should return undefined', () => {
    expect(useless_()).toBeUndefined();
  });

  it('should return undefined', () => {
    expect(useless()).toBeUndefined();
  });

  it('should return undefined', () => {
    expect(new UselessClass().useless()).toBeUndefined();
  });

  it('should return undefined', () => {
    expect(useless_()).toBeUndefined();
  });

  it('should resolve to undefined', () => {
    expect(new UselessPromise()).resolves.toBeUndefined();
  });
});


