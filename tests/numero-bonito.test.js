
const assert = require('assert');
const beautifulNumber = require('../beautiful-number.js');

describe('Beautiful Number', function() {
    it('should return True when number is 42', function() {
        assert.equal(beautifulNumber.is(42), true);
    });

    it('should return False when number is 49', function() {
        assert.equal(beautifulNumber.is(49), false);
    });

    it('should return False when number is 52', function() {
        assert.equal(beautifulNumber.is(52), false);
    });

    it('should return False when number is 24', function() {
        assert.equal(beautifulNumber.is(24), true);
    });
});