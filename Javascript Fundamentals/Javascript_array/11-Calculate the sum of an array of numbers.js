// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(arr) {
  let sum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    sum = sum + arr[i];
  }
  return sum / len;
}
