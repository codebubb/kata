module.exports = { humanReadableDuration };

/**
 * 
 * @param {number} n 
 */
function humanReadableDuration(n) {
    if (n === 0) return 'now';
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    const DAYS = 24 * HOUR;

    const times = (num) => {
        this.baseTime = num;
        this.days = () => Math.floor(this.baseTime / DAYS),
        this.hours = () => Math.floor((this.baseTime - this.days * DAYS) / HOUR);
        this.minutes = () => Math.floor((this.baseTime - ((this.days * DAYS) + this.hours * HOURS)));
        this.seconds = () => this.baseTime % MINUTE;
    };


    let returnStr = '';
    const returnArr = [];

  

    console.log('Times: ', times.days.call({baseTime: n}));
    
    
    for(let i=0; i<returnArr.length; i++) {
        returnStr += `${returnArr[i].value} ${returnArr[i].value > 1 ? returnArr[i].key + 's' : returnArr[i].key}`;
        if(i < returnArr.length -1) returnStr += ', ';
        if(i === returnArr.length -1) returnStr += ' and ';
    }

    console.log('Returnstr: ', returnStr);
    return returnStr;
    
}