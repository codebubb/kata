module.exports = { isMerge };

function isMerge(string, part1, part2) {
    // Merge 'horizontally'
    if(`${part1}${part2}` === string) return true;
    part1 = part1.split('');
    part2 = part2.split('');
    for(let i=0; i<string.length; i++){
        const removedChar = string[i] === part1[0] 
        ?  part1.shift()
        :  string[i] === part2[0]
            ? part2.shift()
            : null;
        if(!removedChar) return false;
    }
    return !(part1.length > 0 || part2.length > 0);
}