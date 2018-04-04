module.exports = { humanReadableDuration };

/**
 * 
 * @param {number} n 
 */
function humanReadableDuration(n) {
    if (n === 0) return 'now';
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    // const WEEK = 7 * DAY;
    const YEAR = 365 * DAY;
    const times = [{key: 'year', val: YEAR}, {key: 'day', val: DAY}, {key: 'hour', val: HOUR}, {key: 'minute', val:  MINUTE}, {key: 'second', val: 1}]
        .map(
            time => {
                const val = Math.floor(n / time.val);
                n -= val * time.val;
                return {key: time.key, val: val};
            }
        )
        .filter(
            time => time.val > 0
        )
        .reduce(
            (acc, time, index, arr) => {
                return `${acc}${time.val} ${time.val > 1 ? time.key + 's' : time.key}${index === arr.length -1 ? '' : index < arr.length -2   ? ', ': ' and '}`;
            }, ''
        )


    return times;
    
}