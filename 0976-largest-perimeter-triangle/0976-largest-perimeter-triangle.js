/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const sorted = nums.sort(function(a, b){return a - b});
    for (var i = nums.length-1; i >= 2; i--) {
        if (sorted[i] < (sorted[i-1] + sorted[i-2])) {
            return sorted[i] + sorted[i-1] + sorted[i-2];
        }
    }
    return 0;
};