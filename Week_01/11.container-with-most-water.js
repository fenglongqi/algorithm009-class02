/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1, maxArea = 0
    while(i < j) {
        const area = (j - i) * Math.min(height[i], height[j])
        maxArea = Math.max(maxArea, area)
        height[i] < height[j] ? i++ : j--;
    }
    return maxArea
};