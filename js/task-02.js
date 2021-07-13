const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listArr = document.querySelector("#ingredients");
const elements = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  return itemEl;
});
console.log(elements);
listArr.append(...elements);
