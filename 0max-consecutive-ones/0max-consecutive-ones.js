/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    nums.forEach((num)=> {
        if(num === 1) {
            count += 1;
            maxCount = Math.max(maxCount, count)
        } else {
            count = 0;
        }
    })
    
    return maxCount
};