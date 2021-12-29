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
    value = value.replace("per", "%");
    value = value.replace("_", ".");

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

  /* let style = document.getElementById("bfe-styles");
  if (!style) {
    style = document.createElement("style");
    style.id = "bfe-styles";
    document.head.appendChild(style);
  }
  style.innerHTML = "h1{color:red;}"; 
  //"@media screen and (min-width:400px) {...}";
  */

  /* var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule("h1{color:red;}",0); */

  var s = document.styleSheets[1];
  /*
  adjustCSSRules("h1", { "padding": "5px" });
  adjustCSSRules("h1", { "color": "red" });
  adjustCSSRules("h1", { border: "2px solid blue" }); 
  */
  adjustCSSRules("h1", "{ color: red; }");

  /*  */
}

function adjustCSSRules(selector, props) {
  let sheets = [...document.styleSheets];

  sheet.insertRule(`${selector} { ${props} }`, sheet.cssRules.length);

  /* const findRule = (s) =>
    [...s.cssRules].reverse().find((i) => i.selectorText == selector);
  let rule = sheets
    .map(findRule)
    .filter((i) => i)
    .pop();

    console.log(props);

  const propsArr = props.sup 
    // ? props.split(/\s*;\s*/ //) //.map((i) => i.split(/\s*:\s*/)) // from string
    //: Object.entries(props); // from Object

  let sheet;
  if (rule) for (let [prop, val] of propsArr) rule.style[prop] = val;
  else {
    sheet = sheets.pop();
    if (!props.sup)
      props = propsArr.reduce((str, [k, v]) => `${str}; ${k}: ${v}`, "");
    sheet.insertRule(`${selector} { ${props} }`, sheet.cssRules.length);
  } */
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
