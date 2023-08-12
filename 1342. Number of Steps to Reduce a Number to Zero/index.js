// Problem: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let count = 0
  
  while (num !== 0) {
      num % 2 === 0 ? num /= 2 : num--
      count++
  }
  
  return count
};