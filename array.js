const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
const arrayLength = (array) => {
  return array.length;
};
//  console.log(arrayLength(fruits))
const numbers = [5, 10, 15, 20, 25];

const findMax = (num) => {
  return Math.max(...num);
};
// console.log(findMax(numbers))

const findMin = (num) => {
  return Math.min(...num);
};
// console.log(findMin(numbers))

const checkNumberExists = (numberArray, value) => {
  return numberArray.includes(value);
};
// console.log(checkNumberExists(numbers, 5));
const sortLargeToSmall =(numberArray)=>{
return numberArray.sort((a,b)=>b-a)
}
console.log(sortLargeToSmall(numbers))
const sortSmallToLarge =(numberArray)=>{
    return numberArray.sort((a,b)=>a-b)
}
console.log(sortSmallToLarge(numbers))