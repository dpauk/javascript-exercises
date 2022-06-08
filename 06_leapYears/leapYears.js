const leapYears = function(year) {
    // Is it divisible by 4?
    if (year % 4 !== 0) {
        return false;
    }

    // Is it divisble by 100, but not by 400?
    if (year % 100 === 0 && year % 400 !== 0) {
        return false
    }

    return true;
};

// Do not edit below this line
module.exports = leapYears;
