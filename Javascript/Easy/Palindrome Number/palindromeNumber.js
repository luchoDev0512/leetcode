/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let number = x.toString();
    let numberSize = number.length - 1;;
    let isPal = true;
    for (let position = 0; position < numberSize; position++) {
    if (number[position] !== number[numberSize - position]) {
        isPal = false
    }
   }
   return isPal;
};

module.exports = isPalindrome;