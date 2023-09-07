

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

    