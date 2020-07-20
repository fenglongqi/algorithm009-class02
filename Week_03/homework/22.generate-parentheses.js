/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n <=0) return []
    
    let result = interval(n)
    return result
};


var interval = function (n, leftLevel = 0, rightLevel = 0, str = '', result = []) {
    if (leftLevel === n && rightLevel === n) {
        result.push(str)
        return result
    }

    if (leftLevel < n) {
        interval(n, leftLevel + 1, rightLevel, str + '(', result)
    }

    if (leftLevel > rightLevel) {
        interval(n, leftLevel, rightLevel + 1, str + ')', result)
    }
    return result
}


// generateParenthesis(5)