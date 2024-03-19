var majorityElement = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]+=1
        } else {
            obj[nums[i]] = 1
        }
    }


    let num = ""
    let count = -Infinity;
    for (let key in obj){
        if (obj[key] > count){
            num = key;
        }
    }
    return num;
};
let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))