// ফ্যাক্টোরিয়াল (Factorial) মানে হলো কোনো পজিটিভ পূর্ণসংখ্যার যত সংখ্যাগুলো আছে, সবগুলোকে গুণ করা।

const factorial = (n) => {
  if (n <= 0 || typeof n !== "number") {
    return "should be enter positive number";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = i * result;
  }
  return result
};
 

console.log(factorial("10"))