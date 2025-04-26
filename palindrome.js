const palindrome = (string) => {
  const stringCase = string.toLowerCase();
  const makeRevers = stringCase.split("").reverse().join("");
  return string === makeRevers;
};
console.log(palindrome("radar"));
