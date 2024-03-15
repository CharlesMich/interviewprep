// Given a list of numbers and a number k, return whether any two numbers from the list add up to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
function sumValue(arr, k){
    for ( let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === k){
                return true;
            }
        }
    }
    return false;
}
// console.log(sumValue([10, 15, 3, 7], 19))

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]. Follow-up: what if you can't use division?

function productNum(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let product = 1;
        let prodArr = arr.filter(ele => ele !== arr[i])
        newArr.push(prodArr.reduce((a,b) => a * b))
       
    }
    return newArr;
}
// console.log(productNum( [1, 2, 3, 4, 5]))

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well. For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3. You can modify the input array in-place.
function findLowest(arr){
    let lowest = 1;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === lowest){
            lowest = lowest+1
        } else {
            continue;
        }
    }
    return lowest
}
console.log(findLowest([3, 4, -1, 1]))