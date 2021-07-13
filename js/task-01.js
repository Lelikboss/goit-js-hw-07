const allCategories = document.querySelectorAll(".item");
console.log(`В списке ${allCategories.length} категории`);
const arrayCategories = [...allCategories].map(
  (category) =>
    `Категория: ${category.children[0].textContent}\nКоличество элементов: ${category.children[1].children.length}`
);
console.log(arrayCategories.join("\n"));
