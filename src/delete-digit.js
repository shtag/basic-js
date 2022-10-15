const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let max = 0;
  let arr = n.toString().split('')
  let arr2 = []
  arr.forEach((element, id) => {
    let num = [];
    for(let i = 0; i < arr.length; i++){
      if(i != id){
        num.push(arr[i]) 
      }
      console.log(num)
    }
    arr2.push(num.join(''))
  });
  arr2 = arr2.map(element => Number(element))
  arr2.sort((a,b) => a - b)
  console.log(arr, arr2, max)
  return arr2[arr2.length-1]
}

module.exports = {
  deleteDigit
};
