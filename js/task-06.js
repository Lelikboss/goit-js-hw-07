"use strict";

const refs = {
  input: document.querySelector("#validation-input"),
};

const dataEl = refs.input.dataset.length;

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(even) {
  // если совпадает валидация -- зеленый цвет
  if (Number(dataEl) === even.target.value.length) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  }
  // если больше, меньше и не равно нулю -- красный цвет
  if (
    Number(dataEl) > even.target.value.length ||
    (Number(dataEl) < even.target.value.length && Number(dataEl) !== 0)
  ) {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
  // если пользователь передумал вводить данные и стер с инпута символы, стили переходят в первоначальный вид
  if (even.target.value.length === 0) {
    refs.input.classList.remove("invalid");
    refs.input.classList.remove("valid");
  }
}
