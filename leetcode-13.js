/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s==null||s.length==0){return 0;}
    let getNum=function(str){
        switch(str){
            case "I":
             return 1;
            case "V":
             return 5;
            case "X":
             return 10;
            case "L":
             return 50;
            case "C":
             return 100;
            case "D":
             return 500;
            case "M":
             return 1000;
        }
    }
    let res=getNum(s[0]);
    for(let i =1;i<s.length;i++){
        if(getNum(s[i]) > getNum(s[i-1])){
            res += getNum(s[i])-2*getNum(s[i-1]);
        }else{
            res += getNum(s[i]);
        }}
    return res;
};