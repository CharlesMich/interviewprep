// 1. You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
    let arr1 = word1.split('');
    let arr2 = word2.split('');  
    let mergeArr = []


   if (arr1.length == arr2.length){
    for (let i =0; i < arr1.length; i++){
        mergeArr.push(arr1[i])
        mergeArr.push(arr2[i])
        
    } 
    } else if(arr1.length > arr2.length){
    for (let i =0; i < arr1.length; i++){
        mergeArr.push(arr1[i])
        mergeArr.push(arr2[i])
    }
   } else if(arr2.length > arr1.length){
    for (let i =0; i < arr2.length; i++){
        mergeArr.push(arr1[i])
        mergeArr.push(arr2[i])  
    }
   }
   return mergeArr.join('')
};

// 2. For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";
    let a = str1.length;
    let b = str2.length;
    while (b) {
        let temp = b;
        b = a % b
        a = temp
    }
    return str1.substring(0,a)
    
};

// console.log(gcdOfStrings('abc', 'abc'))

// 3. There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have. Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise. Note that multiple kids can have the greatest number of candies.
var kidsWithCandies = function(candies, extraCandies) {
    let boolArray = [];
    for (let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= Math.max(...candies)){
            boolArray.push(true)
        } else {
            boolArray.push(false)
        }
    }
    return boolArray
};

// console.log(kidsWithCandies([2,3,5,1,3], 3))

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
var canPlaceFlowers = function(flowerbed, n) {
    
    for (let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1]===0) {
            flowerbed[i] = 1;
            n = n-1;
            if(n === 0) return true;
            continue;
        } 
    }
return false
    
};

console.log(canPlaceFlowers([1,0,0,0,1], 2))