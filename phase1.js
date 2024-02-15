// remove element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// filter method
var removeElement = function(nums, val) {
   return nums.filter(ele=> ele !== val)
  };

  nums = [0,1,2,2,3,0,4,2], val = 2
//   console.log(removeElement(nums, val))

// slice method
const spliceElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++){
        if (nums[i]=== val){
            nums.splice(i,1)
        }
    }
    return nums;
}  
// console.log(spliceElement(nums, val))

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
// console.log(romanToInt1('MCMXCIV'))

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

// console.log(removeDuplicates([1,2,3,4,5,5,6,6,6,7,8,9]))

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
}
// console.log(removeElement([3,2,2,3], 3))

// find the index of the first occurance of a string 
var strStr = function(haystack, needle) {
    if (haystack.includes(needle)){
        return haystack.indexOf(needle[0])
    }
};

const haystack = 'mississippi'
const needle = 'issip'
// console.log(strStr(haystack, needle))

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
// console.log(lengthOfLastWord(word))

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
// console.log(plusOne(digit))

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

// console.log(mySqrt(9))

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
// console.log(merge(nums1, m, nums2, n))

// palindrome
function isPalindromw(s){
    if (s < 1) return false;
    if (s.length === 1) return true;
    s = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
   let yes = s.split('').reverse().join('');
   if (yes == s) return true;
   return false;
}
// console.log(isPalindromw("A man, a plan, a canal: Panama"))

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
    let maxProfit = 0;
     let minPrice  = prices[0];
     for (let i = 1; i < prices.length; i++){
         const currentPrice = prices[i];
         const currentProfit = currentPrice-minPrice;
         if(currentProfit > maxProfit){
             maxProfit = currentProfit;
       
     }
     if(currentPrice < minPrice){
         minPrice = currentPrice;
     }
     }
     return maxProfit;
};
// console.log(maxProfit([7,1,5,3,6,4]))

// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.
var containsDuplicate = function(nums) {
    let newSet = new Set(nums)
    return newSet.size !== nums.length;
};
let nums = [1,1,1,3,3,4,3,2,4,2]
// console.log(containsDuplicate(nums))

// Given an array nums of size n, return the majority element.
var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
       if (obj[nums[i]] === undefined){
        obj[nums[i]] = 1;
       } else {
        obj[nums[i]] += 1;
       }
    }
   let max = -Infinity;
   let num;
   for( let key in obj){
    if(obj[key] > max){
        max = obj[key];
        num = key;
    }
   }
   return num;
   }

let nums1 = [1,1,1,3,3,4,3,2,4,2]
// console.log(majorityElement(nums1))

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
var canPlaceFlowers = function(flowerbed, n) {
    let zeros = flowerbed.filter(ele => ele === 0);
    if (zeros.length === 2n + 1) return true;
    return false
};

var repeatedSubstringPattern = function(t) {
   let set = new Set(t.split(''))
   return set
};
let t = "abcabcabcabc"
console.log(repeatedSubstringPattern(t))

// move zeroes
var moveZeroes = function(nums) {
   let count = 0;
     for (let i = 0; i < nums.length; i++){
         if(nums[i] === 0){
             count++;
         } else {
            [nums[i-count], nums[i]] = [nums[i], nums[i-count]]
         }
    }
};

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// For example:

// A -> 1
// B -> 2
// C -> 3

// Z -> 26
// AA -> 27
// AB -> 28 

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
var missingNumber = function(nums){
    nums.sort()
    for( let i = 0; i < nums.length; i++){
        if(i !== nums[i]){
            return i;
        }
    }
}

// console.log(missingNumber([9,6,4,2,3,5,7,0,1]))


// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let next = null;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = prev;
    }
    return prev
}
let head = [1,2,3,4,5]
// console.log(reverseList(head))

// reverse an Array;
function reverseArrary(arr){
    for(let i = 0; j = arr.length-1; i++, j--){
      
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
       }
    
    return arr;
}

console.log(reverseArrary([5,4,3,2,1]))

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the 
// array such that nums[i] == nums[j] and abs(i - j) <= k.
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(i !== j && nums[i] === nums[j] && Math.abs(i-j) <= k){
                return true;
            }
        }
    }
    return false;
};

