"use strict";

async function cssCreate() {
  let bfeElements = document.getElementsByClassName('bfe');

  for(let bfeElement of bfeElements) {
    console.log(bfeElement);
  }
}

window.onload = cssCreate();
// window.addEventListener("resize", cssCreate);
