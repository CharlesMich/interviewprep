

var hasCycle = function(head) {
    let curr = head;
    while(curr && curr.next){
        head = head.next;
        curr = curr.next.next;
        if(curr === head) return true;
        }
        return false;
    }