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

// 4. You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length === 1 && flowerbed[0] === 0 && n === 1){
        return true
    }
     if(n === 0) return true
     for (let i = 0; i < flowerbed.length; i++){
        if (i === 0 && flowerbed[i] === 0 && flowerbed[i+1]===0) {
             flowerbed[i] = 1;
            n = n-1;
            if(n === 0) return true;
            continue;
        }
        if (i === flowerbed.length-1 && flowerbed[i] === 0 && flowerbed[i-1]===0) {
             flowerbed[i] = 1;
            n = n-1;
            if(n === 0) return true;
            continue;
        }
        if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1]===0) {
           
            flowerbed[i] = 1;
            n = n-1;
            if(n === 0) return true;
            continue;
        } 
    }
return false
};

// console.log(canPlaceFlowers([1,0,0,0,1], 2))

// 5. Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space. Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
var reverseWords = function(s) {
    let sArray = s.split(' ')
    let newArr = [];
    for (let i=0; i< sArray.length; i++){
     if(sArray[i].length > 0){
         newArr.push(sArray[i])
     }
    }
     return newArr.reverse().join( ' ')
   
 };

// 6. reverse vowels in the 
 var reverseVowels = function(s) {
    let vowels = 'aeiou'
    let sArray = s.split('')
   let string = "";
   let reversedVowels = s.split('').reverse().filter(a=> vowels.includes(a))
  for (let i=0; i < sArray.length; i++){
    if (vowels.includes(sArray[i])){
        string += reversedVowels.shift();
    } else {
        string+=sArray[i]
    }
  }
  return string
};
// console.log(reverseVowels('laetcodu'))

// 7 Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]


var productExceptSelf = function(nums) {
    const n = nums.length;
    const output =[];

    const leftProducts =[];
    const rightProducts =[];
    leftProducts[0] = 1;
    rightProducts[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }
    
    return output;

};
// console.log(productExceptSelf([1,2,3,0]))

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
var increasingTriplet = function(nums) {
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = i+1; j < nums.length; j++){
    //         for (let k = j + 1; k < nums.length; k++){
    //             if (nums[i] < nums[j] && nums[j]< nums[k]){
                  
    //                 return true
    //             }
    //         }
           
    //     }
    // }
    // return false
    let a = Infinity;b = Infinity, c = Infinity;
     for(let i=0;i<nums.length;i++){
      if(a>= nums[i]) a=nums[i];
      else if(b>= nums[i]) b =nums[i];
      else if(c>= nums[i]) return true;
    }
    return false
};

// console.log(increasingTriplet([5,4,3,2,1]))

// Given an array of characters chars, compress it using the following algorithm: Begin with an empty string s. For each group of consecutive repeating characters in chars: If the group's length is 1, append the character to s. Otherwise, append the character followed by the group's length. The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars. After you are done modifying the input array, return the new length of the array. You must write an algorithm that uses only constant extra space.

var compress1 = function(chars) {
    let string = []
let count = 1;
for(let i = 0; i < chars.length; i++){
   if(chars[i] == chars[i+1]){
       count = count + 1;
      continue
   } else {
       string.push(chars[i]);
       string.push(count);
       count=1
       continue
   }
}
return string;
};

const  chars = ["a","a","a","a","b","b","c","c","c"]
// console.log(compress(chars))

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.nNote that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length-1; i++){
        if(nums[i] == 0){
         temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
            continue
        } 
    }
    return nums
};
// console.log(moveZeroes([0,1,0,3,12]))

// compress strings
// Given an array of characters chars, compress it using the following algorithm: Begin with an empty string s. For each group of consecutive repeating characters in chars:

var compress = function(chars) {
    let count = 0;
    let char = "";
    const newArr = [];
    for(let i = 0; i < chars.length; i++){
        if(chars[i] !== chars[i-1]){
            count >=1 && newArr.push(char);
            count >=1 && newArr.push(count.toString())
            char = chars[i];
            count = 1;
        }
        if (chars[i] == chars[i-1]){
            count = count+1
        }
    }
return newArr;
};

// console.log(compress(chars))

var compress2 = function(chars) {
    let res = "";
    let c = ' ';
    let count = 0;
    for (let i = 0; i < chars.length; i++) {
        if (c === ' ') {
            c = chars[i];
            count++;
            res += c;
        } else {
            if (chars[i] === c) {
                count++;
            } else {
                if (count !== 1) {
                    res += count;
                }
                c = ' ';
                count = 0;
                continue;
            }
        }
    }
    if (count !== 1) {
        res += count;
    }
    
    for (let i = 0; i < res.length; i++) {
        chars[i] = res[i];
    }

    return res.length;
};
// console.log(compress2(chars))


// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
var isSubsequence = function(s, t) {
    
};


Input: s = "abc", t = "ahbgdc"
Output: true