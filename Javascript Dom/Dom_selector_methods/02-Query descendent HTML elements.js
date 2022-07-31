// assign the correct elements to the variables
const buttonElem = document.getElementById("wrapper").querySelector("button");
const inputElem = document.getElementById("wrapper").querySelector("input");

buttonElem.addEventListener("click", () => {
  const oldText = inputElem.value;
  return (inputElem.value = oldText === "ON" ? "OFF" : "ON");
});
