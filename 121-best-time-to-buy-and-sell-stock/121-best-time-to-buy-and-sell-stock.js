/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    
    for (var i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i-1])
        profit = Math.max(prices[i] - min, profit)
        if (prices.indexOf(min) === prices.length - 1) {
            return 0
        }
    }
    return profit;
};