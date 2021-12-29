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

    switch (bfeSplited[1]) {
      case "w":
        bfeStringed += "width: ;";
        break;
      case "h":
        bfeStringed += "height: ;";
        break;
      case "wmin":
        bfeStringed += "min-width: ;";
        break;
      case "hmin":
        bfeStringed += "min-height: ;";
        break;
      case "wmax":
        bfeStringed += "max-width: ;";
        break;
      case "hmax":
        bfeStringed += "max-height: ;";
        break;
      case "rounded":
        bfeStringed += "border-radius: ;";
        break;
      case "z":
        bfeStringed += "z-index: ;";
        break;
      case "top":
        bfeStringed += "top: ;";
        break;
      case "bot":
        bfeStringed += "bottom: ;";
        break;
      case "end":
        bfeStringed += "left: ;";
        break;
      case "start":
        bfeStringed += "right: ;";
        break;
      case "bot":
        bfeStringed += "bottom: ;";
        break;
      case "fs":
        bfeStringed += "font-size: ;";
        break;
      case "p":
        bfeStringed += "padding: ;";
        break;
      case "pt":
        bfeStringed += "padding-top: ;";
        break;
      case "pb":
        bfeStringed += "padding-bottom: ;";
        break;
      case "ps":
        bfeStringed += "padding-left: ;";
        break;
      case "pe":
        bfeStringed += "padding-right: ;";
        break;
      case "px":
        bfeStringed += "padding-left: ;padding-right: ;";
        break;
      case "py":
        bfeStringed += "padding-top: ;padding-bottom: ;";
        break;
      case "m":
        bfeStringed += "margin: ;";
        break;
      case "mt":
        bfeStringed += "margin-top: ;";
        break;
      case "mb":
        bfeStringed += "margin-bottom: ;";
        break;
      case "ms":
        bfeStringed += "margin-left: ;";
        break;
      case "me":
        bfeStringed += "margin-right: ;";
        break;
      case "mx":
        bfeStringed += "margin-left: ;margin-right: ;";
        break;
      case "my":
        bfeStringed += "margin-top: ;margin-bottom: ;";
        break;
    }

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
      value.replace("per", "%");
    }
    
    console.log(value);
    await bfeStringed.replace(/^.+\s.+$/g, value);

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
