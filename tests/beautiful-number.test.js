const assert = require('assert');
const beautifulNumber = require('../beautiful-number.js');

describe('Beautiful Number', function() {

    it('should return True when the number is 42', function() {
        assert.equal(beautifulNumber.is(42), true);
    });

    it('should return False when the number is 5679', function() {
        assert.equal(beautifulNumber.is(5679), false);
    });

    it('should return False when the number is 49', function() {
        assert.equal(beautifulNumber.is(49), false);
    });

    it('should return False when the number is 40009', function() {
        assert.equal(beautifulNumber.is(40009), false);
    });

    it('should return False when the number is 4114', function() {
        assert.equal(beautifulNumber.is(4114), true);
    });

    it('should return True when the number is 7864', function() {
        assert.equal(beautifulNumber.is(7864), true);
    });

    it('should return False when the number is 85901', function() {
        assert.equal(beautifulNumber.is(85901), false);
    });

});