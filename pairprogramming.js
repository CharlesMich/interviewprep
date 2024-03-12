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