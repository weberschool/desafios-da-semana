const assert = require('assert');
const FizzBuzz = require('../fizzbuzz.js');

describe('Fizzbuzz', function() {
    describe('Fizz', function() {
        it('deve retornar "fizz" quando o número é 3', function() {
            assert.equal(FizzBuzz.translate(3), 'fizz');
        });
    
        it('deve retornar "fizz" quando o número é 6', function() {
            assert.equal(FizzBuzz.translate(6), 'fizz');
        });
    
        it('deve retornar "fizz" quando o número é 9', function() {
            assert.equal(FizzBuzz.translate(9), 'fizz');
        });
    });

    describe('Buzz', function() {
        it('deve retornar "buzz" quando o número é 5', function() {
            assert.equal(FizzBuzz.translate(5), 'buzz');
        });

        it('deve retornar "buzz" quando o número é 10', function() {
            assert.equal(FizzBuzz.translate(10), 'buzz');
        });

        it('deve retornar "buzz" quando o número é 20', function() {
            assert.equal(FizzBuzz.translate(20), 'buzz');
        });
    });

    describe('FizzBuzz', function() {
        it('deve retornar "fizzbuzz" quando o número é 15', function() {
            assert.equal(FizzBuzz.translate(15), 'fizzbuzz');
        });

        it('deve retornar "fizzbuzz" quando o número é 30', function() {
            assert.equal(FizzBuzz.translate(30), 'fizzbuzz');
        });

        it('deve retornar "fizzbuzz" quando o número é 60', function() {
            assert.equal(FizzBuzz.translate(60), 'fizzbuzz');
        });
    });

    describe('Lista FizzBuzz', function() {
        it('deve retornar "1, 2, fizz, 4, buzz, 14, fizzbuzz" quando a sequência é 1, 2, 3, 4, 14, 15', function() {
            assert.equal(FizzBuzz.translateSequence([1, 2, 3, 4, 14, 15], '1, 2, fizz, 4, buzz, 14, fizzbuzz'));
        });
    })
});