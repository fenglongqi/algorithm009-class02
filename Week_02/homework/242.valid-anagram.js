/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false

    let obj1= {}
    const obj2 = {}

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = obj1[s[i]] ? obj1[s[i]] + 1 : 1
    }
    for (let i = 0; i < t.length; i++) {
        obj2[t[i]] = obj2[t[i]] ? obj2[t[i]] + 1 : 1
    }

    for(let key in obj1) {
        if (obj1[key] != obj2[key]) return false
    }

    for(let key in obj2) {
        if (obj1[key] != obj2[key]) return false
    }

    return true
};


var isAnagram = function(s, t) {
    if (s.length != t.length) return false

    let arr = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++) {
       arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
       arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--        
    }

    for(let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            return false
        }
    }

    return true
};