let numsa = [1,2,3,1] //k = 3
// Output: true

let numsb = [1,0,1,1] //k = 1
// Output: true

let numsc = [1,2,3,1,2,3] //k = 2
// Output: false

// reverse a string
var reverseString = function(s) {
    return s.reverse()
};

// Given an array of strings words and a string s, determine if s is an acronym of words.
// The string s is considered an acronym of words if it can be formed by concatenating the first character 
// of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].
// Return true if s is an acronym of words, and false otherwise.
var isAcronym = function(words, s) {
    let newArr = [];
    for (let i = 0; i < words.length; i++){
        newArr.push(words[i][0])
    }
    console.log(s.split(''), newArr)
    if(newArr.join('') === s) return true;
    return false;
};


// Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x.
var isPowerOfTwo = function(n) {
    let power = 1;
    while (power < n){
        power = power * 2;
    }
    if(power === n) return true;
    return false
};

// longest prefix in words in a array
var longestCommonPrefix1 = function(strs) {
    if(!strs.length) return '';
    let longestPrefix = '';
    for (let i = 0; i < strs[0].length; i++){
        let char = strs[0][i];
        if(!char) return "";
        if(strs.every(str=> str[i]=== char)){
            longestPrefix += char
        } else break;
    }
    return longestPrefix
};

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the 
// integers in the range [1, n] that do not appear in nums.

var findDisappearedNumbers = function(nums) {
    let newArr = []
    for (let i = 1; i < nums.length+1; i++ ){
        if(!nums.includes(i)){
            newArr.push(i)
        }
    }
    return newArr
};

// convert string to lowercase
var toLowerCase = function(s) {
    return s.toLowerCase()
};


// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters. Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

var nextGreatestLetter = function(letters, target) {
    letters.sort();
    for(let i = 0; i < letters.length; i++){
        if(letters[i] > target){
            return letters[i]
        }
    
    }
    return letters[0]
};

// Happy number
var isHappy = function (n) {
    let numStr = n.toString();
    let numArr = numStr.split("");
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum = sum + Math.pow(numArr[i], 2);
      if (i === numArr.length - 1) {
        numStr = sum.toString();
        numArr = numStr.split("");
        if (sum === 1 || sum===32) {
          return true;
        }
        if ((sum & (sum - 1)) === 0) {
          return false;
        }
        sum = 0;
        i = -1;
      }
    }
  };
// find majority element in the array
 const majorityElement = function(nums) {
    const majNum = Math.ceil(nums.length / 2)
   return nums.find(num => nums.filter(item => item === num).length >= majNum)
  };

  let arr11 = [3,2,3];
  let arr12 = [2,2,1,1,1,2,2];
  console.log(majorityElement(arr11))

//   find first palendromic string
const words = ["abc","car","ada","racecar","cool"]

const firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++){
        console.log(words[i], words[i].split('').reverse().join(''))
        if(words[i] == words[i].split('').reverse().join('')){
            return words[i]
        }
    }
    return false
};

console.log(firstPalindrome(words))

// fizz if divisible by 3, buzz if divisible by 5 and fizzbuzz if divisible by 3 and f
var fizzBuzz = function(n) {
    let newArr = []
    for (let i = 1; i < n+1; i++){
       
        if (i % 3 == 0 && i% 5 !== 0) newArr.push("Fizz")
        if (i % 3 !==0 && i% 5 ==0) newArr.push("Buzz")
        if (i % 3 == 0 && i% 5 == 0) newArr.push("FizzBuzz")
        if(i%3 !==0 && i%5!==0) newArr.push(i.toString())
    }
return newArr;
};
console.log(fizzBuzz(5))

// find largest possible polygon periter with the given numbers
const polynums = [1,12,1,2,5,50,3]

var largestPerimeter = function(nums) {
    nums.sort((a,b) => a-b)
    let Csum = 0; Psum = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] < Csum){
            Psum = Csum + nums[i];
        }
            Csum += nums[i]
    }
    return (Psum == 0)? -1:Psum
};
console.log(largestPerimeter(polynums))



