const reverseString = function (input) {
    let inputArray = input.split('');
    let reversedArray = inputArray.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
