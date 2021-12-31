"use strict";

if (!colors) {
  var colors = {};
}

var colorsNames = [];

var colorsDefault = {
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#000",
};

var colorsLP = {
  mystic: "#6610f2",
  old: "#EEEDA0",
  beast: "#fd7e14",
  tree: "#5A311D",
  blood: "#8A0707",
  pig: "#d63384",
  friend: "#20c997",
};

pushColors(colorsDefault);
pushColors(colorsLP);

async function cssCreate() {
  try {
    let bfeElements = await document.getElementsByClassName("bfe");
    let bfes = [];
    for (let bfeElement of bfeElements) {
      await bfeElement.classList.forEach((item) => {
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
      let bfeSplited = await bfe.split("-");
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
      value = await value.replace(/per/g, "%");
      value = await value.replace(/__min/g, " -");
      value = await value.replace(/_min/g, "-");
      value = await value.replace(/__/g, " ");
      value = await value.replace(/_/g, ".");
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
            bfeStringed += `{background-color:${colors[value]} !important;}`;
            break;
          case "text":
            bfeStringed += `{color:${colors[value]} !important;}`;
            break;
          case "border":
            bfeStringed += `{border-color:${colors[value]} !important;}`;
            break;
          case "bordert":
            bfeStringed += `{border-top-color:${colors[value]} !important;}`;
            break;
          case "borderb":
            bfeStringed += `{border-bottom-color:${colors[value]} !important;}`;
            break;
          case "borders":
            bfeStringed += `{border-right-color:${colors[value]} !important;}`;
            break;
          case "bordere":
            bfeStringed += `{border-left-color:${colors[value]} !important;}`;
            break;
          case "borderx":
            bfeStringed += `{border-right-color:${colors[value]} !important;border-left-color:${colors[value]} !important;}`;
            break;
          case "bordery":
            bfeStringed += `{border-top-color:${colors[value]} !important;border-bottom-color:${colors[value]} !important;}`;
            break;
          case "btn":
            console.log(colors[value]);
            console.log(await shadeTintColor(await HexToRGB("0f0"), -25));
  
            bfeStringed += `{background-color:${colors[value]};border-color:${
              colors[value]
            };}
            /.${bfe}:hover{background-color:${await shadeTintColor(
              await HexToRGB(colors[value]),
              -15
            )};border-color:${await shadeTintColor(
              await HexToRGB(colors[value]),
              -20
            )};}
            /.btn-check:focus + .${bfe}, .${bfe}:focus{background-color:${await shadeTintColor(
              await HexToRGB(colors[value]),
              -15
            )};border-color:${await shadeTintColor(
              await HexToRGB(colors[value]),
              -20
            )};}
            /.btn-check:checked + .${bfe}, .btn-check:active + .${bfe}, .${bfe}:active, .${bfe}.active, .show > .${bfe}.dropdown-toggle{background-color:${await shadeTintColor(
              await HexToRGB(colors[value]),
              -20
            )};border-color:${await shadeTintColor(
              await HexToRGB(colors[value]),
              -25
            )};box-shadow: 0 0 0 0.25rem 
            rgba(${await HexToRGB(
              await shadeTintColor(await HexToRGB(colors[value]), 3)
            )}, 0.5)
            ;}
            /.btn-check:checked + .btn-check:focus, .btn-check:active + .${bfe}:focus, .${bfe}:active:focus, .${bfe}.active:focus, .show > .${bfe}.dropdown-toggle:focus{box-shadow: 0 0 0 0.25rem 
              rgba(${await HexToRGB(
                await shadeTintColor(await HexToRGB(colors[value]), 3)
              )}, 0.5)
            ;}`;
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
          bfesStringed += bfeStringed + "/";
        }
      }
    }
    if (bfesStringed !== "") {
      for (let bfe of bfesStringed.split("/")) {
        if (bfe !== "") {
          createCSSRules(bfe);
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
  } catch (err) {
    console.log(err);
  }
}
function createCSSRules(rule) {
  let sheets = [...document.styleSheets];

  let sheet;
  sheet = sheets.pop();
  sheet.insertRule(rule, sheet.cssRules.length);
}
function HexToRGB(Hex) {
  let HexNoCat = Hex.replace("#", "");
  let rgb =
    HexNoCat.length !== 3
      ? [
          parseInt(HexNoCat.substr(0, 2), 16),
          parseInt(HexNoCat.substr(2, 2), 16),
          parseInt(HexNoCat.substr(4, 2), 16),
        ]
      : [
          parseInt(HexNoCat.substr(0, 1) + HexNoCat.substr(0, 1), 16),
          parseInt(HexNoCat.substr(1, 1) + HexNoCat.substr(1, 1), 16),
          parseInt(HexNoCat.substr(2, 1) + HexNoCat.substr(2, 1), 16),
        ];
  return rgb;
}
function shadeTintColor(rgb, percent) {
  console.log(rgb);
  var R =
    rgb[0] === 0 && percent > 0
      ? 16
      : rgb[0] === 255 && percent < 0
      ? 239
      : rgb[0];
  var G =
    rgb[1] === 0 && percent > 0
      ? 16
      : rgb[1] === 255 && percent < 0
      ? 239
      : rgb[1];
  var B =
    rgb[2] === 0 && percent > 0
      ? 16
      : rgb[2] === 255 && percent < 0
      ? 239
      : rgb[2];

  console.log(R + " " + G + " " + B);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  console.log(R + " " + G + " " + B);

  R = R > 255 ? 255 : R < 0 ? 0 : R;
  G = G > 255 ? 255 : G < 0 ? 0 : G;
  B = B > 255 ? 255 : B < 0 ? 0 : B;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}
function pushColors(newColors) {
  Object.keys(newColors).forEach((key) => {
    colors[key] = newColors[key];
  });
  Object.keys(colors).forEach((key) => {
    if (colorsNames.includes(key)) {
      colorsNames.push(key);
    }
  });
}
window.onload = cssCreate();
