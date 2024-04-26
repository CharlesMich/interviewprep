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
