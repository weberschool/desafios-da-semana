const assert = require('assert');
const cashMachine = require('../cash-machine.js');

describe('Cash Machine', function() {

    it('should return the sequence [20, 10] when the value is 30 reais', function() {
        assert.deepEqual(cashMachine.getCash(30), [20, 10]);
    });
    
    it('should return the sequence [100, 20] when the value is 120 reais', function() {
        assert.deepEqual(cashMachine.getCash(120), [100, 20]);
    });

    it('should return the sequence [50, 20, 10] when the value is 80 reais', function() {
        assert.deepEqual(cashMachine.getCash(80), [50, 20, 10]);
    });

    it('should return the sequence [100, 100, 100, 100, 100, 20] when the value is 520 reais', function() {
        assert.deepEqual(cashMachine.getCash(520), [100, 100, 100, 100, 100, 20]);
    });

    it('should return False when the value is 12 reais', function() {
        assert.equal(cashMachine.getCash(12), false);
    });

    it('should return False when the value is 43 reais', function() {
        assert.equal(cashMachine.getCash(43), false);
    });

    it('should return False when the value is 524 reais', function() {
        assert.equal(cashMachine.getCash(524), false);
    });

    it('should return the quantity 1 when the value total is 30 reais and unit is 20', function() {
        assert.equal(cashMachine.getQuantityOfUnitByValue(30, 20), 1);
    });

    it('should return the quantity 1 when the value total is 120 reais and unit is 100', function() {
        assert.equal(cashMachine.getQuantityOfUnitByValue(120, 100), 1);
    });

    it('should return the quantity 12 when the value total is 120 reais and unit is 10', function() {
        assert.equal(cashMachine.getQuantityOfUnitByValue(120, 10), 12);
    });

    it('should return the quantity 5 when the value total is 520 reais and unit is 100', function() {
        assert.equal(cashMachine.getQuantityOfUnitByValue(520, 100), 5);
    });

    it('should return the sequence [10, 20, 20, 20] when unit is 20, quantity is 3 and collection is [10]', function() {
        assert.deepEqual(cashMachine.addUnitInCollection(20, 3, [10]), [10, 20, 20, 20]);
    });

    it('should return the sequence [50, 50] when unit is 50, quantity is 2 and collection is []', function() {
        assert.deepEqual(cashMachine.addUnitInCollection(50, 2, []), [50, 50]);
    });

    it ('should return 20 when total is 120 and unit is 100', function() {
        assert.equal(cashMachine.getRemaning(120, 100), 20);
    });

    it ('should return 10 when total is 30 and unit is 20', function() {
        assert.equal(cashMachine.getRemaning(30, 20), 10);
    });

    it ('should return 20 when total is 520 and unit is 100', function() {
        assert.equal(cashMachine.getRemaning(520, 100), 20);
    });

    it ('should return zero when total is 100 and unit is 50', function() {
        assert.equal(cashMachine.getRemaning(100, 50), 0);
    });

});