// Problem: https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let theRichest = 0
  accounts.forEach((account) => {
      const sum = account.reduce((acc, curr) => {
          return acc + curr
      }, 0)

      theRichest = Math.max(theRichest, sum)
  })
  return theRichest
};