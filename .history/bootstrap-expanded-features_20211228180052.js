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

/* 
valueTypes:
per %
vw
vh
rem
px

atributes:
w width
h height
wmax max-width
hmax max-height
wmin min-width
hmin min-height
rounded border-radius
z z-index
top top
bottom bottom
end left
start right
p padding
m margin
fs font-size

sides:
s left
e right
t top
b bottom
x left & right
y top & bottom

breakPoints:
sm 576
md 768
lg 992
xl 1200
xxl 1400

*/
