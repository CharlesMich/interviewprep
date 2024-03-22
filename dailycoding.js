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
// console.log(findLowest([3, 4, -1, 1]))

// Good morning! Here's your coding interview problem for today.

// This problem was asked by Jane Street.
// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

function cons(a, b){
    function pair(f){
        return f(a, b)
    }
    return pair

}

console.log(cons(3,4))
// Implement car and cdr
function car(xyz){
    return xyz
}

function cdr(xyz){
    return xyz
}

console.log(car(cons(3, 4)))


// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded. For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'. You can assume that the messages are decodable. For example, '001' is not allowed.
let code = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26
}
function decode(num){
    const arr = num.toString().split("")
    const newArr = [];
    
    return arr;
}
console.log(decode(121))

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative. For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

