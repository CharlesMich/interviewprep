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
  if (s.length > t.length) return false;

  
  let subsequence = 0;
  for (let i = 0; i < t.length; i++){
    if(t[i] == s[subsequence]){
        subsequence++
    }
  }
  return subsequence === s.length;
};

Input: s = "abc", t = "ahbgdc"
Output: true
isSubsequence(s,t)

// move zeroes
let moveZeroes = function(nums){
    let zero = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            [nums[i], nums[zero]] =  [nums[zero], nums[i]]
            zero++
        } 
    }
    return nums;
}
let nums = [1,2,0,4,3,0,5]
console.log(moveZeroes(nums))

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).n Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container.

var maxArea = function(height) {
    let left = 0;
    let right = height.length-1
    let maxArea = 0;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right-left)
        maxArea = Math.max(maxArea, area)
        if (height[left]< height[right]){
            left++
        } else {
            right--
        }

    }
    return maxArea
}

// You are given an integer array nums and an integer k. In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.Return the maximum number of operations you can perform on the array.
var maxOperations = function(nums, k) {
    // let count = 0
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = 0; j < nums.length; j++){
    //         if(nums[i] + nums[j] === k){
    //             nums.splice(i, 1);
    //             nums.splice(j-1,1);
    //             console.log(nums, i, j)
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    let set = {};
    let res = 0;
    for (let i of nums){
        let x = k -i;
        if(set[x]>= 1){
            res++
            set[x]--
        }
        else {
            (set[i]) ? set[i]++ : set[i]=1
        }
    }
    return res
};

const nums1 = [1,2,3,4]
const k = 5
console.log(maxOperations(nums1, k))

// You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
const findMaxAverage = function(nums, k){
    let avg = -Infinity
    let sum = 0;
    let left = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(i - left + 1 === k){
            avg = Math.max(avg, sum / k)
            sum -= nums[left];
            left++
        }
    }
    return avg
}

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k. Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

let maxVowels = function(s,k){
    const VOWELS = ['a', 'e', 'i', 'o', 'u']
    let max = 0;
    let counter = 0;
    for (let i = 0; i < s.length-k+1; i++){
    if ( i === 0 ){
    for (let j=0; j < k; j++){
    if(VOWELS.includes(s[j])) {
    counter++;
    }
    }
    } else {
    if (VOWELS.includes(s[i - 1])) {
    counter--;
    }
    if(VOWELS.includes(s[i+k-1])){
    counter++
    }
    }
    if(counter > max) {
    max = counter
    }
    if(max === k){
    return max
    }
    }
    return max
}

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

var longestOnes = function(nums, k) {
    let max = 0;
    let usedFlips = 0;
    let slow = 0;

    for (let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            if (usedFlips < k){
                usedFlips++;
            } else {
                if(nums[slow] === 0){
                    slow++;
                } else {
                    while(nums[slow]!== 0 && slow <=1){
                        slow++;
                    }
                    slow++;
                }
            }
        }
        if(slow === 1 && (nums[i] === 0 && usedFlips < k || nums[i] === 1))
        {
            max = Math.max(max, 1);
        } else {
            max = Math.max(max, i - slow+1)
        }
    }
    return max
};

// Given a binary array nums, you should delete one element from it. Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
var longestSubarray = function(nums) {
    if(!nums.includes(1)) return 0;
    const zeroindexes = nums.reduce((acc, item, index)=> {
     if(!item) acc.push(index+1);
     return acc
    }, [0]);
    zeroindexes.push(nums.length+1)
 
    if(zeroindexes.length === 2) return nums.length - 1;
    const result = zeroindexes.reduce((acc, item, index) => {
     if (zeroindexes[index + 1] && ((zeroindexes[index + 1]-item) > acc)) acc = zeroindexes[index+1] - item -1
     if (zeroindexes[index+2] && ((zeroindexes[index+2] - item - 2) > acc)) acc = zeroindexes[index + 2] - item - 2
     return acc
 
    }, 0)
    return result
 };

//  There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0. You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 var largestAltitude = function(gain) {
    let sum = 0;
     let alt = [];
     let max;
     for(let i=0;i<=gain.length;i++){
       alt.push(sum);
       sum = sum + gain[i];
     }
     max = alt[0];
     for(let j=0;j<alt.length;j++){
         if(max < alt[j]){
             max=alt[j];
         }
     }
     return max;
     }