/**
 * @param {number[]} A
 * @return {number}
 */

var peakIndexInMountainArray = function(A) {
    let j = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] > A[i + 1]){
            j = i;
            break;
        }
    }
    return j;
};

// It's timeout
// var peakIndexInMountainArray = function(A) {
//     let l = 0 , h = A.length - 1, m = ( l + h ) / 2 ;
//     while( m <= h && m > 0 && m >= l ) {
//         if( A[m] > A[m - 1] && A[m] > A[m + 1])
//             return m;
//         else if( A[m] < A[m - 1])
//             h = m - 1 ;
//         else if( A[m] < A[m + 1])
//             l = m + 1 ;
//         m = ( l + h ) / 2 ;
//     }
//     return  A[m] > A[m + 1] ? m : m + 1 ;
// }