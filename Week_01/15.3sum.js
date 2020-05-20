/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var arr = nums.sort((a, b) => a - b)
    var result = []
    for (let i = 0; i < arr.length - 2; i++) {
        if (i >= 1 && arr[i] === arr[i - 1]) continue
        let j = i + 1
        let k = arr.length - 1

        while ( j < k ) {
            if (arr[j] + arr[k] + arr[i] > 0 ) {
                 --k
            } else if (arr[j] + arr[k] + arr[i] < 0) {
                ++j
            } else  {
                result.push([arr[j], arr[k], arr[i]])
                while (j < k && arr[k] === arr[k - 1]) {
                    k--
                }
                while (j < k && arr[j] === arr[j + 1]) {
                    j++
                }
                --k;
                ++j;
            }
        }

    }
    return result
};