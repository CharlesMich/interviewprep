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

console.log(lengthOfLongestSubstring(string))


