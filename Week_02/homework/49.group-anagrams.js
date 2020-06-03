/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = []
    for (let i = 0; i < strs.length; i++) {
        if (res.length === 0) {
            res.push([strs[i]])
            continue
        }

        let target = 0
        let flag = false
        for (let j = 0; j < res.length; j++) {
            if (isAnagram(strs[i], res[j][0])) {
                target = j
                flag = true
                break
            }
        }
        if (flag) {
            res[target].push(strs[i])
        } else {
            res.push([strs[i]])
        }
    }

    return res
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



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map()
    
    for(let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join()
        if(hash.has(str)) {
            let temp = hash.get(str)
            temp.push(strs[i])
            hash.set(str, temp)
        } else {
            hash.set(str, [strs[i]])
        }
    }
    
    return [...hash.values()]
};