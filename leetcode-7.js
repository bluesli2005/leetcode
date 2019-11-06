/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   var r = [];
   var intT = x.toString();
   for(var i = intT.length-1;i > 0;i--){
       r.push(intT[i]);
   }
   if(intT[0] == "-"){
       r.unshift("-");
   }
   r.push(intT[0]);
   var n = parseInt(r.join(""));
   if(n <= Math.pow(-2,31) || n >= Math.pow(2,31) - 1 ){
       return 0;
   }
   return n;
};