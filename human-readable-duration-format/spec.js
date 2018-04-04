const solution = require('./solution');

describe('human readable duration', () => {
    it('should return "now" for a zero value input', () => {
        expect(solution.humanReadableDuration(0)).toBe('now');
    });

    it('should return 1 minute 1 second for singular numbers', () => {
        expect(solution.humanReadableDuration(61)).toBe('1 minute and 1 second');
    });

    it('should return 32 seconds for a value of 32', () => {
        expect(solution.humanReadableDuration(32)).toBe('32 seconds');
    });

    it('should return 1 minute 32 seconds for a value of 92', () => {
        expect(solution.humanReadableDuration(92)).toBe('1 minute and 32 seconds')
    });

    it('should return 3 hours 1 minute and 32 seconds', () => {
        expect(solution.humanReadableDuration(10892)).toBe('3 hours, 1 minute and 32 seconds')
    })

    it('should return 3 hours and 32 seconds', () => {
        expect(solution.humanReadableDuration(10832)).toBe('3 hours and 32 seconds');
    });
});