// remove element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// filter method
var removeElement = function(nums, val) {
   return nums.filter(ele=> ele !== val)
  };

  nums = [0,1,2,2,3,0,4,2], val = 2
  console.log(removeElement(nums, val))

// slice method
const spliceElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++){
        if (nums[i]=== val){
            nums.splice(i,1)
        }
    }
    return nums;
}  
console.log(spliceElement(nums, val))

// Roman to integer

symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function romanToInt1(s){
    let value = 0; 
    for (let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
}
console.log(romanToInt1('MCMXCIV'))

// Write a function to find the longest common prefix string amongst an array of strings.
let longestCommonPrefix = function(strs) {
    let str = "";
    strs.sort((a,b)=> b.length-a.length);
   for (let i = 0; i < strs[0].length; i++){
   }
};

strs = ["flower","flow","flight"]

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
var isValid = function(s) {
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === "("){
            if (arr[i+1] !== ")") return false
        }
        if(arr[i] === ")"){i
            if (arr[i-1] !== "(") return false
        }
        if(arr[i] === "["){
            if (arr[i+1] !== "]") return false
        }
        if(arr[i] === "]"){
            if (arr[i-1] !== "[") return false
        }
        if(arr[i] === "{"){
            if (arr[i+1] !== "}") return false
        }
        if(arr[i] === "}"){
            if (arr[i-1] !== "{") return false
        }
        return true;
    }
};

let s = ")[]{}"
// console.log(isValid(s))

// remove duplicates
function removeDuplicates(nums){
    for(let i=0;i<nums.length;){
        if(nums[i] ===nums[i+1]){
            nums.splice(i,1)
        }else{
            i++
        }
    }
    return nums;
}

console.log(removeDuplicates([1,2,3,4,5,5,6,6,6,7,8,9]))

// remove a particular element in a array
function removeElement(nums, val){
    for(let i = 0; i < nums.length;){
        if(nums[i] === val){
            nums.splice(i,1)
        } else {
            i++
        }
    }
    return nums;
}console.log(removeElement([3,2,2,3], 3))

// find the index of the first occurance of a string 
var strStr = function(haystack, needle) {
    if (haystack.includes(needle)){
        return haystack.indexOf(needle[0])
    }
};

const haystack = 'mississippi'
const needle = 'issip'
console.log(strStr(haystack, needle))

function strStr(haystack, needle){
    const len = needle.length;
    for (let i = 0; i < haystack.length; i++){
        if(haystack.slice(i, i+len) === needle){
            // also  if(haystack.substring(i, i+len) === needle){
            return i;
        }
    }
    return -1
}
// search for a number
function searchInsert(nums, target){
  if (nums[nums.length-1] < target) return nums.length
    if (nums[0] > target) return 0
     if (nums.includes(target)){
            for (let i = 0; i < nums.length; i++){
                if(nums[i]=== target){
                    return i
                }
        }
    } else {
        if (nums[nums.length-1]=== target) return nums.length
        for (let i = 0; i < nums.length; i++){
            if(nums[i] < target && nums[i+1] > target){
               return  i+1
            }
        }

    }
}

// return length of last word
function lengthOfLastWord(s){
     let wordArr = s.split(' ');
    let newWord = wordArr.filter(ele => ele.trim() !== '')
    return newWord[newWord.length-1].length;
}

const word = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(word))

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
var plusOne = function(arr) {
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]<9){
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
};
let digit = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digit))

// Given two binary strings a and b, return their sum as a binary string.
var addBinary = function(a, b) {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
};
let a = "1010";
let b = "1011";

console.log(addBinary(a,b))