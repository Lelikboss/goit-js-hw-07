"use strict";

const categoriesListEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesListEl.length} категории`);
const showCategories = (element) =>
  element.forEach((el) =>
    console.log(
      `Категория: ${el.firstElementChild.textContent}.\nКоличество элементов: ${el.lastElementChild.children.length}.`
    )
  );
showCategories(categoriesListEl);
