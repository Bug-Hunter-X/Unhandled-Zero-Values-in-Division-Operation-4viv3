function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return NaN; // Handle zero values explicitly
  }
  return a / b; 
}