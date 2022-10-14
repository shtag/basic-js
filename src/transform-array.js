const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(arr.length == 0)return []
  else if(Array.isArray(arr) == false){
    throw "'arr' parameter must be an instance of the Array!"
  }
  
  let transformedArr = []
  arr.forEach((element, id) => {
    console.log(element)
    if(typeof element == 'string'){
      console.log(element)
      if(element == '--discard-next'){
        transformedArr.push('')
        transformedArr[id+1] = '';
      } else if( element == '--discard-prev'){
        transformedArr.push('')
        transformedArr[id-1] = '';
      } else if(element == '--double-next'){
        transformedArr.push(arr[id+1])
      } else if(element == '--double-prev'){
        transformedArr[id] = arr[id-1]
      } else return element
    } else transformedArr.push(element)
  })
  console.log(arr, transformedArr)
  return transformedArr
}

module.exports = {
  transform
};
