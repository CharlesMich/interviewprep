// Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.You must do this by traversing through the linked lists once.

// Say we wanted to compute 621 + 354 normally. The sum is 975:

//    621
//  + 354
//  -----
//    975

// Then, the reversed linked list format of this problem would appear as:

//     1 -> 2 -> 6
//  +  4 -> 5 -> 3
//  --------------

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const addLists = (head1, head2, carry = 0) => {
    if(!head1 && !head2 && !carry) return null;
    
    const val1 = !head1 ? 0 : head1.val  
    const val2 = !head2 ? 0 : head2.val
    
    let sum = val1 + val2 + carry;
    let digit = sum % 10;
    let nextCarry = sum > 9 ? 1 : 0;
    
    let newNode = new Node(digit)
    let next1 = head1 ? head1.next : null
    let next2 = head2 ? head2.next : null
    
    newNode.next = addLists(next1, next2, nextCarry)
    return newNode  
    
  };

//   Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

const arr = [12, 5, 1, 5, 12, 7]
function fiveSort(arr){

    let newArr = [];
    // console.log(newArr)
    for (let i = 0; i < arr.length; i++){
        // console.log(i)
        if(arr[i] == 5){
            newArr.push(5);
        }
    }
    const arr1 = arr.filter(ele=> ele!== 5);
    console.log(arr1)
    return [...arr, ...newArr]
    
    // loop through the array
    // check for 5's
    // if it is a 5, switch it with i+1;

// for (let i = 0; i < arr.length; i++){
    // if (arr[i] == 5){
    //     console.log(arr[i], arr[i+1])
    //     [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    //     console.log(arr[i], arr[i+1])
    // } else {
       
    //     continue;

    // }

    // includes method
   
}

// return arr;


console.log(fiveSort(arr))

// -> [12, 7, 1, 12, 5, 5]
function fiveSort(arr) {
    let j = arr.length - 1;
    let i = 0
    while(i < j){
        while(arr[j] === 5) {
            j--
        }

        if(arr[i] === 5) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j--
        }
        i++
    }

    return arr 
}