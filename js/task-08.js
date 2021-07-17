"use strict";

const refs = {
  controlMenu: document.querySelector("#controls"),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  placeForBoxes: document.querySelector("#boxes"),
};

let inputControl = refs.controlMenu.firstElementChild; // счетчик, куда пользователь вводит кол-во боксов, которое он хочет создать
let baseSize = 30;

refs.renderBtn.addEventListener("click", getAmount); // создаем ф-ю на создание определенного к-ва боксов
refs.destroyBtn.addEventListener("click", destroyBoxes); // удаляем созданые дивы

// вытаскивает выбраное кол-во из счетчика (значение) + создает дивы через ф-ю createBoxes(amount)
function getAmount() {
  const amount = Number(inputControl.value);
  console.log(amount);
  createBoxes(amount);
}

const fragment = document.createDocumentFragment(); // создаем фрагмент, в который помещаем кол-во боксов (div), которые перебрали через цикл for
// создает боксы, перебирает кол-во, добовляет размер
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div"); // создаем div
    baseSize += 10;
    newBox.classList.add("box");
    newBox.style.width = baseSize + "px";
    newBox.style.height = baseSize + "px";
    newBox.style.backgroundColor = randColor();
    fragment.appendChild(newBox); // в фрагмент помещаем ранее созданный div
  }
  refs.placeForBoxes.appendChild(fragment); // помещаем фрагмент c дивами
}

// удаляем созданые боксы
function destroyBoxes() {
  refs.placeForBoxes.innerHTML = " ";
}

// делаем рандомный цвет с помощщью формулы Math.floor(Math.random()...)
function randColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
