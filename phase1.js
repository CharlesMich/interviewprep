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

// console.log(addBinary(a,b))

// square root
var mySqrt = function(x) {
    if(x === 0) return 0
     let num = 1;
   for(let i = 1; i <= x; i++){
    if (i * i === x) return i;
    if(i * i < x && (i+1)*(i+1) === x) return i+1;
    if (i * i < x && (i+1)*(i+1) > x) return i;
   }
};

console.log(mySqrt(9))

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
function climbStairs(n){
    if (n < 1 || n > 45) return "pls give a num between 1 and 45"
    if (n >= 1 && n <= 3) return n;
}

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
function merge(nums1, m, nums2, n){
   for (let i = 0; i <= nums2.length; i++){
    nums1.push(nums2[i])
   }
    return nums1.filter(num => num > 0).sort()
}
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n))

// palindrome
function isPalindromw(s){
    if (s < 1) return false;
    if (s.length === 1) return true;
    s = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
   let yes = s.split('').reverse().join('');
   if (yes == s) return true;
   return false;
}
console.log(isPalindromw("A man, a plan, a canal: Panama"))

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

var singleNumber = function(nums12) {
    nums.sort()

    for(let i=0;i<nums.length;i++){
    
        if(nums[i]==nums[i+1]){
            i++
        }else{
            return nums[i]
        }
    }

};

// console.log(singleNumber(nums123))

var maxProfit = function(prices) {
    let buy = -Infinity;
    let sell = -Infinity;
    let diff = -Infinity;
    for (let i = 0; i < prices.length-1; i++){
        for (let j = i+1; j < prices.length; j++){
            if (prices[j] - prices[i] > diff){
                diff =  prices[j] - prices[i];
                buy = prices[i];
                sell = prices[j]
            }
        }
    }
    if(diff > 0) return diff;
    return 0;
};
console.log(maxProfit([7,1,5,3,6,4]))