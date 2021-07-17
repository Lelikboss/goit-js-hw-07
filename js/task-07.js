"use strict";

const refs = {
  controlRange: document.querySelector("#font-size-control"),
  textChange: document.querySelector("#text"),
};

refs.controlRange.addEventListener("input", textSizeChange);
refs.controlRange.value = 16;

function textSizeChange() {
  refs.textChange.style.fontSize = refs.controlRange.value + "px";
}
