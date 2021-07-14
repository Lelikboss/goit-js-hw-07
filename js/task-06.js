const refs = {
  input: document.querySelector("#validation-input"),
};

const dataEl = refs.input.dataset.length;

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(even) {
  if (Number(dataEl) === even.target.value.length) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}
