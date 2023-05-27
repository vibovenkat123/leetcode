var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function reverseList(head) {
    var current = head;
    var previous = null;
    var nextNode = head;
    while (current !== null) {
        if (nextNode !== null) {
            nextNode = nextNode.next;
        }
        else {
            nextNode = null;
        }
        current.next = previous;
        previous = current;
        current = nextNode;
    }
    return previous;
}
;
var linked_list = new ListNode();
linked_list.val = 2;
linked_list.next = { val: 5, next: null };
console.log(reverseList(linked_list));
