/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index = nums.indexOf(target)
    if (index > -1) {
        return index;
    } else {
        let left = 0, right = nums.length
        while(left < right) {
            const mid = left + Math.floor((right - left) / 2)
            if (nums[mid] > target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    
    
};