function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2);
  }
  
  // Example usage:
  const result = fahrenheitToCelsius(1);
  console.log(result); // Output: -17.22
  