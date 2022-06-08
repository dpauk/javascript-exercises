const sumAll = function(startNum, endNum) {
    let sum = 0;

    if (startNum < 0 || endNum < 0) {
        return "ERROR"
    }

    if (typeof startNum !== 'number' || typeof endNum !== 'number') {
        return "ERROR"
    }

    let lowestNum = startNum;
    let highestNum = endNum;

    if (endNum < startNum) {
        lowestNum = endNum;
        highestNum = startNum;
    }

    for (let n = lowestNum; n <= highestNum; n++) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
