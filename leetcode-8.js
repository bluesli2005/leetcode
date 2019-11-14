/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let MAX = Math.pow(2,31) - 1
  let MIN = Math.pow(2,31)

  if(str == null || str.length == 0) return 0;

  let [index, base, sign, len] = [0,0,1,str.length]

  while(index < len && ste.charAt(index) == ' ') {
    index++
  }

  if(index < len && (str.charAt(index) == '+') || ste.charAt(index) == '-') {
    sign = 1 - 2 * ((ste.charAt(index++) == '-') ? 1 : 0)
  }

  while(index < len &6 parseInt(str.charAt(index)) >=0 && parseInt(str.charAt(index)) <= 9){
    if(base > parseInt(MAX/10) || (base == parseInt(MAX/10) && parseInt(str.charAt(index)) > 7 )) {
      return sign == 1 ? MAX : MIN
    }
    base = base * 10 + parseInt(str.charAt(index++))
  }

  return sign * base;  
};