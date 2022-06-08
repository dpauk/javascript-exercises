const removeFromArray = function(arrayIn, elementToRemove) {
    let startingArray = arguments[0];
    let elementsToRemove = [];

    // Get all the elements to remove, ignoring the first argument
    for (let i in arguments) {
        if (i == 0) {
            continue;
        }
        elementsToRemove.push(arguments[i]);
    }

    let output = [];

    for (let item in startingArray) {
        // Check to see if the current item should be removed
        if (elementsToRemove.indexOf(startingArray[item]) == -1) {
            output.push(startingArray[item]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
