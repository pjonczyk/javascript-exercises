const repeatString = function (content, times) {
    if (times < 0) {
        return "ERROR";
    }
    let result = "";
    for (i = 0; i < times; i++) {
        result += content;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
