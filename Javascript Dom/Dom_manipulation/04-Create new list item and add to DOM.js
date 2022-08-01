const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  const list = document.getElementById("list");
  const input = document.getElementById("input");
  const item = document.createElement("li");
  item.innerHTML = input.value;
  list.appendChild(item);
});
