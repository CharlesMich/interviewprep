// remove element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// filter method
var removeElement = function(nums, val) {
   return nums.filter(ele=> ele !== val)
  };

//   nums = [0,1,2,2,3,0,4,2], val = 2
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
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let word of strs) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return ''
        }
    }
    return prefix;
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


// Longest palindrome substring
var longestPalindrome = function(s) {
    let results = "";
    
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        let left = i;
        let right = i;
        
        while(left > 0 && str[left - 1] === char) left--;
        
        while(right < str.length && str[right + 1] === char) {
            right++;
            i++;
        }
		
        while(left >=0 && right < str.length - 1 && str[left - 1] === str[right + 1]) {
            left--;
            right++;
        }
        
        if(results.length < (right - left + 1)) results = str.slice(left, right + 1);
    }
    return results;
};


// zigzag coversion
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
      }
    
      const rows = Array(numRows).fill('');
      console.log("--",rows)
      let currentRow = 0;
      let direction = -1;
      for (let char of s) {
        rows[currentRow] += char;
        
        
        if (currentRow === 0 || currentRow === numRows - 1) {
          direction = -direction; 
        }
    
        currentRow += direction;
      }
    
      return rows.join('');
};

// string to integer
var myAtoi = function(s) {
    let res = parseInt(s)
    if (isNaN(res)) return 0;
    if(res > Math.pow(2, 31)-1) {
        return Math.pow(2, 31)-1;
    } else if(res < -1*Math.pow(2, 31)) {
        return -1*Math.pow(2, 31);
    } else {
        return res;
    }
};

// container with most water
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
var maxArea = function(height) {
    let [left, right, maxArea] = [0, height.length - 1, 0];

    while(left < right) {
        let containerHeight, currentArea;
        let containerWidth = right - left;

        if(height[left] < height[right]) {
            containerHeight = height[left];
            left++
        } else {
            containerHeight = height[right];
            right--
        }

        currentArea = containerWidth * containerHeight;

        if(currentArea > maxArea) {
            maxArea = currentArea
        }
    }

    return maxArea
};

// integer to roman
// Input: num = 3
// Output: "III"
var intToRoman = function(num) {
    const arr = [1000, 500, 100,50,10,5,1];
    const symbols = ['M', 'D','C','L','X','V','I'];
    let res = '';
    for(let i=0; i<arr.length; i++){
        res+=symbols[i].repeat(Math.floor(num/arr[i]));
        num = num%arr[i];
        if(i==0 && num>=900){
            res+='CM';
            num -=900;
        }else if(i==1 && num>=400){
            res+='CD';
            num-=400;
        }else if(i==2 && num>=90){
            res+='XC';
            num-=90;
        }else if(i==3 && num>=40){
            res+='XL';
            num-=40
        }else if(i==4 && num>=9){
            res+='IX';
            num-=9
        }else if(i==5 && num>=4){
            res+='IV';
            num-=4
        }
    }
    return res;
};

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
// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
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
// console.log(repeatedSubstringPattern(t))

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

// console.log(reverseArrary([5,4,3,2,1]))

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
    // console.log(s.split(''), newArr)
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
//  const majorityElement = function(nums) {
//     const majNum = Math.ceil(nums.length / 2)
//    return nums.find(num => nums.filter(item => item === num).length >= majNum)
//   };

  let arr11 = [3,2,3];
  let arr12 = [2,2,1,1,1,2,2];
//   console.log(majorityElement(arr11))

//   find first palendromic string
const words = ["abc","car","ada","racecar","cool"]

const firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++){
        // console.log(words[i], words[i].split('').reverse().join(''))
        if(words[i] == words[i].split('').reverse().join('')){
            return words[i]
        }
    }
    return false
};

// console.log(firstPalindrome(words))

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
// console.log(fizzBuzz(5))

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
// console.log(largestPerimeter(polynums))

// group anagrams
strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function(strs) {
   let obj = {}, arr =[]
   for (let i = 0;i < strs.length; i++){
    let index = strs[i].split('').sort().join('')
    if(obj[index]){
        obj[index].push(strs[i])
    }else {
        obj[index] = [strs[i]]
    }
}
for (let item in obj){
    arr.push(obj[item])
}
   return arr;
}

// console.log(groupAnagrams(strs))

// .....................................

const height = [1,8,6,2,5,4,8,3,7]

