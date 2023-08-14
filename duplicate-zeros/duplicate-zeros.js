/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const length = arr.length;
    const result = [];
    
    for(const num of arr) {
        result.push(num);
        if(num === 0) {
            result.push(num)
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
};