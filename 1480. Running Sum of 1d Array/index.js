// Problem: https://leetcode.com/problems/running-sum-of-1d-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let n = 0
    return nums.map(num => n += num)
};

// 下面這個是我原本寫的，發現 runtime 還比較快，可能是因為用的是 forEach

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumArr = [];
    let n = 0

    nums.forEach((num, i) => {
        if (i === 0) {
            n = num
        } else {
            n += nums[i]
        }
        sumArr.push(n)
    })

    return sumArr
};