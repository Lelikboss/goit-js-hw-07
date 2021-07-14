// const allCategories = document.querySelectorAll(".item");
// console.log(`В списке ${allCategories.length} категории`);
// const arrayCategories = [...allCategories].map(
//   (category) =>
//     `Категория: ${category.children[0].textContent}\nКоличество элементов: ${category.children[1].children.length}`
// );
// console.log(arrayCategories.join("\n"));

const categoriesListEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesListEl.length} категории`);
const showCategories = (element) =>
  element.forEach((el) =>
    console.log(
      `Категория: ${el.firstElementChild.textContent}.\nКоличество элементов: ${el.lastElementChild.children.length}.`
    )
  );
showCategories(categoriesListEl);
