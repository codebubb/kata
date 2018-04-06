module.exports = { isMerge };

function isMerge(string, part1, part2) {
    const parts = `${part1}${part2}`.split('');
    const matching = string.split('').reduce(
        (acc, letter) => {
            const letterInParts = parts.indexOf(letter);
            if (letterInParts > -1 &&) {
                parts.splice(letterInParts, 1);
                return acc + letter;
            }
        }, ''
    );
    return parts.length === 0 && matching === string;
}