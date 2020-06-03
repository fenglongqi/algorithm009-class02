var twoSum = function(nums, target) {
    if (nums.length === 0) return nums
    var obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }

    for (let j = 0; j < nums.length; j++) {
        if (obj[target - nums[j]] && obj[target - nums[j]] !== j) {
            return [j, obj[target - nums[j]]]
        }
    }

    return []
};