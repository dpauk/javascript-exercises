const reverseString = function(stringToReverse) {
    let arrayString = stringToReverse.split("");
    let reversedArrayString = arrayString.reverse();
    let output = "";

    for (let i = 0; i < arrayString.length; i++) {
        output += reversedArrayString[i];
    }
    return output;

};

// Do not edit below this line
module.exports = reverseString;
