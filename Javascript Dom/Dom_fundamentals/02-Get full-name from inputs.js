const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const target = document.getElementById("fullName");
  target.value = firstName.value + lastName.value;
});
