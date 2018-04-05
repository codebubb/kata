module.exports = { humanReadableDuration };

/**
 * Takes a number which relates to a time period in seconds
 * The number is then converted in to a human readable expression
 *
 * @param {number} timeInSeconds 
 */
function humanReadableDuration(timeInSeconds) {
    if (timeInSeconds === 0) {
        return 'now';
    }
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const YEAR = 365 * DAY;
    return [{key: 'year', val: YEAR}, {key: 'day', val: DAY}, {key: 'hour', val: HOUR}, {key: 'minute', val:  MINUTE}, {key: 'second', val: 1}]
        .map(
            time => {
                const val = Math.floor(timeInSeconds / time.val);
                timeInSeconds -= val * time.val;
                return {key: time.key, val: val};
            }
        )
        .filter(
            time => time.val > 0
        )
        .reduce(
            (accumulator, time, index, arr) => {
                return `${accumulator}${time.val} ${time.val > 1 ? time.key + 's' : time.key}${index === arr.length -1 ? '' : index < arr.length -2   ? ', ': ' and '}`;
            }, ''
        )    
}