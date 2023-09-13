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


    