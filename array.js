const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
const arrayLength = (array) => {
  return array.length;
};
//  console.log(arrayLength(fruits))
const numbers = [5, 10,10, 15, 44, 20, 25];

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
const sortLargeToSmall = (numberArray) => {
  return numberArray.sort((a, b) => b - a);
};
// console.log(sortLargeToSmall(numbers))

const sortSmallToLarge = (numberArray) => {
  return numberArray.sort((a, b) => a - b);
};
// console.log(sortSmallToLarge(numbers))

function reverseArray(arr) {
  return arr.reverse();
}
// console.log(reverseArray(numbers));

// const removeDuplicate = (number) => {
//   let newArray = [];
//   for (let index = 0; index < number.length; index++) {
//     const element = number[index];
//     if (!newArray.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray
// };
const removeDuplicate = (number) => {
    return [...new Set(number)];
  };
  

// console.log(removeDuplicate(numbers))

