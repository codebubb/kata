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

    it('should return 3 days, 3 hours, 3 minutes and 32 seconds', () => {
        // 3 days = 3 x 24 x 60 x 60 = 259,200
        // 3 hours = 3 x 60 x 60 = 10,800
        // 3 minutes = 3 x 60 = 180
        // + 32 seconds 
        // == 270,212
        expect(solution.humanReadableDuration(270212)).toBe('3 days, 3 hours, 3 minutes and 32 seconds');
    })
});