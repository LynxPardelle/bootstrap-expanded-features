"use strict";
var hasColors = false;
if (colors) {
  hasColors = true;
}

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
  let bfesStringed = "";
  let bfesStringedSM = "";
  let bfesStringedMD = "";
  let bfesStringedLG = "";
  let bfesStringedXl = "";
  let bfesStringedXXL = "";
  for (let bfe of bfes) {
    let bfeSplited = bfe.split("-");
    let bfeStringed = "." + bfe;
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
    value = value.replace("per", "%");
    value = value.replace("_", ".");
    switch (bfeSplited[1]) {
      case "w":
        bfeStringed += `{width:${value};}`;
        break;
      case "h":
        bfeStringed += `{height:${value};}`;
        break;
      case "wmin":
        bfeStringed += `{min-width:${value};}`;
        break;
      case "hmin":
        bfeStringed += `{min-height:${value};}`;
        break;
      case "wmax":
        bfeStringed += `{max-width:${value};}`;
        break;
      case "hmax":
        bfeStringed += `{max-height:${value};}`;
        break;
      case "rounded":
        bfeStringed += `{border-radius:${value};}`;
        break;
      case "z":
        bfeStringed += `{z-index:${value};}`;
        break;
      case "top":
        bfeStringed += `{top:${value};}`;
        break;
      case "bot":
        bfeStringed += `{bottom:${value};}`;
        break;
      case "end":
        bfeStringed += `{left:${value};}`;
        break;
      case "start":
        bfeStringed += `{right:${value};}`;
        break;
      case "bot":
        bfeStringed += `{bottom:${value};}`;
        break;
      case "fs":
        bfeStringed += `{font-size:${value};}`;
        break;
      case "p":
        bfeStringed += `{padding:${value};}`;
        break;
      case "pt":
        bfeStringed += `{padding-top:${value};}`;
        break;
      case "pb":
        bfeStringed += `{padding-bottom:${value};}`;
        break;
      case "ps":
        bfeStringed += `{padding-left:${value};}`;
        break;
      case "pe":
        bfeStringed += `{padding-right:${value};}`;
        break;
      case "px":
        bfeStringed += `{padding-left:${value};padding-right:${value};}`;
        break;
      case "py":
        bfeStringed += `{padding-top:${value};padding-bottom:${value};}`;
        break;
      case "m":
        bfeStringed += `{margin:${value};}`;
        break;
      case "mt":
        bfeStringed += `{margin-top:${value};}`;
        break;
      case "mb":
        bfeStringed += `{margin-bottom:${value};}`;
        break;
      case "ms":
        bfeStringed += `{margin-left:${value};}`;
        break;
      case "me":
        bfeStringed += `{margin-right:${value};}`;
        break;
      case "mx":
        bfeStringed += `{margin-left:${value};margin-right:${value};}`;
        break;
      case "my":
        bfeStringed += `{margin-top:${value};margin-bottom:${value};}`;
        break;
    }

    if (
      hasColors === true &&
      (bfeSplited[1] === "bg" ||
        bfeSplited[1] === "text" ||
        bfeSplited[1] === "border" ||
        bfeSplited[1] === "bordert" ||
        bfeSplited[1] === "borderb" ||
        bfeSplited[1] === "borders" ||
        bfeSplited[1] === "bordere" ||
        bfeSplited[1] === "borderx" ||
        bfeSplited[1] === "bordery" ||
        bfeSplited[1] === "btn") &&
      colorsNames.includes(value)
    ) {
      switch (bfeSplited[1]) {
        case "bg":
          bfeStringed += `{background-color:${colors[value]};}`;
          break;
        case "text":
          bfeStringed += `{color:${colors[value]};}`;
          break;
          case "border":
          bfeStringed += `{border-color:${colors[value]};}`;
          break;
          case "bordert":
          bfeStringed += `{border-top-color:${colors[value]};}`;
          break;
          case "borderb":
          bfeStringed += `{border-bottom-color:${colors[value]};}`;
          break;
          case "borders":
          bfeStringed += `{border-right-color:${colors[value]};}`;
          break;
          case "bordere":
          bfeStringed += `{border-left-color:${colors[value]};}`;
          break;
          case "borderx":
          bfeStringed += `{border-right-color:${colors[value]};border-left-color:${colors[value]};}`;
          break;
          case "bordery":
          bfeStringed += `{border-top-color:${colors[value]};border-bottom-color:${colors[value]};}`;
          break;
          case "text":
          bfeStringed += `{color:${colors[value]};}`;
          break;
      }
    }

    if (bfeStringed.includes("{") && bfeStringed.includes("}")) {
      if (hasBP === true) {
        switch (bfeSplited[2]) {
          case "sm":
            bfesStringedSM += bfeStringed;
            break;
          case "md":
            bfesStringedMD += bfeStringed;
            break;
          case "lg":
            bfesStringedLG += bfeStringed;
            break;
          case "xl":
            bfesStringedXl += bfeStringed;
            break;
          case "xxl":
            bfesStringedXXL += bfeStringed;
            break;
        }
      } else {
        createCSSRules(bfeStringed);
        bfesStringed += bfeStringed;
      }
    }
  }
  if (bfesStringedSM !== "") {
    createCSSRules(
      `@media only screen and (min-width: 500px) {${bfesStringedSM}}`
    );
  }
  if (bfesStringedMD !== "") {
    createCSSRules(
      `@media only screen and (min-width: 500px) {${bfesStringedMD}}`
    );
  }
  if (bfesStringedLG !== "") {
    createCSSRules(
      `@media only screen and (min-width: 500px) {${bfesStringedLG}}`
    );
  }
  if (bfesStringedXl !== "") {
    createCSSRules(
      `@media only screen and (min-width: 500px) {${bfesStringedXl}}`
    );
  }
  if (bfesStringedXXL !== "") {
    createCSSRules(
      `@media only screen and (min-width: 500px) {${bfesStringedXXL}}`
    );
  }
}
function createCSSRules(rule) {
  let sheets = [...document.styleSheets];

  console.log(rule);
  let sheet;
  sheet = sheets.pop();
  sheet.insertRule(rule, sheet.cssRules.length);
}
window.onload = cssCreate();
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
