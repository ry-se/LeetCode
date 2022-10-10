/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {};
    for (var i of nums) {
        if (map[i]) return true;
        map[i] = true;
    }
    return false;
};