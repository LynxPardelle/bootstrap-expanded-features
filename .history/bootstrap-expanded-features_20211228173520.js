"use strict";

async function cssCreate() {
  let bfeElements = document.getElementsByClassName('bfe');

  let bfes = [];

  for(let bfeElement of bfeElements) {
    bfeElement.classList.forEach((item)=>{
      if(!bfes.includes(item) && item !== 'bfe'){
        bfes.push(item);
      }
    });
  }
  
  for (let bfe of bfes){
    console.log(bfe);
  }
}

window.onload = cssCreate();
// window.addEventListener("resize", cssCreate);
