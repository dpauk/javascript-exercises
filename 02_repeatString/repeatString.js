const repeatString = function(stringToRepeat, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return "ERROR";
    }

    let output = "";
    for (let i = 0; i < numberOfRepeats; i++) {
        output += stringToRepeat;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
