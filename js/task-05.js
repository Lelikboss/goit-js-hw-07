const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
refs.nameInput.addEventListener("input", onInputNameChange);
function onInputNameChange(even) {
  refs.nameOutput.textContent = even.currentTarget.value;
}
