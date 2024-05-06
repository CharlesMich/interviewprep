// var majorityElement = function(nums) {
//     let obj = {};
//     for (let i = 0; i < nums.length; i++){
//         if(obj[nums[i]]){
//             obj[nums[i]]+=1
//         } else {
//             obj[nums[i]] = 1
//         }
//     }


//     let num = ""
//     let count = -Infinity;
//     for (let key in obj){
//         if (obj[key] > count){
//             num = key;
//         }
//     }
//     return num;
// };
// let nums = [2,2,1,1,1,2,2]
// console.log(majorityElement(nums))

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false


var canPlaceFlowers = function(flowerbed, n) {
    // loop through;
    // if(flowerbed.length < 3) return false;
    for (let i = 0; i < flowerbed.length-1; i++){
        // if i = 0;
        if (i = 0 && flowerbed[i] == 0 &&  flowerbed[i+1] == 0){
            n = n - 1;
            console.log(n)
            if (n == 0) return true;
            continue;
        }
        if (flowerbed[i-1] == 0 && flowerbed[i+1] == 0){
            n = n - 1;
            if (n == 0) return true;
            console.log(n)
            continue;
        }
        if (flowerbed[i] == 1 && flowerbed[i+1] == 0){
            continue
        }
        if (flowerbed[i-1] == 0  && flowerbed[i] == flowerbed.length-1 ){
            n = n - 1;
            if (n == 0) return true;
            break;
        }

        return false
       
    }
    // check if before and after is 0;
    // if yes, n = n-1;
    // continue to check
    // if before and after is not 0;
    // return false
    // or return true
    
};

// console.log(canPlaceFlowers([0,0,0], 1))

function permute(arr){
    let newArr = []
    console.log("charles")
    for (let i = 0; i < arr.length-1; i++){
        console.log(i)
        for(let j = i+1; j < arr.length; j++){
            newArr.push([arr[i], arr[j]])
        }
    }
    return newArr
}
let arr = [1,2,3,4, 5,6]
console.log(permute(arr))

// testing wakatime 
function multiply(num1, num2){
    return num1 * num2
}

console.log(multiply(2,3))