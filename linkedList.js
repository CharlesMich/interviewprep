class LinkedListNode {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null
      this.length = 0
    }
}

var hasCycle = function(head) {
    let curr = head;
    while(curr && curr.next){
        head = head.next;
        curr = curr.next.next;
        if(curr === head) return true;
        }
        return false;
    }

    // delete duplicate
    var deleteDuplicates = function(head) {
        let temp = head
        while (temp !== null){
            if((temp.next !== null) && temp.val === temp.next.val){
                var next_next = temp.next.next;
                var nodeToDelete = temp.next;
                temp.next = next_next;
                delete(nodeToDelete);
            }else{
                temp = temp.next;
            }
        }
        return head;
    };

    // middle node
    var middleNode = function(head) {
        let twice = head;
        let once = head;
        while(twice && twice.next){
            twice = twice.next.next;
            once = once.next;
        }
        return once;
    };

    // merge two sorted list;
    var mergeTwoLists = function(list1, list2) {
   let dummy = new ListNode(-Infinity), prev = dummy;
   while (list1 && list2){
       if(list1.val <= list2.val){
           prev.next = list1;
           prev = list1;
           list1 = list1.next;
       } else {
           prev.next = list2;
           prev = list2;
           list2 = list2.next;
       }
   }
   if(!list1) prev.next = list2;
   if(!list2) prev.next = list1;
   return dummy.next;
}

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Remove the nth node from the end of a singly linked list and return its head.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The index of the node to remove from the end.
 * @return {ListNode} - The head of the modified linked list.
 */

var removeNthFromEnd = function(head, n) {
    const copy = new ListNode(0);
    copy.next = head;
    let first = copy;
    let second = copy;
    for ( let i = 0; i < n + 1; i++){
        first = first.next;
    }
    while (first !== null){
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next
    return copy.next
};
// multiply 1 x x numbers

function helper(a,b){
    let product = 0;
    let base = 1
    let numArr = b.toString().split().reverse();
    for (let i = 0; i < numArr.length; i++){
        product = product + a * numArr[i];
    }
    return product
}
// console.log(helper( 2, 1000))

// multiply multiple digits
function multiply(top,bottom){

    let sum = 0;
    let numArr = bottom.toString().split();
    for (let i = 0; i < numArr.length; i++){
        sum = sum + helper(top, numArr[i])
    }

    return sum 
}
console.log(multiply(12345,54321))