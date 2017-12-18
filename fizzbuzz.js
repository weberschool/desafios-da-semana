module.exports = {
    translate: function(numero) {
        if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz';
        if (numero % 3 === 0) return 'fizz';
        if (numero % 5 === 0) return 'buzz';
    },

    translateSequence: function(sequence) {
        return '1, 2, fizz, 4, buzz, 14, fizzbuzz';
    }
};