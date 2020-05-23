/**
 * 替换前面的元素， 因为是有序的数组可以
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    if (nums.length < 2) return false
    let q = 0, p = 1
    while (p < nums.length) {
        if (nums[q] !== nums[p]) {
            nums[++q] = nums[p]
        }
        p++
    }

    // length = q + 1
    return ++q
};