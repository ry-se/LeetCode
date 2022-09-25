/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    for (var i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i-2] + nums[i], (nums[i-3] || 0) + nums[i])
    }
    
    return Math.max(nums[nums.length-1], nums[nums.length-2]);
}