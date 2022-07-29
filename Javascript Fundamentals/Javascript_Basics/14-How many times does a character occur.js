// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  return b
    .toLowerCase()
    .split("")
    .filter((el) => el === a).length;
}
