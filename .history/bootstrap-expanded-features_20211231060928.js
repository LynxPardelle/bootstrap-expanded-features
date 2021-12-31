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
    let startTimeCSSCreate = performance.now();
    let befElements = await document.getElementsByClassName("bef");
    let befs = [];
    for (let befElement of befElements) {
      await befElement.classList.forEach((item) => {
        if (!befs.includes(item) && item !== "bef" && item.includes("bef")) {
          befs.push(item);
        }
      });
    }
    let befsStringed = "";
    let befsStringedSM = "";
    let befsStringedMD = "";
    let befsStringedLG = "";
    let befsStringedXl = "";
    let befsStringedXXL = "";
    for (let bef of befs) {
      let befStringed = "." + bef;
      let befSplited = await bef.split("-");
      let hasBP = false;
      let value = "";
      if (
        befSplited[2] === "sm" ||
        befSplited[2] === "md" ||
        befSplited[2] === "lg" ||
        befSplited[2] === "xl" ||
        befSplited[2] === "xxl"
      ) {
        hasBP = true;
        value = befSplited[3];
      } else {
        value = befSplited[2];
      }
      value = await value.replace(/per/g, "%");
      value = await value.replace(/COM/g, " , ");
      value = await value.replace(/MIN/g, "-");
      value = await value.replace(/__/g, " ");
      value = await value.replace(/_/g, ".");
      switch (befSplited[1]) {
        case "w":
          befStringed += `{width:${value};}`;
          break;
        case "h":
          befStringed += `{height:${value};}`;
          break;
        case "wmn":
          befStringed += `{min-width:${value};}`;
          break;
        case "hmn":
          befStringed += `{min-height:${value};}`;
          break;
        case "wmx":
          befStringed += `{max-width:${value};}`;
          break;
        case "hmx":
          befStringed += `{max-height:${value};}`;
          break;
        case "rounded":
          befStringed += `{border-radius:${value};}`;
          break;
        case "z":
          befStringed += `{z-index:${value};}`;
          break;
        case "opacity":
          befStringed += `{opacity:${value};}`;
          break;
        case "top":
          befStringed += `{top:${value};}`;
          break;
        case "bot":
          befStringed += `{bottom:${value};}`;
          break;
        case "end":
          befStringed += `{left:${value};}`;
          break;
        case "start":
          befStringed += `{right:${value};}`;
          break;
        case "bot":
          befStringed += `{bottom:${value};}`;
          break;
        case "fs":
          befStringed += `{font-size:${value};}`;
          break;
        case "lh":
          befStringed += `{line-height:${value};}`;
          break;
        case "gap":
          befStringed += `{gap:${value};}`;
          break;
        case "p":
          befStringed += `{padding:${value};}`;
          break;
        case "pt":
          befStringed += `{padding-top:${value};}`;
          break;
        case "pb":
          befStringed += `{padding-bottom:${value};}`;
          break;
        case "ps":
          befStringed += `{padding-left:${value};}`;
          break;
        case "pe":
          befStringed += `{padding-right:${value};}`;
          break;
        case "px":
          befStringed += `{padding-left:${value};padding-right:${value};}`;
          break;
        case "py":
          befStringed += `{padding-top:${value};padding-bottom:${value};}`;
          break;
        case "m":
          befStringed += `{margin:${value};}`;
          break;
        case "mt":
          befStringed += `{margin-top:${value};}`;
          break;
        case "mb":
          befStringed += `{margin-bottom:${value};}`;
          break;
        case "ms":
          befStringed += `{margin-left:${value};}`;
          break;
        case "me":
          befStringed += `{margin-right:${value};}`;
          break;
        case "mx":
          befStringed += `{margin-left:${value};margin-right:${value};}`;
          break;
        case "my":
          befStringed += `{margin-top:${value};margin-bottom:${value};}`;
          break;
        case "border":
          befStringed += `{border-width:${value};}`;
          break;
        case "bordert":
          befStringed += `{border-top-width:${value};}`;
          break;
        case "borderb":
          befStringed += `{border-bottom-width:${value};}`;
          break;
        case "borders":
          befStringed += `{border-left-width:${value};}`;
          break;
        case "bordere":
          befStringed += `{border-right-width:${value};}`;
          break;
        case "borderx":
          befStringed += `{border-right-width:${value};border-left-width:${value};}`;
          break;
        case "bordery":
          befStringed += `{border-top-width:${value};border-bottom-width:${value};}`;
          break;
        case "borderStyle":
          befStringed += `{border-style:${value};}`;
          break;
        case "borderStylet":
          befStringed += `{border-top-style:${value};}`;
          break;
        case "borderStyleb":
          befStringed += `{border-bottom-style:${value};}`;
          break;
        case "borderStyles":
          befStringed += `{border-left-style:${value};}`;
          break;
        case "borderStylee":
          befStringed += `{border-right-style:${value};}`;
          break;
        case "borderStylex":
          befStringed += `{border-right-style:${value};border-left-style:${value};}`;
          break;
        case "borderStyley":
          befStringed += `{border-top-style:${value};border-bottom-style:${value};}`;
          break;
      }
      if (
        (befSplited[1] === "bg" ||
          befSplited[1] === "text" ||
          befSplited[1] === "link" ||
          befSplited[1] === "borderColor" ||
          befSplited[1] === "borderColort" ||
          befSplited[1] === "borderColorb" ||
          befSplited[1] === "borderColors" ||
          befSplited[1] === "borderColore" ||
          befSplited[1] === "borderColorx" ||
          befSplited[1] === "borderColory" ||
          befSplited[1] === "btn" ||
          befSplited[1] === "boxShadow" ||
          befSplited[1] === "textShadow") &&
        (colorsNames.includes(value) ||
          (colorsNames.includes(value.split(" ")[0]) &&
            colorsNames.includes(value.split(" ")[0])) ||
          (colorsNames.includes(value.split(" ")[1]) &&
            colorsNames.includes(value.split(" ")[1])) ||
          (colorsNames.includes(value.split(" ")[2]) &&
            colorsNames.includes(value.split(" ")[2])) ||
          (colorsNames.includes(value.split(" ")[3]) &&
            colorsNames.includes(value.split(" ")[3])) ||
          (colorsNames.includes(value.split(" ")[4]) &&
            colorsNames.includes(value.split(" ")[4])))
      ) {
        switch (befSplited[1]) {
          case "bg":
            if (value.includes(" OPA")) {
              befStringed += `{background-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{background-color:${colors[value]} !important;}`;
            }
            break;
          case "text":
            if (value.includes(" OPA")) {
              befStringed += `{color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{color:${colors[value]} !important;}`;
            }
            break;
          case "link":
            if (value.includes(" OPA")) {
              befStringed = `.${bef} a{color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed = `.${bef} a{color:${colors[value]} !important;}`;
            }
            break;
          case "borderColor":
            if (value.includes(" OPA")) {
              befStringed += `{border-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{border-color:${colors[value]} !important;}`;
            }
            break;
          case "borderColort":
            if (value.includes(" OPA")) {
              befStringed += `{border-top-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{border-top-color:${colors[value]} !important;}`;
            }
            break;
          case "borderColorb":
            if (value.includes(" OPA")) {
              befStringed += `{border-bottom-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{border-bottom-color:${colors[value]} !important;}`;
            }
            break;
          case "borderColors":
            if (value.includes(" OPA")) {
              befStringed += `{border-right-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{border-right-color:${colors[value]} !important;}`;
            }
            break;
          case "borderColore":
            if (value.includes(" OPA")) {
              befStringed += `{border-left-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{border-left-color:${colors[value]} !important;}`;
            }
            break;
          case "borderColorx":
            if (value.includes(" OPA")) {
              befStringed += `{border-right-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${
                value.split(" ")[2]
              }) !important;border-left-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{border-right-color:${colors[value]} !important;border-left-color:${colors[value]} !important;}`;
            }
            break;
          case "borderColory":
            if (value.includes(" OPA")) {
              befStringed += `{border-top-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${
                value.split(" ")[2]
              }) !important;border-bottom-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]}) !important;}`;
            } else {
              befStringed += `{border-top-color:${colors[value]} !important;border-bottom-color:${colors[value]} !important;}`;
            }
            break;
          case "btn":
            if (value.includes(" OPA")) {
              befStringed += `{
                background-color: rgba(${await HexToRGB(
                  colors[value.split(" ")[0]]
                ).toString()}, ${value.split(" ")[2]});
              border-color: rgba(${await HexToRGB(
                colors[value.split(" ")[0]]
              ).toString()}, ${value.split(" ")[2]});}
              /.${bef}:hover{
                background-color: rgba(${await HexToRGB(
                  await shadeTintColor(
                    await HexToRGB(colors[value.split(" ")[0]]),
                    -15
                  )
                ).toString()}, ${value.split(" ")[2]});
              border-color: rgba(${await HexToRGB(
                await shadeTintColor(
                  await HexToRGB(colors[value.split(" ")[0]]),
                  -20
                )
              ).toString()}, ${value.split(" ")[2]});}
              /.btn-check:focus + .${bef}, .${bef}:focus{
                background-color: rgba(${await HexToRGB(
                  await shadeTintColor(
                    await HexToRGB(colors[value.split(" ")[0]]),
                    -15
                  )
                ).toString()}, ${value.split(" ")[2]});
              border-color: rgba(${await HexToRGB(
                await shadeTintColor(
                  await HexToRGB(colors[value.split(" ")[0]]),
                  -20
                )
              ).toString()}, ${value.split(" ")[2]});}
              /.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{
                background-color: rgba(${await HexToRGB(
                  await shadeTintColor(
                    await HexToRGB(colors[value.split(" ")[0]]),
                    -20
                  )
                ).toString()}, ${value.split(" ")[2]});
              border-color: rgba(${await HexToRGB(
                await shadeTintColor(
                  await HexToRGB(colors[value.split(" ")[0]]),
                  -25
                )
              ).toString()}, ${value.split(" ")[2]});
              box-shadow: 0 0 0 0.25rem 
              rgba(${await HexToRGB(
                await shadeTintColor(
                  await HexToRGB(colors[value.split(" ")[0]]),
                  3
                )
              )}, ${value.split(" ")[2]})
              ;}
              /.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{
                box-shadow: 0 0 0 0.25rem 
                rgba(${await HexToRGB(
                  await shadeTintColor(
                    await HexToRGB(colors[value.split(" ")[0]]),
                    3
                  )
                )}, ${value.split(" ")[2]})
              ;
            }`;
            } else {
              befStringed += `{background-color:${colors[value]};border-color:${
                colors[value]
              };}
              /.${bef}:hover{background-color:${await shadeTintColor(
                await HexToRGB(colors[value]),
                -15
              )};border-color:${await shadeTintColor(
                await HexToRGB(colors[value]),
                -20
              )};}
              /.btn-check:focus + .${bef}, .${bef}:focus{background-color:${await shadeTintColor(
                await HexToRGB(colors[value]),
                -15
              )};border-color:${await shadeTintColor(
                await HexToRGB(colors[value]),
                -20
              )};}
              /.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{background-color:${await shadeTintColor(
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
              /.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{box-shadow: 0 0 0 0.25rem 
                rgba(${await HexToRGB(
                  await shadeTintColor(await HexToRGB(colors[value]), 3)
                )}, 0.5)
              ;}`;
            }
            break;
          case "boxShadow":
            for (let splitVal of value.split(" ")) {
              if (colorsNames.includes(splitVal)) {
                value = value.replace(splitVal, colors[splitVal]);
              }
            }
            befStringed += `{box-shadow:${value} !important;}`;
            break;
          case "textShadow":
            for (let splitVal of value.split(" ")) {
              if (colorsNames.includes(splitVal)) {
                value = value.replace(splitVal, colors[splitVal]);
              }
            }
            befStringed += `{text-shadow:${value} !important;}`;
            break;
        }
      }
      if (befStringed.includes("{") && befStringed.includes("}")) {
        if (hasBP === true) {
          befStringed = befStringed.replace(/\//g, "");
          switch (befSplited[2]) {
            case "sm":
              befsStringedSM += befStringed;
              break;
            case "md":
              befsStringedMD += befStringed;
              break;
            case "lg":
              befsStringedLG += befStringed;
              break;
            case "xl":
              befsStringedXl += befStringed;
              break;
            case "xxl":
              befsStringedXXL += befStringed;
              break;
          }
        } else {
          befsStringed += befStringed + "/";
        }
      }
    }
    if (befsStringed !== "") {
      for (let bef of befsStringed.split("/")) {
        if (bef !== "") {
          await createCSSRules(bef);
        }
      }
    }
    if (befsStringedSM !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 500px) {${befsStringedSM}}`
      );
    }
    if (befsStringedMD !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 500px) {${befsStringedMD}}`
      );
    }
    if (befsStringedLG !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 500px) {${befsStringedLG}}`
      );
    }
    if (befsStringedXl !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 500px) {${befsStringedXl}}`
      );
    }
    if (befsStringedXXL !== "") {
      await createCSSRules(
        `@media only screen and (min-width: 500px) {${befsStringedXXL}}`
      );
    }
    var endTimeCSSCreate = performance.now();
    let befTimer = document.getElementById("befTimer");
    if (befTimer) {
      console.log(
        `Call to cssCreate() took 
        ${endTimeCSSCreate - startTimeCSSCreate}
        milliseconds`
      );
      befTimer.innerHTML = `
      <p>
      Call to cssCreate() took 
      ${endTimeCSSCreate - startTimeCSSCreate}
      milliseconds
      </p>
      `;
    }
  } catch (err) {
    console.log(err);
  }
}
async function createCSSRules(rule) {
  try {
    let sheets = [...document.styleSheets];

    let sheet;
    sheet = await sheets.pop();
    await sheet.insertRule(rule, sheet.cssRules.length);
  } catch (err) {
    console.log(err);
  }
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
  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);
  R = R > 255 ? 255 : R < 0 ? 0 : R;
  G = G > 255 ? 255 : G < 0 ? 0 : G;
  B = B > 255 ? 255 : B < 0 ? 0 : B;
  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
  return "#" + RR + GG + BB;
}
async function pushColors(newColors) {
  try {
    await Object.keys(newColors).forEach((key) => {
      colors[key] = newColors[key];
    });
    await Object.keys(colors).forEach((key) => {
      if (!colorsNames.includes(key)) {
        colorsNames.push(key);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
window.onload = cssCreate();
