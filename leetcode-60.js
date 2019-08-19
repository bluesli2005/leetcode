/**
 * n!
 * @param {number} n
 * @return {number}
 */
var fact=function(n){
    if(n===0){
        return 1;
    }
    return fact(n-1)*n;
};
/**
 * 生成数组
 * @param {number} length
 * @return {Array}
 */
let f = length => Array.from({length}).map((v,k) => (k+1));
/**
 * @param {number} n
 * @param {number} k
 * @return {String}
 */
var getPermutation = function(n, k) {
    if(n<1){
        return;
    }
    let arr=f(n)
    let idx=0;
    let arrTemp=[];
    k=k-1;//注意 k 从 0 开始很重要，不然后边整除和取余非常非常绕
    while(k>0){
        let num=fact(n-idx-1);
        let index=parseInt(k/num);
        arrTemp.push(arr[index]);
        arr.splice(index, 1);
        idx++;
        k=k%num;
    }
    arrTemp=arrTemp.concat(arr)
    return arrTemp.join('');
    
};