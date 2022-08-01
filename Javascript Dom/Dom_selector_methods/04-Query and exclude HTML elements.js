// assign the correct elements to the variable
const targets = document.querySelectorAll("#list > li");
const listItems = Array.from(targets).filter((cur) => cur.id !== "disabled");

const button = document.getElementById("button");

const handleClick = () => {
  listItems.forEach((item) => {
    const oldText = item.innerText;
    return (item.innerText = oldText === "ON" ? "OFF" : "ON");
  });
};
if (listItems.length > 1) {
  button.addEventListener("click", handleClick);
}
