module.exports = { alphanumeric };

function alphanumeric(string){
    const regex = /[\w]*/;
    console.log(string.match(regex))
    return string.match(regex)[0].length === string.length;   
}

