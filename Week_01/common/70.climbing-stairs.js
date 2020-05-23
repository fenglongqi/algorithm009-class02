/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var step = 0;
    a = 1; b = 2;
    if (n == 1) return 1
    if (n == 2) return 2
    for (let i = 2; i < n; i++) {
        step = a + b
        a = b
        b = step
    }
    return step
};