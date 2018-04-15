const solution = require('./solution');

// Test.assertEquals(alphanumeric("Mazinkaiser"), true)
// Test.assertEquals(alphanumeric("hello world_"), false)
// Test.assertEquals(alphanumeric("PassW0rd"), true)
// Test.assertEquals(alphanumeric("     "), false)

describe('user input validation', () => {
    it('should return true for Mazinkaiser', () => {
        expect(solution.alphanumeric('Mazinkaiser')).toBe(true);
    });

    it('should return false for hello world_', () => {
        expect(solution.alphanumeric('hello world_')).toBe(false);
    });

    it('should return true for PassW0rd', () => {
        expect(solution.alphanumeric('PassW0rd')).toBe(true);
    });

    it('should return false for "     "', () => {
        expect(solution.alphanumeric('     ')).toBe(false);
    });
});