"use strict";

const categoriesListEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesListEl.length} категории`);
const allCategories = (element) =>
  element.forEach((el) =>
    console.log(
      `Категория: ${el.firstElementChild.textContent}.\nКоличество элементов: ${el.lastElementChild.children.length}.`
    )
  );
allCategories(categoriesListEl);
