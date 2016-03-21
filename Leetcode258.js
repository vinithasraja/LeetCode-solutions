// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  //get the digits of the number given 
  //convert the number to string
  var stringNum =num.toString();
  var digit = stringNum.split("");
  var sum =0;
  //split the string number
  //sum each num

  for (var i=0; i< digit.length; i++) {
    sum += Number(digit[i]);
  }
  //get the result and recurse the sum till the final sum is less than 10 
  if(sum >= 10){
    return addDigits(sum);
  } 
  else  
  {
   return sum; 
  }
};


console.log(addDigits(781));






