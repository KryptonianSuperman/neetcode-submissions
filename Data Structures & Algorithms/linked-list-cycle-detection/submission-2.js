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
     * @return {boolean}
     */

    hasCycle(head) {
        const list = new Set()
        function childNodeValue(node, set){
            if(node?.next){
                // console.log("here", node, set)
                if(set.has(node.next)){
                    // console.log("true")
                    return true
                }
                set.add(node.next)
                return childNodeValue(node.next, set)
            }
            return false
        }
        return childNodeValue(head, list)

        // return false
    }
}
