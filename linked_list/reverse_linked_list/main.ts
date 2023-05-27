class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    let current = head;
    let previous: ListNode | null  = null;
    let nextNode = head;
    while (current !== null) {
        if (nextNode !== null) {
            nextNode = nextNode.next;
        } else {
            nextNode = null;
        }
        current.next = previous;
        previous = current;
        current = nextNode;
    }
    return previous;
};

const linked_list = new ListNode();
linked_list.val = 2;
linked_list.next = {val: 5, next: null};
console.log(reverseList(linked_list));

