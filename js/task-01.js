const allCategories = document.querySelectorAll(".item");
console.log(`В списке ${allCategories.length} категории`);

const categoriesArray = [...allCategories]
    .map((el) => `Категория: ${el.children[0].textContent}\nКоличество элементов: ${el.children[1].children.length}`)
    .join("\n")
console.log(categoriesArray);