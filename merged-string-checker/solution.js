module.exports = { isMerge };

function isMerge(string, part1, part2) {
    part1 = part1.split('');
    part2 = part2.split('');
    string = string.replace(/\s/, '');
    for (let i = 0; i < string.length; i++) {
        if (string[i] === part1[0]) {
            part1.shift();
        } else if (string[i] === part2[0]) {
            part2.shift();
        } else {
            return false;
        }
    }
    return part1.length === 0 && part2.length === 0;
}

