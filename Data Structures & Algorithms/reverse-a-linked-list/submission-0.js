/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;
        //for loop
        let current = head
        let stack = new Array();
        while (current.next != null){
            stack.push(current)
            current = current.next
        }

        stack.push(current);
            //traverse the list and find last item
            // while traversing the list add to a stack
        
        let newHead = stack.pop();
        current = newHead;
        // from last element keep attaching to the head
        while(stack.length !== 0){
            current.next = stack.pop();
            current = current.next;
        }
        current.next = null;
        return newHead;
    }
}
