/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
        return Math.round(((((1 + Math.sqrt(5))/2) ** n) - (((1 - Math.sqrt(5))/2) ** n)) / Math.sqrt(5));
};