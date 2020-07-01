/******************
 * YOUR CODE HERE *
******************/

//#1//
const doubleAll = function(nums) {
const results = []
for(let i = 0; i <nums.length; i++){
results.push(nums[i] * 2)

}
return results;
}
console.log(doubleAll([2, 3, 5]));

//#2//
const yelledGreetings = function(nums) {
const results = []
for(let i = 0; i <nums.length; i++){
results.push(nums[i] + '!')

}
return results;
}
console.log(yelledGreetings(['Hey', 'you']))

//#3//
const absoluteValues = function(nums) {
const results = []
for(let i = 0; i <nums.length; i++){
  if (nums[i] === 0){
    results.push(nums[i] * 0)
  } else if (nums[i] / 2 > 0) {
    results.push(nums[i])
  } else if (nums[i] % 2 < 0) {
    results.push(nums[i] * -1)
  }
  }

return results;
}
console.log(absoluteValues([8, 2]))

//#4//
const upperCaseFirstLetters = function(nums) {
const results = []
for(let i = 0; i <nums.length; i++){
  if(nums[i].charAt(0)){
    results.push(nums[i].charAt(0).toUpperCase())
  } else {
    results.push(nums[i].toLowerCase())
  
  }
  
  
}
return results;
}
console.log(upperCaseFirstLetters(['Hey', 'Francis']))


//#5//
const changeToInitials = function(nums) {
const results = []
for(let i = 0; i <nums.length; i++){
if (i === 0 || i - 1 === ' '){
      results.push(nums[i].slice(0, 1))

}
}
return results;
}
console.log(changeToInitials(['Francis Eclevia']))

//#6//
const doubleOdd = function(nums) {
const results = []
for(let i = 0; i <nums.length; i++){
const better = nums[i];
 if (better < 0 && better % 2 !== 0){
  results.push(better * 2)
 } else if (better < 0 && better % 2 === 0){
  results.push(better * 1)
} else if (better > 0 && better % 2 !== 0){
  results.push(better * 2)
} else {
  results.push(better * 1)
}
 
}


return results;
}
console.log(doubleOdd([-1, -4, 32.5, 4]))


// } if else (better > 0 && better % 2 !== 0) {
//   //   results.push(better * 2)



//#7//
const add1ToLeft = function(nums) {
  const results = []
  for(let i = 0; i <nums.length; i++){
  results.push('1' + nums[i])
  
  }
  return results;
  }
  console.log(add1ToLeft([1, 6]))







/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
