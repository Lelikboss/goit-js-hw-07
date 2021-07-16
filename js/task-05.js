const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputNameChange);

function onInputNameChange(even) {
  // данные пользователя отображаются на месте 'незнакомец'
  if (even.currentTarget.value === even.currentTarget.value) {
    refs.nameOutput.textContent = even.currentTarget.value;
    console.log(even.currentTarget.value);
  } // если пользователь передумал вводить данные и стер - возвращается 'незнакомец'
  if (even.currentTarget.value === "") {
    refs.nameOutput.textContent = "незнакомец";
  }
}
