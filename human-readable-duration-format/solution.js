module.exports = { humanReadableDuration: humanReadableDuration };

/**
 * 
 * @param {number} n 
 */
function humanReadableDuration(n) {
    if (n === 0) return 'now';
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    
    const returnObj = {
        hour: Math.floor(n / HOUR),
        minute: Math.floor((n % this.hour) / MINUTE),
        second: n % MINUTE,
    }

    return Object.keys(returnObj).reduce((total, key) => {
        if(returnObj[key]) {
            if(returnObj[key] === 1){
                return total + returnObj[key] + ' ' + key + ' ';
            } else {
                return total + returnObj[key] + ' ' + key + 's ';
            }
        }
        return total;
    }, '').trim();
}