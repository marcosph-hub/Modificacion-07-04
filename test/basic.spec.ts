import 'mocha';
import { expect } from 'chai';
import { Tester } from '../src/basic'
describe('basic test',() => {
  it('Return 1',() => {
    expect(Tester()).to.be.equal(1)
  });
});