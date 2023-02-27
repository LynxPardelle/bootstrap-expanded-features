"use strict";
if (!colors) {
  var colors = {};
}
const allColors = {
  /* colorsDefault */
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#212529",
  /* colorsBS */
  indigoBS: "#6610f2",
  purpleBS: "#6f42c1",
  pinkBS: "#d63384",
  orangeBS: "#fd7e14",
  tealBS: "#20c997",
  white: "#fff",
  grayBS: "#6c757d",
  /* colorsLP */
  mystic: "#210020",
  lavenderLP: "#D6BCFF",
  fairy: "#D680FF",
  summer: "#FF9A2E",
  old: "#EEEDA0",
  friend: "#3BBBB2",
  tree: "#5A311D",
  blood: "#8A0707",
  beast: "#F5785D",
  abyss: "#000",
  /* basicColorsCSS */ /* (\s)(#[0-9A-Fa-f]+)\s([0-9]*,?)*\n*\s*\n*\s* */ /* :$1'$2', */
  black: "#000000",
  silver: "#C0C0C0",
  gray: "#808080",
  maroon: "#800000",
  red: "#FF0000",
  purple: "#800080",
  fuchsia: "#FF00FF",
  green: "#008000",
  lime: "#00FF00",
  olive: "#808000",
  yellow: "#FFFF00",
  navy: "#000080",
  blue: "#0000FF",
  teal: "#008080",
  aqua: "#00FFFF",
  /* extendedColorsCSS */
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  blanchedalmond: "#ffebcd",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  oldlace: "#fdf5e6",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  whitesmoke: "#f5f5f5",
  yellowgreen: "#9acd32",
};
const cssNamesParsed = {
  w: "width",
  h: "height",
  wmn: "min-width",
  hmn: "min-height",
  wmx: "max-width",
  hmx: "max-height",
  minw: "min-width",
  minh: "min-height",
  maxw: "max-width",
  maxh: "max-height",
  rounded: "border-radius",
  r: "border-radius",
  rs: ["border-top-left-radius", "border-bottom-left-radius"],
  re: ["border-top-right-radius", "border-bottom-right-radius"],
  rt: ["border-top-left-radius", "border-top-right-radius"],
  rb: ["border-bottom-left-radius", "border-bottom-right-radius"],
  rst: "border-top-left-radius",
  ret: "border-top-right-radius",
  rsb: "border-bottom-left-radius",
  reb: "border-bottom-right-radius",
  z: "z-index",
  o: "opacity",
  // opacity: "opacity",
  pos: "position",
  // position: "position",
  t: "top",
  // top: "top",
  b: "bottom",
  // bottom: "bottom",
  start: "left",
  s: "left",
  end: "right",
  e: "right",
  fs: "font-size",
  lh: "line-height",
  g: "gap",
  // gap: "gap",
  p: "padding",
  pt: "padding-top",
  pb: "padding-bottom",
  ps: "padding-left",
  pe: "padding-right",
  py: ["padding-top", "padding-bottom"],
  px: ["padding-left", "padding-right"],
  m: "margin",
  mt: "margin-top",
  mb: "margin-bottom",
  ms: "margin-left",
  me: "margin-right",
  my: ["margin-top", "margin-bottom"],
  mx: ["margin-left", "margin-right"],
  bw: "border-width",
  bwt: "border-top-width",
  bwb: "border-bottom-width",
  bws: "border-left-width",
  bwe: "border-right-width",
  bwy: ["border-top-width", "border-bottom-width"],
  bwx: ["border-left-width", "border-right-width"],
  borderStylet: "border-top-style",
  borderStyleb: "border-bottom-style",
  borderStyles: "border-left-style",
  borderStylee: "border-right-style",
  borderStyley: ["border-top-style", "border-bottom-style"],
  borderStylex: ["border-left-style", "border-right-style"],
  bs: "border-style",
  bst: "border-top-style",
  bsb: "border-bottom-style",
  bss: "border-left-style",
  bse: "border-right-style",
  bsy: ["border-top-style", "border-bottom-style"],
  bsx: ["border-left-style", "border-right-style"],
  borderColort: "border-top-color",
  borderColorb: "border-bottom-color",
  borderColors: "border-left-color",
  borderColore: "border-right-color",
  borderColory: ["border-top-color", "border-bottom-color"],
  borderColorx: ["border-left-color", "border-right-color"],
  bc: "border-color",
  bct: "border-top-color",
  bcb: "border-bottom-color",
  bcs: "border-left-color",
  bce: "border-right-color",
  bcy: ["border-top-color", "border-bottom-color"],
  bcx: ["border-left-color", "border-right-color"],
  bg: "background-color",
  text: "color",
  bsh: "box-shadow",
  // boxShadow: "box-shadow",
  tsh: "text-shadow",
  // textShadow: "text-shadow",
  ov: "overflow",
  ovx: "overflow-x",
  ovy: "overflow-y",
};
let alreadyCreatedClasses = [];
let sheet;
let isDebug = false;
let bps = [
  {
    bp: "sm",
    value: "576px",
    bef: "",
  },
  {
    bp: "md",
    value: "768px",
    bef: "",
  },
  {
    bp: "lg",
    value: "992px",
    bef: "",
  },
  {
    bp: "xl",
    value: "1200px",
    bef: "",
  },
  {
    bp: "xxl",
    value: "1400px",
    bef: "",
  },
];
/* Console */
let styleConsole = `padding: 0.25rem 0.125rem; background-color: ${colors.mystic}; color: ${colors.friend};`;
/* Time Management*/
let lastCSSCreate = new Date().getTime();
let timer = null;
let timesCSSCreated = 0;
let timesCSSNeedsToCreate = 0;
let timeBetweenReCreate = 300;
let sheets = [...document.styleSheets];
for (let nSheet of sheets) {
  if (nSheet.href?.includes("bef-styles")) {
    sheet = nSheet;
  }
}
pushColors(allColors);
async function cssCreate(updateBefs, primordial) {
  timesCSSNeedsToCreate++;
  let newTimer = setInterval(() => {
    const currentTime = Date.now();
    if (
      currentTime - lastCSSCreate >= timeBetweenReCreate ||
      primordial === true ||
      timesCSSCreated === 0
    ) {
      timesCSSCreated++;
      doCssCreate(updateBefs);
      lastCSSCreate = currentTime;
      clearInterval(newTimer);
    }
    /* if (currentCSSTimeCreation <= timesCSSCreated) {
    } */
    if (timer !== newTimer) {
      clearInterval(newTimer);
    }
  }, 10);
  timer = newTimer;
}
async function doCssCreate(updateBefs = null) {
  try {
    if (!sheet) {
      let sheets = [...document.styleSheets];
      for (let nSheet of sheets) {
        if (nSheet.href?.includes("bef-styles")) {
          sheet = nSheet;
        }
      }
      if (!sheet) {
        throw new Error("There is no bef-styles style sheet!");
      }
    }
    const startTimeCSSCreate = performance.now();
    let befs = [];
    if (!updateBefs) {
      let befElements = document.getElementsByClassName("bef");
      for (let befElement of befElements) {
        befElement.classList.forEach((item) => {
          if (!befs.includes(item) && item !== "bef" && item.includes("bef")) {
            befs.push(item);
          }
        });
      }
    } else {
      befs = updateBefs;
    }
    if (isDebug === true) {
      consoleLog("info", { befs: befs }, styleConsole);
    }
    let befsStringed = "";
    let bpsStringed = bps.map((b) => b);
    for (let bef of befs) {
      if (!updateBefs) {
        if (alreadyCreatedClasses.includes(bef)) {
          continue;
        }
        if ([...sheet.cssRules].find((i) => i.cssText.includes(bef))) {
          continue;
        }
      }
      if (!alreadyCreatedClasses.includes(bef)) {
        alreadyCreatedClasses.push(bef);
      }
      let befStringed = "." + bef;
      let befSplited = bef.split("-");
      let hasBP = false;
      let value = "";
      let secondValue = "";
      if (bps.find((b) => befSplited[2] === b.bp)) {
        hasBP = true;
        value = befSplited[3];
        secondValue = !!befSplited[4] ? befSplited[4] : "";
      } else if (befSplited[2]) {
        value = befSplited[2];
        secondValue = !!befSplited[3] ? befSplited[3] : "";
      }
      /* befSplited[1] = befSplited[1]
          .replace(/COM/g, ' , ')
          .replace(/__/g, ' ')
          .replace(/_/g, '.'); */
      value = value
        .replace(/per/g, "%")
        .replace(/COM/g, " , ")
        .replace(/MIN/g, "-")
        .replace(/PLUS/g, "+")
        .replace(/SD/g, "(")
        .replace(/ED/g, ")")
        .replace(/HASH/g, "#")
        .replace(/__/g, " ")
        .replace(/_/g, ".");
      consoleLog("info", { value: value }, styleConsole);
      let values = {
        value: value,
        secondValue: secondValue,
      };
      for (let v in values) {
        for (let i = 0; i < values[v].split(" ").length; i++) {
          let sv = values[v].split(" ")[i];
          let hasOPA = values[v].split(" ")[i + 1] === "OPA";
          let OPA = values[v].split(" ")[i + 2];
          values[v] =
            !!hasOPA && !!OPA
              ? values[v]
                  .replace(
                    sv,
                    `rgba(${HexToRGB(
                      colors[sv.toString()]
                    ).toString()}, ${OPA})`
                  )
                  .split(` OPA ${OPA}`)[0]
              : values[v].includes(" OPA")
              ? values[v]
                  .replace(
                    sv,
                    `rgba(${HexToRGB(colors[sv.toString()]).toString()}, ${
                      values[v].split("OPA ")[1]
                    })`
                  )
                  .split(" OPA")[0]
              : colors[sv.toString()]
              ? values[v].replace(sv, colors[sv.toString()])
              : values[v];
        }
      }
      value = values.value;
      secondValue = values.secondValue;
      if (isDebug === true) {
        consoleLog("info", { value: value }, styleConsole);
        consoleLog("info", { secondValue: secondValue }, styleConsole);
      }
      switch (true) {
        case !!cssNamesParsed[
          befSplited[1]
            .replace("Hover", "")
            .replace("Active", "")
            .replace("Focus", "")
            .replace("Visited", "")
            .replace("Target", "")
            .replace("FocusWithin", "")
            .replace("FocusVisible", "")
            .toString()
        ]:
          if (
            typeof cssNamesParsed[
              befSplited[1]
                .replace("Hover", "")
                .replace("Active", "")
                .replace("Focus", "")
                .replace("Visited", "")
                .replace("Target", "")
                .replace("FocusWithin", "")
                .replace("FocusVisible", "")
                .toString()
            ] === "string"
          ) {
            befStringed += `${
              befSplited[1].includes("Hover")
                ? ":hover"
                : befSplited[1].includes("Active")
                ? ":active"
                : befSplited[1].includes("Focus")
                ? ":focus"
                : befSplited[1].includes("Visited")
                ? ":visited"
                : befSplited[1].includes("Target")
                ? ":target"
                : befSplited[1].includes("FocusWithin")
                ? ":focus-within"
                : befSplited[1].includes("FocusVisible")
                ? ":focusVisible"
                : ""
            }{${
              cssNamesParsed[
                befSplited[1]
                  .replace("Hover", "")
                  .replace("Active", "")
                  .replace("Focus", "")
                  .replace("Visited", "")
                  .replace("Target", "")
                  .replace("FocusWithin", "")
                  .replace("FocusVisible", "")
                  .toString()
              ]
            }:${value};}`;
          } else {
            befStringed += `${
              befSplited[1].includes("Hover")
                ? ":hover"
                : befSplited[1].includes("Active")
                ? ":active"
                : befSplited[1].includes("Focus")
                ? ":focus"
                : befSplited[1].includes("Visited")
                ? ":visited"
                : befSplited[1].includes("Target")
                ? ":target"
                : befSplited[1].includes("FocusWithin")
                ? ":focus-within"
                : befSplited[1].includes("FocusVisible")
                ? ":focusVisible"
                : ""
            }{${
              cssNamesParsed[
                befSplited[1]
                  .replace("Hover", "")
                  .replace("Active", "")
                  .replace("Focus", "")
                  .replace("Visited", "")
                  .replace("Target", "")
                  .replace("FocusWithin", "")
                  .replace("FocusVisible", "")
                  .toString()
              ][0]
            }:${value};${
              cssNamesParsed[
                befSplited[1]
                  .replace("Hover", "")
                  .replace("Active", "")
                  .replace("Focus", "")
                  .replace("Visited", "")
                  .replace("Target", "")
                  .replace("FocusWithin", "")
                  .replace("FocusVisible", "")
                  .toString()
              ][1]
            }:${value};}`;
          }
          break;
        case befSplited[1].startsWith("link"):
          befStringed += ` a${
            befSplited[1].includes("Hover")
              ? ":hover"
              : befSplited[1].includes("Active")
              ? ":active"
              : befSplited[1].includes("Focus")
              ? ":focus"
              : befSplited[1].includes("Visited")
              ? ":visited"
              : befSplited[1].includes("Target")
              ? ":target"
              : befSplited[1].includes("FocusWithin")
              ? ":focus-within"
              : befSplited[1].includes("FocusVisible")
              ? ":focusVisible"
              : ""
          }{color:${value} !important;}`;
          break;
        case befSplited[1] === "btn":
          befStringed += `{
                    background-color:${value};
                    border-color:${value};}
                  /.${bef}:hover{background-color:${shadeTintColor(
            HexToRGB(value),
            -15
          )};border-color:${shadeTintColor(HexToRGB(value), -20)};}
                  /.btn-check:focus + .${bef}, .${bef}:focus{background-color:${shadeTintColor(
            HexToRGB(value),
            -15
          )};border-color:${shadeTintColor(HexToRGB(value), -20)};}
                  /.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{background-color:${shadeTintColor(
            HexToRGB(value),
            -20
          )};border-color:${shadeTintColor(
            HexToRGB(value),
            -25
          )};box-shadow: 0 0 0 0.25rem
                  rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                  ;}
                  /.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{box-shadow: 0 0 0 0.25rem
                    rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                  ;}`;
          break;
        case befSplited[1] === "btnOutline":
          befStringed += `{
                    color:${value};
                    background-color:${secondValue ? secondValue : "default"};
                      border-color:${value};}
                    /.${bef}:hover{
                      background-color:${value};
                      color:${secondValue ? secondValue : "default"};
                      border-color:${shadeTintColor(HexToRGB(value), -20)};}
                    /.btn-check:focus + .${bef}, .${bef}:focus{
                      border-color:${shadeTintColor(HexToRGB(value), -20)};}
                    /.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{
                      border-color:${shadeTintColor(HexToRGB(value), -25)};
                    box-shadow: 0 0 0 0.25rem
                    rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                    ;}
                    /.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{
                      box-shadow: 0 0 0 0.25rem
                      rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                    ;}`;
          break;
        default:
          befStringed += `{${await camelToCSSValid(befSplited[1])}:${value};}`;
          console.log(await camelToCSSValid(befSplited[1]));
          break;
      }
      for (let cssProperty of befStringed.split(";")) {
        if (!cssProperty.includes("!important") && cssProperty.length > 5) {
          befStringed = befStringed.replace(
            cssProperty,
            cssProperty + " !important"
          );
        }
      }
      if (befStringed.includes("{") && befStringed.includes("}")) {
        if (hasBP === true) {
          befStringed = befStringed.replace(/\//g, "");
          bpsStringed = bpsStringed.map((b) => {
            if (befSplited[2] === b.bp) {
              b.bef += befStringed;
            }
            return b;
          });
        } else {
          befsStringed += befStringed + "/";
        }
      }
    }
    if (befsStringed !== "") {
      if (isDebug === true) {
        consoleLog("info", { befsStringed: befsStringed }, styleConsole);
      }
      for (let bef of befsStringed.split("/")) {
        if (bef !== "") {
          createCSSRules(bef);
        }
      }
    }
    bpsStringed.forEach((b) => {
      if (b.bef !== "") {
        if (isDebug === true) {
          consoleLog(
            "info",
            { bp: b.bp, value: b.value, bef: b.bef },
            styleConsole
          );
        }
        createCSSRules(
          `@media only screen and (min-width: ${b.value}) {${b.bef}}`
        );
        b.bef = "";
      }
    });
    const endTimeCSSCreate = performance.now();
    if (isDebug === true) {
      consoleLog(
        "info",
        `Call to cssCreate() took ${
          endTimeCSSCreate - startTimeCSSCreate
        } milliseconds`,
        styleConsole
      );
    }
    let befTimer = document.getElementById("befTimer");
    if (befTimer) {
      befTimer.innerHTML = `
            <p>
            Call to cssCreate() took ${
              endTimeCSSCreate - startTimeCSSCreate
            } milliseconds
            </p>
            `;
    }
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

function createCSSRules(rule, update = false) {
  try {
    if (isDebug === true) {
      consoleLog("info", { rule: rule }, styleConsole);
    }
    if (rule && !rule.split("{")[0].includes("@media")) {
      let index;
      let originalRule = [...sheet.cssRules].some((cssRule, i) => {
        if (
          cssRule.cssText.includes(
            rule.split("{")[0].replace("\n", "").replace(/\s+/g, " ")
          )
        ) {
          index = i;
          return true;
        } else {
          return false;
        }
      })
        ? [...sheet.cssRules].find((i) =>
            i.cssText.includes(
              rule.split("{")[0].replace("\n", "").replace(/\s+/g, " ")
            )
          )
        : undefined;
      if (originalRule) {
        sheet.deleteRule(index);
      }
      sheet.insertRule(rule, sheet.cssRules.length);
    } else {
      let originalMediaRules = false;
      let rulesParsed = rule
        .replace(/{/g, "/")
        .replace(/}/g, "/")
        .split("/")
        .filter((r) => r !== "")
        .map((r) => {
          return r.replace(/\n/g, "").replace(/\s{2}/g, "");
        });
      let mediaRule = rulesParsed[0].includes("media") ? rulesParsed[0] : "";
      if (mediaRule !== "") {
        if (mediaRule.endsWith(" ")) {
          mediaRule = mediaRule.slice(0, -1);
        }
        rulesParsed.shift();
        [...sheet.cssRules].forEach((css) => {
          if (css.cssText.includes(mediaRule) && css.cssRules) {
            originalMediaRules = true;
            let i = 0;
            while (i <= rulesParsed.length) {
              let index = 0;
              let posibleRule = [...css.cssRules].some((cssRule, ix) => {
                if (cssRule.cssText.includes(rulesParsed[i])) {
                  index = ix;
                  return true;
                } else {
                  return false;
                }
              })
                ? [...css.cssRules].find((i) =>
                    i.cssText.includes(rulesParsed[i])
                  )
                : undefined;
              if (!!posibleRule) {
                css.deleteRule(index);
              }
              let newRule = `${rulesParsed[i]}{${rulesParsed[i + 1]}}`;
              css.insertRule(newRule, css.cssRules.length);
              i = i + 2;
            }
          }
        });
      }
      if (originalMediaRules === false) {
        sheet.insertRule(rule, sheet.cssRules.length);
      }
    }
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}
function HexToRGB(Hex) {
  let rgb = [];
  if (!Hex.includes("rgb") && !Hex.includes("rgba")) {
    let HexNoCat = Hex.replace("#", "");
    rgb =
      HexNoCat.length !== 3 && HexNoCat.length === 8
        ? [
            parseInt(HexNoCat.substr(0, 2), 16),
            parseInt(HexNoCat.substr(2, 2), 16),
            parseInt(HexNoCat.substr(4, 2), 16),
            parseInt(((HexNoCat.substr(6, 2), 16) / 255).toFixed(2)),
          ]
        : HexNoCat.length !== 3 && HexNoCat.length === 6
        ? [
            parseInt(HexNoCat.substr(0, 2), 16),
            parseInt(HexNoCat.substr(2, 2), 16),
            parseInt(HexNoCat.substr(4, 2), 16),
          ]
        : HexNoCat.length !== 3 && HexNoCat.length === 4
        ? [
            parseInt(HexNoCat.substr(0, 2), 16),
            parseInt(HexNoCat.substr(1, 2), 16),
            parseInt(HexNoCat.substr(2, 2), 16),
            parseInt(((HexNoCat.substr(3, 2), 16) / 255).toFixed(2)),
          ]
        : [
            parseInt(HexNoCat.substr(0, 1) + HexNoCat.substr(0, 1), 16),
            parseInt(HexNoCat.substr(1, 1) + HexNoCat.substr(1, 1), 16),
            parseInt(HexNoCat.substr(2, 1) + HexNoCat.substr(2, 1), 16),
          ];
  } else {
    rgb = Hex.split("(")[1].split(",")[4]
      ? [
          parseInt(Hex.split("(")[1].split(",")[0]),
          parseInt(Hex.split("(")[1].split(",")[1]),
          parseInt(Hex.split("(")[1].split(",")[2]),
          parseInt(Hex.split("(")[1].split(",")[3]),
        ]
      : [
          parseInt(Hex.split("(")[1].split(",")[0]),
          parseInt(Hex.split("(")[1].split(",")[1]),
          parseInt(Hex.split("(")[1].split(",")[2]),
        ];
  }
  return rgb;
}
function shadeTintColor(rgb, percent) {
  let R =
    rgb[0] === 0 && percent > 0
      ? 16
      : rgb[0] === 255 && percent < 0
      ? 239
      : rgb[0];
  let G =
    rgb[1] === 0 && percent > 0
      ? 16
      : rgb[1] === 255 && percent < 0
      ? 239
      : rgb[1];
  let B =
    rgb[2] === 0 && percent > 0
      ? 16
      : rgb[2] === 255 && percent < 0
      ? 239
      : rgb[2];
  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());
  R = R > 255 ? 255 : R < 0 ? 0 : R;
  G = G > 255 ? 255 : G < 0 ? 0 : G;
  B = B > 255 ? 255 : B < 0 ? 0 : B;
  let RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
  if (rgb[3]) {
    let A = rgb[3] ? (rgb[3] * 255).toString(16) : "FF";
    let AA = A.toString(16).length == 1 ? "0" + A.toString(16) : A.toString(16);
    return "#" + RR + GG + BB + AA;
  } else {
    return "#" + RR + GG + BB;
  }
}

async function cssValidToCamel(st) {
  return st.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
}

async function camelToCSSValid(st) {
  return st
    .replace(/[\w]([A-Z])/g, (m) => {
      return m[0] + "-" + m[1];
    })
    .toLowerCase();
}

function pushBPS(bps) {
  try {
    for (let nb of bps) {
      let bp = bps.find((b) => b.bp === nb.bp);
      if (bp) {
        bp.value = nb.value;
        bp.bef = "";
      } else {
        bps.push({ bp: nb.bp, value: nb.value, bef: "" });
      }
    }
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}
function pushColors(newColors) {
  try {
    Object.keys(newColors).forEach((key) => {
      colors[key] = newColors[key].replace(
        "!important" || "!default" || /\s+/g,
        ""
      );
    });
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

function getColors() {
  if (isDebug === true) {
    consoleLog("info", { colors: colors }, styleConsole);
  }
  return colors;
}

function getColorsNames() {
  const colorsNames = [];
  Object.keys(colors).forEach((key) => {
    colorsNames.push(key);
  });
  return colorsNames;
}

function getColorValue(color) {
  if (isDebug === true) {
    consoleLog(
      "info",
      { color: color, colorValue: colors[color] },
      styleConsole
    );
  }
  return colors[color];
}

function updateColor(color, value) {
  try {
    if (colors[color.toString()]) {
      colors[color] = value.replace("!important" || "!default" || /\s+/g, "");
      let classesToUpdate = [];
      for (let createdClass of alreadyCreatedClasses) {
        if (createdClass.includes(color)) {
          classesToUpdate.push(createdClass);
        }
      }
      if (classesToUpdate.length > 0) {
        doCssCreate(classesToUpdate);
      }
    } else {
      throw new Error(`There is no color named ${color}.`);
    }
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

function deleteColor(color) {
  try {
    if (colors.includes(color)) {
      delete colors[color];
    } else {
      throw new Error(`There is no color named ${color}.`);
    }
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

function clearAllColors() {
  colors = {};
  if (isDebug === true) {
    consoleLog("info", { colors: colors }, styleConsole);
  }
}

function getAlreadyCreatedClasses() {
  if (isDebug === true) {
    consoleLog(
      "info",
      { alreadyCreatedClasses: alreadyCreatedClasses },
      styleConsole
    );
  }
  return alreadyCreatedClasses;
}

function updateClasses(classesToUpdate) {
  doCssCreate(classesToUpdate);
}

function getSheet() {
  if (sheet) {
    if (isDebug === true) {
      consoleLog("info", { sheet: sheet }, styleConsole);
    }
    return sheet;
  } else {
    return "";
  }
}

function changeDebugOption() {
  isDebug = !isDebug;
}

function setTimeBetweenReCreate(time) {
  timeBetweenReCreate = time;
}

function getStackTrace() {
  let stack;
  try {
    throw new Error("");
  } catch (error) {
    stack = error.stack || "";
  }
  stack = stack.split("\n").map((line) => {
    return line.trim();
  });
  return stack.splice(stack[0] == "Error" ? 2 : 1);
}

function consoleLog(
  type = "log",
  thing,
  style = styleConsole,
  line = null,
  stoper = false
) {
  consoleParser({
    type: type,
    thing: thing,
    style: style,
    line: line,
    stoper: false,
  });
}

function consoleParser(config) {
  config.type = config.type ? config.type : "log";
  config.style = config.style ? config.style : styleConsole;
  config.stoper = config.stoper ? config.stoper : false;
  if (config.stoper === false) {
    if (config.line) {
      console.info("%cline: " + config.line + " = ", config.style);
    }
    console.info("%c" + getStackTrace()[1], config.style);
    console.groupCollapsed("Trace");
    console.trace();
    console.groupEnd();
    {
      switch (config.type) {
        case "log":
          console.log(
            "%c" +
              (typeof config.thing === "object"
                ? JSON.stringify(config.thing)
                : config.thing),
            config.style
          );
          break;
        case "info":
          console.info(
            "%c" +
              (typeof config.thing === "object"
                ? JSON.stringify(config.thing)
                : config.thing),
            config.style
          );
          break;
        case "error":
          console.error(
            "%c" +
              (typeof config.thing === "object"
                ? JSON.stringify(config.thing)
                : config.thing),
            config.style
          );
          break;
        default:
          break;
      }
    }
    if (typeof config.thing === "object") {
      console.dir(config.thing);
    }
  }
}
if (window) {
  window.onload = cssCreate();
}

if (typeof exports != "undefined") {
  exports.pushColors = exportPushColors((newcolors) => {
    pushColors(newcolors);
  });
  exports.createCSSRules = exportcreateCSSRules((rule) => {
    return createCSSRules(rule);
  });
  exports.HexToRGB = HexToRGB((Hex) => {
    return HexToRGB(Hex);
  });
  exports.shadeTintColor = exportShadeTintColor((rgb, percent) => {
    return shadeTintColor(rgb, percent);
  });
  exports.cssCreate = exportCSSCreate(() => {
    cssCreate();
  });
}
