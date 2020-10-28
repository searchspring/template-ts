import { expect } from 'chai';

import thingy from '../src';

describe('test suite', () => {
	it('unit test', () => {
		expect(thingy('foo')).to.eql('foo-suffix');
	});
});
