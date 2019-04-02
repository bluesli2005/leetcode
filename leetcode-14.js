/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   var fStrs = strs[0];
   var res ='';
   if(!strs.length){
       return res;
   }
   for (var i = 0; i < fStrs.length; i++) {
       for (var j =  1; j < strs.length; j++) {
           if(fStrs[i] != strs[j][i]){
               return res;
           }
        }
        res += fStrs[i];
    }
    return res;
};