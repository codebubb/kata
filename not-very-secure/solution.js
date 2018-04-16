module.exports = { alphanumeric };

const alphanumeric = (string) => {
    const regex = /[a-zA-Z0-9]+/;
    const match = string.match(regex);
    return !!match && match[0].length === string.length;   
}
