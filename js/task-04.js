// const counterValue = document.querySelector("#value");
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

const refs = {
  counterValue: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValueNumber = Number(document.querySelector("#value").textContent);

refs.incrementBtn.addEventListener("click", onClickIncrementBtn);
refs.decrementBtn.addEventListener("click", onClickDecrementBtn);

function onClickIncrementBtn() {
  counterValueNumber++;
  refs.counterValue.innerHTML = counterValueNumber;
}
function onClickDecrementBtn() {
  counterValueNumber--;
  refs.counterValue.innerHTML = counterValueNumber;
}
