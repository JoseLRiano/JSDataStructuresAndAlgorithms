/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let l3 = head;
    let carry = 0;
    
    while(l1 || l2){
        let l1_val = l1 ? l1.val : 0;
        let l2_val = l2 ? l2.val : 0;
        
        let sum = carry + l1_val + l2_val;
        carry = sum < 10 ? 0 : 1;
        let curr = sum % 10;
        let n = new ListNode(curr);
        l3.next = n;
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        l3 = l3.next;
    }
    if(carry > 0){
        let n = new ListNode(carry);
        l3.next = n;
    }
    return head.next;
};