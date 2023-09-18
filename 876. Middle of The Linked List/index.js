// Problem: https://leetcode.com/problems/middle-of-the-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let fast = slow = head;
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow
};

/**
 * 這一題其實我沒有看懂，後來是從網路上得到解法的
 * 首先須了解什麼是首先須了解什麼是 Linked List (鏈表)
 * 寫了一小篇文章來記錄一下：https://medium.com/@zooeypeng/%E4%BB%80%E9%BA%BC%E6%98%AF%E9%8F%88%E8%A1%A8-linked-list-d5e82c79380c
 * 
 * 再來，這題的解法使用了快慢指針的優雅解法
 * 以往我們需要先知道資料長度，再去找他中間的節點，這樣需要兩次
 * 
 * 所以用快慢指針的做法可以同時做到找到中間點
 * 快指針指到結束點的時候，慢指針剛好會到中間
 */