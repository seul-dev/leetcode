/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.map((num) => num.toString().length).filter((digit) => digit % 2 === 0).length
};