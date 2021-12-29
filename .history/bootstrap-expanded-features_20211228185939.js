"use strict";

async function cssCreate() {
  let bfeElements = document.getElementsByClassName("bfe");

  let bfes = [];

  for (let bfeElement of bfeElements) {
    bfeElement.classList.forEach((item) => {
      if (!bfes.includes(item) && item !== "bfe" && item.includes("bfe")) {
        bfes.push(item);
      }
    });
  }

  for (let bfe of bfes) {
    console.log(bfe);
    let bfeSplited = bfe.split("-");
    let bfeStringed = bfe + "/";
    let hasBP = false;
    let value = "";
    if (
      bfeSplited[2] === "sm" ||
      bfeSplited[2] === "md" ||
      bfeSplited[2] === "lg" ||
      bfeSplited[2] === "xl" ||
      bfeSplited[2] === "xxl"
    ) {
      hasBP = true;
      value = bfeSplited[3];
    } else {
      value = bfeSplited[2];
    }
    if (value.includes("per")) {
    }
    await value.replace("per", "%");
    await value.replace("_", ".");
    if (value.includes("_")) {
    }

    console.log(value);
    switch (bfeSplited[1]) {
      case "w":
        bfeStringed += `width: ${value};`;
        break;
      case "h":
        bfeStringed += `height: ${value};`;
        break;
      case "wmin":
        bfeStringed += `min-width: ${value};`;
        break;
      case "hmin":
        bfeStringed += `min-height: ${value};`;
        break;
      case "wmax":
        bfeStringed += `max-width: ${value};`;
        break;
      case "hmax":
        bfeStringed += `max-height: ${value};`;
        break;
      case "rounded":
        bfeStringed += `border-radius: ${value};`;
        break;
      case "z":
        bfeStringed += `z-index: ${value};`;
        break;
      case "top":
        bfeStringed += `top: ${value};`;
        break;
      case "bot":
        bfeStringed += `bottom: ${value};`;
        break;
      case "end":
        bfeStringed += `left: ${value};`;
        break;
      case "start":
        bfeStringed += `right: ${value};`;
        break;
      case "bot":
        bfeStringed += `bottom: ${value};`;
        break;
      case "fs":
        bfeStringed += `font-size: ${value};`;
        break;
      case "p":
        bfeStringed += `padding: ${value};`;
        break;
      case "pt":
        bfeStringed += `padding-top: ${value};`;
        break;
      case "pb":
        bfeStringed += `padding-bottom: ${value};`;
        break;
      case "ps":
        bfeStringed += `padding-left: ${value};`;
        break;
      case "pe":
        bfeStringed += `padding-right: ${value};`;
        break;
      case "px":
        bfeStringed += `padding-left: ${value};padding-right: ${value};`;
        break;
      case "py":
        bfeStringed += `padding-top: ${value};padding-bottom: ${value};`;
        break;
      case "m":
        bfeStringed += `margin: ${value};`;
        break;
      case "mt":
        bfeStringed += `margin-top: ${value};`;
        break;
      case "mb":
        bfeStringed += `margin-bottom: ${value};`;
        break;
      case "ms":
        bfeStringed += `margin-left: ${value};`;
        break;
      case "me":
        bfeStringed += `margin-right: ${value};`;
        break;
      case "mx":
        bfeStringed += `margin-left: ${value};margin-right: ${value};`;
        break;
      case "my":
        bfeStringed += `margin-top: ${value};margin-bottom: ${value};`;
        break;
    }

    if (hasBP === true) {
      bfeStringed += "/" + bfeSplited[2];
    }

    console.log(bfeStringed);
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
