const solution = require('./solution');

describe('can merge strings', () => {
    it('should merge code wars', () => {
        expect(solution.isMerge('codewars', 'code', 'wars')).toBe(true);
    });

    it('should merge cdw oears', () => {
        expect(solution.isMerge('codewars', 'cdw', 'oears')).toBe(true);
    });

    it('should merge cod wars', () => {
        expect(solution.isMerge('codewars', 'cod', 'wars')).toBe(false);
    });
});