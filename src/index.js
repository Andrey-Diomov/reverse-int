module.exports = function reverse(n) {
    let str = String(n);
    let reverseStr = str.split("").reduce((acc, char) => char + acc, "");
    return parseInt(reverseStr);
}