var maxArea = function(height) {
    let sum = 0;
    const obj = {};
    // const arr = [];
    for(let i = 0; i < height.length; i++){
        for (let j = i+1; j < height.length; j++){
            if(!obj[i]){
                obj[i] = [height[j]]
            } else {
                obj[i].push(height[j])
            }
        }
    }
    
    for (let item in obj){
        newSum =  obj[item].reduce((a,b)=> a+b) 
        if (newSum > sum){
            sum = newSum;
        }
    }
    return sum;
};

// console.log(maxArea(height))

var maxArea1 = function (height) {
    let i = 0;
    let j = height.length - 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i);
        max = Math.max(max, area);
        if (height[i] > height[j]) {
            j--;
        } else { i++ }
    }
    return max;
};
// console.log(maxArea1(height))

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

var myPow = function(x, n) {
    let product = 1;
   let arr = [];
   if(n > 0 ){
       for (let i = 1; i<= n; i++ ){
       product = product * x
       }
   } else {
    for (let i = 1; i<= -n; i++ ){
        product = product * 1/x
        }
   }
   return product;
};

// reverse an integer
// -2^31 <= x <= 2^31 - 1
var reverse = function(x) {
   let bit = Math.pow(2, 31) - 1;
   let rev = x.toString().split('').reverse().join('');
  
   let result = parseInt(rev);
  
    if (result > bit || result < -(bit )){
        return 0;
    }
    if(x<0){
        return -result
    }else{
        return result
    }
};

// triplet sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.
let nums3 = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {
    const newArr = [];
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                if(i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0){
                    if(!newArr.includes([nums[i], nums[j], nums[k]].sort())){
                        newArr.push([nums[i], nums[j], nums[k]].sort())
                    }
                }

                    
            }
        }
    }
    return newArr;
};
// console.log(threeSum(nums3))

// longest substring without repeating
let string = "abcabcdb"
// answer: Output: 3
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let stringArr = s.split("");

    for (let i = 0; i < stringArr.length; i++ ){
        if (!arr.includes(stringArr[i])){
            arr.push(stringArr[i])
        } else {
            return arr.length;
        }
    }
    return arr.length;
};

// console.log(lengthOfLongestSubstring(string))

var letterCombinations = function(digits) {
let digitsMapping = {
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
};
const newArr = [];
for( let i = 0; i < digitsMapping[digits[0]]; i++){

}

}

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the  frequency of at least one of the chosen numbers is different.The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

var combinationSum = function(candidates, target) {

    let result = []

    for(let i = 0; i < candidates.length; i++){
        let res = [];
        const dfs = (curCand, curTarget, value)=> {
            if(curTarget == 0) res.push(value);
            if(curTarget <= 0) return;
            for (let g = 0; g < curCand.length; g++){
                dfs(curCand.slice(g), curTarget-curCand[g], [...value, curCand[g]]);
            }
        }
        dfs(candidates, target, []);
        return res;
    }
    
};

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

// console.log(combinationSum([2,3,6,7],  7))


// mar 5
// longest substring without repeating characters
var lengthOfLongestSubstring = function(s) {
    const lastSeen = {};
 let longest = [0,1];
 let startIdx = 0;

 for(let i=0;i<s.length;i++){
   const char = s[i];
   if( char in lastSeen)  startIdx = Math.max(startIdx, lastSeen[char] + 1);
   if(longest[1]-longest[0] < i+ 1 - startIdx) longest = [startIdx,i+1];
    lastSeen[char] = i;
 }
  return s.slice(longest[0],longest[1]).length;
};

// divide an integer without using * or / operator
var divide = function(dividend, divisor, sum=0) {
    if(dividend < Math.abs(divisor)) return sum;
     if ( dividend > Math.abs(divisor)) sum = sum + 1;
     return divide(dividend-Math.abs(divisor), divisor, sum)
 };

//  three sum
var threeSum = function(nums) {
    const res=[]
   nums.sort((a,b)=>a-b)
   for(let i=0;i<nums.length;i++){
       if(i>0 && nums[i] == nums[i-1]){
           continue;
       }
       let left=i+1;
       let right = nums.length-1;

       while(left<right){
           let threesum = nums[i]+nums[left]+nums[right]
           if(threesum>0){
               right--;
           }else if(threesum<0){
               left++;
           }else{
               res.push([nums[i],nums[left],nums[right]])
               left++;

               while(nums[left] == nums[left-1] && left<right){
                   left++;
               }
           }
       }
   }
   return res
};

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function(nums) {
    let newArr = [];
    function permute2(idx){
        if(idx == nums.length){
            newArr.push([...nums])
            return;
        }
        for (let i = idx; i < nums.length; i++){
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            permute2(idx + 1);
            [nums[idx], nums[i]] = [nums[i], nums[idx]]
        }
    }
    permute2(0);
    return newArr;
};
// console.log(permute([1,2,3]))

// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray[4, -1, 2, 1] has the largest sum 6.
var maxSubArray = function (nums) {
    let sum = 0; 
    let subArray = [];
    
};

var convertToTitle = function(columnNumber) {
    let letnum = {
        1:'A',
        2:'B',
        3:'C',
        4:'D',
        5:'E'
    }
    let num;
    if(columnNumber <= 26){
        num = letnum[columnNumber]
        return num;
    } else {
        // if(columnNumber % 26 )
    }
}
    // console.log(convertToTitle(5))

    // longest substring without repeating characters
    var lengthOfLongestSubstring = function(s) {
        let arrA = ""
        let arr = s.split("")
        let newArr = []
       
        for (let i = 0; i < arr.length; i++){
            for(let j = i+1; j < arr.length; j++){
                newArr.push(arr[i])
                if(!newArr.includes(arr[j])){
                    
                    newArr.push(arr[j])
                    // console.log(newArr)
                }
    
            }
            if(arrA.length < newArr.length){
                for(let item of newArr){
                arrA = ""    
                arrA += item;
                }
            }
            newArr=[]
        }
        // console.log(arrA)
    return arrA.length
    };
    // console.log(lengthOfLongestSubstring('ababcde'))

    var lengthOfLongestSubstring1 = function(s) {
        const lastSeen = {};
        let longest = [0,1];
        let startIdx = 0;
       
        for(let i=0;i<s.length;i++){
          const char = s[i];
          if( char in lastSeen)  startIdx = Math.max(startIdx, lastSeen[char] + 1);
          if(longest[1]-longest[0] < i+ 1 - startIdx) longest = [startIdx,i+1];
           lastSeen[char] = i;
        }
         return s.slice(longest[0],longest[1]).length;
       
       };

    //    longest palindrome in a string
    var longestPalindrome = function(s) {
        let pal;
        if(s.length <= 1) return pal;
        if (s.length > 1){
            if(s == s.split('').reverse().join('')){
                    pal = s;
                    return pal
                
            } else {
                return longestPalindrome(s.split('').slice(0,-1).join(''))
            }
        }
    }
    console.log(longestPalindrome('ababab'))

    var longestPalindrome1 = function(s) {
        if (s.length < 2) {
               return s;
           }
       
       let maxlen = 0;
       let lo = 0;
       let result = s
       
       const expandPalindrome = (j,k) => {
           while (j >= 0 && k < s.length && s[j] === s[k]){
               j--;
               k++;
           }
           if(maxlen < k - j - 1){
               maxlen = k - j - 1;
               lo = j + 1;
           }
       }
        for (let i = 0; i < s.length; i++) {
               expandPalindrome(i, i);
               expandPalindrome(i, i + 1);
           }
       
           return result.substring(lo, lo + maxlen);
       }
       
       
       
       
       
       

    // Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
//     Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

var threeSumClosest = function(nums, target) {
    let num;
    let matrix = [];
    for (let i = 0; i < nums.length-2; i++){
        // console.log(nums[i])
        for (let j = i + 1; j < nums.length-1; j++ ){
            
            for (let k = j + 1; k < nums.length; k++){
                matrix.push([nums[i], nums[j], nums[k]])
            }
        }
    }
    for ( let submatrix of matrix){
        let sum = 0;
        for(let i =0; i < submatrix.length; i++){
            sum += submatrix[i]
        }
        if (sum < num){
            num = sum;
        }
    }
};
// console.log(threeSumClosest([-1,2,1,-4], 1))

function arrLength(num1){
    let i = 0;
    while ( i < num1.length+1){
        // console.log(num1[i])
        i++
    }
}
// console.log(arrLength([1,2,3,4]))

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
var multiply = function(num1, num2) {
    let res = BigInt(num1) * BigInt(num2)
    return res.toString()
};


// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
var maxSubArray = function(nums) {
    let currentSum =0
   let maxSum = -Infinity
   if (nums.length === 1) {
       return nums[0];
   }

   for (let i = 0; i < nums.length; i++) {

       currentSum += nums[i]
     
       if (maxSum < currentSum) {
           maxSum = currentSum
       }

        if(currentSum < 0){
            currentSum =0
        }

   }
   return maxSum
};

