const solution = require('./solution');

describe('can merge strings', () => {
    it('should merge code wars', () => {
        expect(solution.isMerge('codewars', 'code', 'wars')).toBe(true);
    });

    it('should merge cdw oears', () => {
        expect(solution.isMerge('codewars', 'cdw', 'oears')).toBe(true);
    });

    it('should not merge cod wars', () => {
        expect(solution.isMerge('codewars', 'cod', 'wars')).toBe(false);
    });

    it('should merge happ y', () => {
        expect(solution.isMerge('happy', 'happ', 'y')).toBe(true);
    })

    it('should not merge ypaph thbiryad', () => {
        expect(solution.isMerge('happybirthday', 'ypaph', 'thbiryad')).toBe(false);
    })

    it('should not merge abc def', () => {
        expect(solution.isMerge('abcdefg', 'abc', 'def')).toBe(false);
    })

    it('should merge empty strings', () => {
        expect(solution.isMerge('', '', '')).toBe(true);
    });

    it('should merge when one string is empty', () => {
        expect(solution.isMerge('abc', 'abc', '')).toBe(true);
    });

    it('should merge when one string is longer than the other', () => {
        expect(solution.isMerge('abcdef', 'abc', 'defg')).toBe(false);
    });

    it('should handle empty parts', () => {
        expect(solution.isMerge('abc def', 'abc', 'def')).toBe(true);
    });

    it('should NOT create codewars from codes | wars', () => {
        expect(solution.isMerge('codewars', 'codes', 'wars')).toBe(false);
    })
});

//  can handle empty parts
// can handle extra characters
// can handle bananas
