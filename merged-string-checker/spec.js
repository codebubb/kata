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

    it('should merge happ y', () => {
        expect(solution.isMerge('happy', 'happ', 'y'));
    })

    it('should merge ypaph thbiryad', () => {
        expect(solution.isMerge('happybirthday', 'ypaph', 'thbiryad'));
    })

    it('should not merge abc def', () => {
        expect(solution.isMerge('abcdefg', 'abc', 'def'));
    })
});