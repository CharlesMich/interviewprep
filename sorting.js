// Bubble sort

function bubbleSort(arr) {
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
        if(!swapped) return arr;
    }
}
let arr = [2,4,6,8,1,3,5,7,9];
console.log(bubbleSort(arr))

function bubbleSort2(arr){
    let swapped = false;
    for(let i = 0; i < arr.length-1; i++){
        for (let j = 0; j < arr.length-i; j++){
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true;
            }
          
        }
        if(!swapped) return arr;
    }
    return arr;
}
console.log(bubbleSort2(arr))

// insertion sort in place
function insertionSortInPlace(arr){
    let divider = 1;
    
    while (divider < arr.length){
        const val = arr[divider]
        let i = divider;
        while (i > 0){
            if (arr[i-1] <= val) {
                break;
            } else {
                arr[i] = arr[i-1]
                i--
            }
        }
        arr[i] = val;
        divider++
    }
    return arr;
}
console.log(insertionSortInPlace(arr))


