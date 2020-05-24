/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let s = 0
    var i = 0
    for(; i < m; i++) {
        for(let j = s; j < n; j++) {
            if (nums1[i] >= nums2[j]) {
                nums1.splice(i, 0, nums2[j])
                ++m
                s++
                nums1.length -= 1
            } else {
                break
            }
        }
    }
    if (s < n) {
        for(let j = s; j < n; j++) {
            nums1[i] = nums2[j]
            i++
        }
    }
    return nums1
};