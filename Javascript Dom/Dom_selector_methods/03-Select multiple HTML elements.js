// assign the correct elements to the variable
const listItems = document.getElementById("list").querySelectorAll("li");

const handleHover = (event) => {
  return (event.target.innerText = "ON");
};
if (listItems.length > 1) {
  listItems.forEach((item) => item.addEventListener("mouseover", handleHover));
}
