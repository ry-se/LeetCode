/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let i = 0;
    let j = arr.length - k;
    
    while (i < j) {
        const middle = Math.floor((i + j) / 2)
        if (x - arr[middle] > arr[middle + k] - x) {
            i = middle + 1;
        } else {
            j = middle;
        }
    }
    return arr.slice(i, i + k);
};