const {primeFactors} = require('../solution');

describe('primes in numbers', () => {
    it('should give a response', () => {
        expect(primeFactors()).toBeTruthy();
        expect(typeof primeFactors()).toBe('string');
    });
});
