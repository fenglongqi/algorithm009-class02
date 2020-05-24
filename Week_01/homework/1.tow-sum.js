/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = []
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            let sum = target - nums[i]
            for (let j = i; j <nums.length; j++) {
                if (sum === nums[j]) {
                    result.push([nums[i], nums[j]])
                }
            }
        }
    }
    return result    
};