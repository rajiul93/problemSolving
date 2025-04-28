function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  str
    .toLowerCase()
    .split("")
    .forEach((n) => {
      if (vowels.includes(n)) {
        count++;
      }
    });

  return count;
}

console.log(countVowels("Hello World")); 
