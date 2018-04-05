module.exports = { isMerge };

function isMerge(string, part1, part2) {
    const parts = `${part1}${part2}`;
    const matching = string.split('').reduce(
        (acc, letter) => {
            const letterInParts = parts.indexOf(letter);
            if (letterInParts > -1) {
                parts.slice(letterInParts, 1);
                return acc + letter;
            }
        }
    );
    return matching === string;
}