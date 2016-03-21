/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  //Create an object
  var checkNum = {};
  
  //check the nums element and assign element  
  for(var i =0; i< nums.length; i++) {
    checkNum[nums[i]] = !checkNum[nums[i]];
  }
  //Return the key if its value is true
  for (var keys in checkNum) {
    if(checkNum[keys]) {
    return keys;
    }
  }

};

//console.log(singleNumber([1,1,2,3,4,3,2]));