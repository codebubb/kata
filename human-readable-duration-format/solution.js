module.exports = { humanReadableDuration: humanReadableDuration };

/**
 * 
 * @param {number} n 
 */
function humanReadableDuration(n) {
    if (n === 0) return 'now';
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    
     let hour = Math.floor(n / HOUR);
     let minute = Math.floor((n - (hour * HOUR)) / MINUTE);
      const second = n % MINUTE;
    
      let returnstr = '';

    if (hour) {
        returnstr += `${hour} ${hour > 1 ? 'hours' : 'hour'}`;
        if (minute && second) returnstr += ', ';
        if (minute && !second) returnstr += ' and ';
    }
    if (minute) {
        returnstr += `${minute} ${minute > 1 ? 'minutes' : 'minute'}`;
        if (second) returnstr += ' and ';
    }

    if (second) {
        returnstr += `${second} ${second > 1 ? 'seconds' : 'second'}`;
    }

    return returnstr;
    
}