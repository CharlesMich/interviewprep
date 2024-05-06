// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

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

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
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

console.log(gcdOfStrings('abc', 'abc'))
