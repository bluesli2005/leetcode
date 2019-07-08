/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    for(let i = 0; i < strs.length; i++){
        let str = strs[i]
        let k = strs[i].split('').sort().join('')
        if(!obj[k]) {
            obj[k] = []
        }
        obj[k].push(str)
    }

    let res = []
    for ( let j in obj) {
        if(obj.hasOwnProperty(j)){
            res.push(obj[j])
        }
    }
    return res 
};