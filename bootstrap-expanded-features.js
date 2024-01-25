let allColors = {
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
  /* basicColorsCSS */
  /* (\s)(#[0-9A-Fa-f]+)\s([0-9]*,?)*\n*\s*\n*\s* */ /* :$1'$2', */
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
let cssNamesParsed = {
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
  pos: "position",
  t: "top",
  bot: "bottom",
  b: "bottom",
  start: "left",
  s: "left",
  end: "right",
  e: "right",
  fs: "font-size",
  lh: "line-height",
  g: "gap",
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
  tsh: "text-shadow",
  ov: "overflow",
  ovx: "overflow-x",
  ovy: "overflow-y",
};
if (!colors) {
  var colors = {};
}
const abreviationsClasses = {};
const abreviationsValues = {};
const combos = {};
const combosCreated = {};
let alreadyCreatedClasses = [];
let sheet;
let isDebug = false;
const bps = [
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
let separator = "þµÞ";
/* Console */
let styleConsole = `padding: 0.25rem 0.125rem; background-color: ${colors["mystic"]}; color: ${colors["friend"]};`;
/* Pseudos */
const pseudoClasses = [
  "Active",
  "AnyLink",
  "Autofill",
  "Blank",
  "Checked",
  "Current",
  "Default",
  "Defined",
  "Dir",
  "Disabled",
  "Empty",
  "Enabled",
  "First",
  "FirstChild",
  "FirstOfType",
  "Focus",
  "FocusVisible",
  "FocusWithin",
  "Fullscreen",
  "Future",
  "Has",
  "Host",
  "Hover",
  "InRange",
  "Indeterminate",
  "Invalid",
  "Is",
  "Lang",
  "LastChild",
  "LastOfType",
  "Left",
  "Link",
  "LocalLink",
  "Modal",
  "Muted",
  "Not",
  "NthChild",
  "NthLastChild",
  "NthLastOfType",
  "NthOfType",
  "OnlyChild",
  "OnlyOfType",
  "Optional",
  "OutOfRange",
  "Past",
  "Paused",
  "PictureInPicture",
  "PlaceHolderShown",
  "Playing",
  "PopoverOpen",
  "ReadOnly",
  "ReadWrite",
  "Required",
  "Right",
  "Root",
  "Scope",
  "Seeking",
  "Stalled",
  "Target",
  "TargetWithin",
  "UserInvalid",
  "UserValid",
  "Valid",
  "Visited",
  "VolumeLocked",
  "Where",
];
const pseudosHasSDED = [
  "Dir",
  "Not",
  "Lang",
  "Has",
  "Host",
  "Is",
  "NthChild",
  "NthLastChild",
  "NthLastOfType",
  "NthOfType",
  "Part",
  "Slotted",
  "Where",
];
const pseudoElements = [
  "After",
  "Backdrop",
  "Before",
  "Cue",
  "CueRegion",
  "FileSelectorButton",
  "FirstLetter",
  "FirstLine",
  "GrammarError",
  "Highlight",
  "Marker",
  "Part",
  "Placeholder",
  "Selection",
  "Slotted",
  "SpellingError",
  "TargetText",
  "ViewTransition",
  "ViewTransitionGroup",
  "ViewTransitionImagePair",
  "ViewTransitionNew",
  "ViewTransitionOld",
];
const pseudos = pseudoClasses
  .sort((e1, e2) => {
    e1 = e1.toString().length;
    e2 = e2.toString().length;
    return e1 > e2 ? 1 : e1 < e2 ? -1 : 0;
  })
  .map((pse) => {
    return {
      mask: pse,
      real: `${separator}:${camelToCSSValid(pse)}`,
    };
  })
  .concat(
    pseudoElements
      .sort((e1, e2) => {
        e1 = e1.toString().length;
        e2 = e2.toString().length;
        return e1 > e2 ? 1 : e1 < e2 ? -1 : 0;
      })
      .map((pse) => {
        return {
          mask: pse,
          real: `${separator}::${camelToCSSValid(pse)}`,
        };
      })
  );
let importantActive = true;
/* Time Management*/
let lastCSSCreate = Date.now();
let lastTimeAsked2Create = new Date().getTime();
let timesCSSCreated = 0;
let timeBetweenReCreate = 400;
let useTimer = true;
checkSheet();
function checkSheet() {
  let sheets = [...document.styleSheets];
  for (let nsheet of sheets) {
    if (nsheet.href?.includes("bef-styles")) {
      sheet = nsheet;
    }
  }
}
pushColors(allColors);
function cssCreate(updateBefs = null, primordial = false) {
  if (!!useTimer) {
    DoUseTimer(updateBefs, primordial);
  } else {
    checkSheet();
    doCssCreate(updateBefs);
  }
}
function DoUseTimer(updateBefs = null, primordial = false) {
  lastTimeAsked2Create = Date.now();
  ta(updateBefs, primordial);
}
function ta(updateBefs = null, primordial = false) {
  if (
    Date.now() - lastCSSCreate >= timeBetweenReCreate ||
    primordial === true ||
    timesCSSCreated === 0
  ) {
    timesCSSCreated++;
    doCssCreate(updateBefs);
    lastCSSCreate = Date.now();
    consoleParser({
      thing: {
        timesCSSCreated: timesCSSCreated,
      },
    });
  } else {
    if (Date.now() - timeBetweenReCreate < lastTimeAsked2Create) {
      tas(updateBefs, primordial);
    }
  }
}
function tas(updateBefs = null, primordial = false) {
  setTimeout(() => {
    ta(updateBefs, primordial);
  }, timeBetweenReCreate);
}
async function doCssCreate(updateBefs = null) {
  try {
    if (!this.sheet) {
      this.checkSheet();
      if (!this.sheet) {
        throw new Error("There is no bef-styles style sheet!");
      }
    }
    const startTimeCSSCreate = performance.now();
    let befs = [];
    if (!updateBefs) {
      let befElements = document.getElementsByClassName("bef");
      for (let befElement of befElements) {
        befElement.classList.forEach((item) => {
          let comb = Object.keys(this.combos).find((cs) => {
            return item.includes(cs);
          });
          if (!!comb) {
            if (this.combos[comb]) {
              let vals = !!item.includes("VALS")
                ? item.split("VALS")[1].split("VL")
                : [];
              this.combos[comb].forEach((c) => {
                let reg = new RegExp(/VAL[0-9]+(DEF[.]*DEF)?/, "g");
                if (reg.test(c)) {
                  let matches = c.match(reg);
                  this.consoleLog(
                    "info",
                    { matches: matches },
                    this.styleConsole
                  );
                  if (!!matches) {
                    for (let match of matches) {
                      let val = parseInt(match.split("VAL")[1].split("DEF")[0]);
                      this.consoleLog("info", { val: val }, this.styleConsole);
                      this.consoleLog(
                        "info",
                        { match: match },
                        this.styleConsole
                      );
                      let pattern = `VAL${val}(DEF[.]*DEF)?`;
                      let nreg = new RegExp(pattern, "g");
                      this.consoleLog(
                        "info",
                        { nreg: nreg },
                        this.styleConsole
                      );
                      let def = match.split("DEF")[1];
                      if (
                        !!vals[val] &&
                        vals[val] !== "" &&
                        vals[val] !== "undefined" &&
                        vals[val] !== "DEF" &&
                        vals[val] !== "null"
                      ) {
                        this.consoleLog(
                          "info",
                          { vals_val: vals[val] },
                          this.styleConsole
                        );
                        if (/VAL[0-9]+/.test(vals[val])) {
                          let valval = vals[val].replace("VAL", "");
                          this.consoleLog(
                            "info",
                            { valval: valval },
                            this.styleConsole
                          );
                          c = c.replace(
                            nreg,
                            vals[parseInt(valval)]
                              ? vals[parseInt(valval)]
                              : def
                              ? def
                              : ""
                          );
                        } else {
                          c = c.replace(nreg, vals[val]);
                          this.consoleLog("info", { c: c }, this.styleConsole);
                        }
                      } else {
                        this.consoleLog(
                          "info",
                          { def: def },
                          this.styleConsole
                        );
                        c = c.replace(nreg, def ? def : "");
                      }
                    }
                  }
                }
                if (c.startsWith("bef")) {
                  let combosCreatedABBR = Object.keys(this.combosCreated);
                  this.consoleLog(
                    "info",
                    { combosCreatedABBR: combosCreatedABBR },
                    this.styleConsole
                  );
                  let alreadyABBRCombo = combosCreatedABBR.find((cs) => {
                    return this.combosCreated[cs] === item;
                  });
                  this.consoleLog(
                    "info",
                    { alreadyABBRCombo: alreadyABBRCombo },
                    this.styleConsole
                  );
                  let combosCreatedLenght = combosCreatedABBR.length;
                  if (!alreadyABBRCombo) {
                    this.combosCreated["■■■" + combosCreatedLenght] = item;
                    this.consoleLog(
                      "info",
                      {
                        cStartsWithBef:
                          this.combosCreated["■■■" + combosCreatedLenght],
                      },
                      this.styleConsole
                    );
                  }
                  this.consoleLog(
                    "info",
                    { combosCreatedABBR: combosCreatedABBR },
                    this.styleConsole
                  );
                  let comboABBR =
                    "■■■" +
                    (combosCreatedLenght !== 0 ? combosCreatedLenght - 1 : 0);
                  this.consoleLog(
                    "info",
                    { comboABBR: comboABBR },
                    this.styleConsole
                  );
                  this.consoleLog("info", { c: c }, this.styleConsole);
                  let pseudos = this.pseudos.filter((p) =>
                    c.split("-")[1].includes(p.mask)
                  );
                  let firstPseudo =
                    pseudos.sort((p1, p2) => {
                      return c.indexOf(p1.mask) - c.indexOf(p2.mask);
                    })[0] || -1;

                  switch (true) {
                    case pseudos.length > 0 &&
                      !!(
                        !c.includes("SEL") ||
                        c.indexOf("SEL") > c.indexOf(firstPseudo.mask)
                      ):
                      this.consoleLog(
                        "info",
                        { firstPseudo: firstPseudo },
                        this.styleConsole
                      );
                      c = c
                        .replace("SEL", "")
                        .replace(
                          firstPseudo.mask,
                          "SEL__COM_" + comboABBR + firstPseudo.mask
                        );
                      this.consoleLog(
                        "info",
                        { cIncludesPseudoAfter: c },
                        this.styleConsole
                      );
                      break;
                    case !!c.includes("SEL"):
                      c = c.replace("SEL", "SEL__COM_" + comboABBR + "__");
                      this.consoleLog(
                        "info",
                        { cIncludesSELAfter: c },
                        this.styleConsole
                      );
                      break;
                    default:
                      this.consoleLog(
                        "info",
                        { cDoesntIncludesSEL: c },
                        this.styleConsole
                      );
                      c = c.replace(
                        c.split("-")[1],
                        c.split("-")[1] + "SEL__COM_" + comboABBR
                      );
                      this.consoleLog(
                        "info",
                        { cDoesntIncludesSELAfter: c },
                        this.styleConsole
                      );
                      break;
                  }
                  /* if (!!c.includes('SEL')) {
                      if (
                        pseudos.length > 0 &&
                        !!(c.indexOf('SEL') > c.indexOf(firstPseudo.mask))
                      ) {
                        c = c
                          .replace('SEL', '')
                          .replace(
                            firstPseudo.mask,
                            'SEL__COM_' + comboABBR + firstPseudo.mask
                          );
                      } else {
                        c = c.replace('SEL', 'SEL__COM_' + comboABBR + '__');
                      }
                    } else {
                      if (pseudos.length > 0) {
                        let firstPseudo = pseudos.sort((p1, p2) => {
                          return c.indexOf(p1.mask) - c.indexOf(p2.mask);
                        })[0];
                        c = c.replace(
                          firstPseudo.mask,
                          'SEL__COM_' + comboABBR + firstPseudo.mask
                        );
                      } else {
                        c = c.replace(
                          c.split('-')[1],
                          c.split('-')[1] + 'SEL__COM_' + comboABBR
                        );
                      }
                    } */
                } else {
                  this.consoleLog(
                    "info",
                    { cDoesntStartsWithBef: c },
                    this.styleConsole
                  );
                  befElement.classList.add(c);
                }
                if (!befs.includes(c)) {
                  befs.push(c);
                }
              });
            }
          } else if (
            !befs.includes(item) &&
            item !== "bef" &&
            (item.includes("bef") ||
              Object.keys(this.abreviationsClasses).find((aC) =>
                item.includes(aC)
              ))
          ) {
            befs.push(item);
          }
        });
      }
    } else {
      befs = updateBefs;
    }
    this.consoleLog("info", { befs: befs }, this.styleConsole);
    let befsStringed = "";
    let bpsStringed = this.bps.map((b) => b);
    for (let bef of befs) {
      if (!updateBefs) {
        if (
          this.alreadyCreatedClasses.find((aC) => {
            return aC === bef;
          })
        ) {
          continue;
        }
        if (
          [...this.sheet.cssRules].find((i) =>
            i.cssText.split(" ").find((aC) => {
              return aC.replace(".", "") === bef;
            })
          )
        ) {
          continue;
        }
      }
      if (
        !this.alreadyCreatedClasses.find((aC) => {
          return aC === bef;
        })
      ) {
        this.alreadyCreatedClasses.push(bef);
      }
      let befStringed = "." + bef;
      if (!bef.includes("bef")) {
        let abbrClss = Object.keys(this.abreviationsClasses).find((aC) =>
          bef.includes(aC)
        );
        if (!!abbrClss) {
          bef = bef.replace(abbrClss, this.abreviationsClasses[abbrClss]);
        }
      }
      let befSplited = bef.split("-");
      /* if (befSplited[1].includes('SLASH')) {
          debugger;
        } */
      if (befSplited[1].includes("boxCustom")) {
        this.consoleLog(
          "info",
          { befSplited1: befSplited[1] },
          this.styleConsole
        );
      }
      let befSRP = this.removePseudos(befSplited[1])
        .replace(/SEL/g, this.separator)
        .split(`${this.separator}`);
      if (befSplited[1].includes("boxCustom")) {
        this.consoleLog("info", { befSRP: befSRP }, this.styleConsole);
      }
      let selector = befSRP[0];
      let specify = this.unbefysize(
        befSRP
          .map((bs, i) => {
            if (i !== 0) {
              return bs;
            } else {
              return "";
            }
          })
          .join("")
      );
      if (!!specify) {
        let alreadyABBRCombo = Object.keys(this.combosCreated).find((cs) =>
          specify.includes(cs)
        );
        if (!!alreadyABBRCombo) {
          this.consoleLog(
            "info",
            { OPalreadyABBRCombo: alreadyABBRCombo },
            this.styleConsole
          );
          specify = specify.replace(
            alreadyABBRCombo,
            this.combosCreated[alreadyABBRCombo]
          );
          bef = bef.replace(
            alreadyABBRCombo,
            this.combosCreated[alreadyABBRCombo]
          );
        }
      }
      let hasBP = false;
      let value = "";
      let secondValue = "";
      if (this.bps.find((b) => befSplited[2] === b.bp)) {
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
      value = this.unbefysize(
        !!this.abreviationsValues[value]
          ? this.abreviationsValues[value]
          : value
      );
      secondValue = this.unbefysize(
        !!this.abreviationsValues[secondValue]
          ? this.abreviationsValues[secondValue]
          : secondValue
      );
      let values = {
        value: value,
        secondValue: secondValue,
      };
      if (!selector.includes("content")) {
        Object.keys(values).forEach((v) => {
          let hasOPA = values[v].includes("OPA");
          if (!!hasOPA) {
            const reg = new RegExp(
              /(?:([A-z0-9#]*)|(?:(rgb)|(hsl)|(hwb))a?\([0-9\.\,\s%]*\))\s?OPA\s?0\.[0-9]*/gi
            );
            const OPAS = values[v].match(reg);
            for (let OPA of OPAS) {
              const color = OPA.split("OPA")[0];
              const OPAValue = OPA.split("OPA")[1];
              let realColor = `${this.colorToRGB(
                !!this.colors[color.toString().replace(/\s/g, "")]
                  ? this.colors[color.toString().replace(/\s/g, "")]
                  : color
              ).toString()}`;
              values[v] = !!OPAValue
                ? values[v]
                    .replace(color, `rgba(${realColor},${OPAValue})`)
                    .replace("OPA" + OPAValue, "")
                : values[v];
            }
          }
          let colors = Object.keys(this.colors)
            .sort((c1, c2) => {
              return c2.length - c1.length;
            })
            .map((c) => `(${c})`)
            .join("|");
          let reg = new RegExp("(?:" + colors + ")", "gi");
          let matches = values[v].match(reg);
          if (!!matches) {
            for (let match of matches) {
              let realColor = this.colors[match.replace(/\s/g, "")];
              if (realColor) {
                values[v] = values[v].replace(
                  match,
                  `rgba(${this.colorToRGB(realColor)})`
                );
              }
            }
          }
        });
      }
      value = values.value;
      secondValue = values.secondValue;
      this.consoleLog(
        "info",
        { value: value, secondValue: secondValue },
        this.styleConsole
      );
      /* MatchForColors */
      /* MatchForColorsEnd */
      switch (true) {
        case !!this.cssNamesParsed[selector.toString()]:
          if (typeof this.cssNamesParsed[selector.toString()] === "string") {
            befStringed += `${specify}{${
              this.cssNamesParsed[selector.toString()]
            }:${value};}`;
          } else {
            befStringed += `${specify}{${
              this.cssNamesParsed[selector.toString()][0]
            }:${value};${
              this.cssNamesParsed[selector.toString()][1]
            }:${value};}`;
          }
          break;
        case befSplited[1].startsWith("link"):
          befStringed += ` a${specify}{color:${value};}`;
          break;
        case befSplited[1] === "btn":
          befStringed += `{
                    background-color:${value};
                    border-color:${value};}
                  ${
                    this.separator
                  }.${bef}:hover{background-color:rgba(${this.shadeTintColor(
            this.colorToRGB(value),
            -15
          ).toString()});border-color:rgba(${this.shadeTintColor(
            this.colorToRGB(value),
            -20
          ).toString()});}
                  ${
                    this.separator
                  }.btn-check:focus + .${bef}, .${bef}:focus{background-color:rgba(${this.shadeTintColor(
            this.colorToRGB(value),
            -15
          ).toString()});border-color:rgba(${this.shadeTintColor(
            this.colorToRGB(value),
            -20
          ).toString()});}
                  ${
                    this.separator
                  }.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{background-color:${this.shadeTintColor(
            this.colorToRGB(value),
            -20
          )};border-color:rgba(${this.shadeTintColor(
            this.colorToRGB(value),
            -25
          ).toString()});box-shadow: 0 0 0 0.25rem
                  rgba(${this.shadeTintColor(
                    this.colorToRGB(value),
                    3
                  ).toString()}, 0.5)
                  ;}
                  ${
                    this.separator
                  }.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{box-shadow: 0 0 0 0.25rem
                    rgba(${this.shadeTintColor(
                      this.colorToRGB(value),
                      3
                    ).toString()}, 0.5)
                  ;}`;
          break;
        case befSplited[1] === "btnOutline":
          befStringed += `{
                    color:${value};
                    background-color:${secondValue ? secondValue : "default"};
                      border-color:${value};}
                    ${this.separator}.${bef}:hover{
                      background-color:${value};
                      color:${secondValue ? secondValue : "default"};
                      border-color:rgba(${this.shadeTintColor(
                        this.colorToRGB(value),
                        -20
                      ).toString()});}
                    ${this.separator}.btn-check:focus + .${bef}, .${bef}:focus{
                      border-color:rgba(${this.shadeTintColor(
                        this.colorToRGB(value),
                        -20
                      ).toString()});}
                    ${
                      this.separator
                    }.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{
                      border-color:rgba(${this.shadeTintColor(
                        this.colorToRGB(value),
                        -25
                      ).toString()});
                    box-shadow: 0 0 0 0.25rem
                    rgba(${this.shadeTintColor(
                      this.colorToRGB(value),
                      3
                    ).toString()}, 0.5)
                    ;}
                    ${
                      this.separator
                    }.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{
                      box-shadow: 0 0 0 0.25rem
                      rgba(${this.shadeTintColor(
                        this.colorToRGB(value),
                        3
                      ).toString()}, 0.5)
                    ;}`;
          break;
        default:
          befStringed += `${specify}{${this.camelToCSSValid(
            selector
          )}:${value};}`;
          break;
      }
      if (!!this.importantActive) {
        for (let cssProperty of befStringed.split(";")) {
          if (!cssProperty.includes("!important") && cssProperty.length > 5) {
            befStringed = befStringed.replace(
              cssProperty,
              cssProperty + " !important"
            );
          }
        }
      }
      if (befStringed.includes("{") && befStringed.includes("}")) {
        if (hasBP === true) {
          befStringed = befStringed.replace(
            new RegExp(this.separator, "g"),
            ""
          );
          bpsStringed = bpsStringed.map((b) => {
            if (befSplited[2] === b.bp) {
              b.bef += befStringed;
            }
            return b;
          });
        } else {
          befsStringed += befStringed + this.separator;
        }
      }
    }
    if (befsStringed !== "") {
      this.consoleLog(
        "info",
        { befsStringed: befsStringed },
        this.styleConsole
      );
      for (let bef of befsStringed.split(this.separator)) {
        if (bef !== "") {
          this.createCSSRules(bef);
        }
      }
    }
    bpsStringed = bpsStringed
      .sort((b1, b2) => {
        return (
          parseInt(b1.value.replace("px", "")) -
          parseInt(b2.value.replace("px", ""))
        );
      })
      .reverse();
    bpsStringed.forEach((b, i) => {
      if (b.bef !== "") {
        this.consoleLog(
          "info",
          { bp: b.bp, value: b.value, bef: b.bef },
          this.styleConsole
        );
        this.createCSSRules(
          `@media only screen and (min-width: ${b.value}) { html body ${b.bef}}`
        );
        /* 
          ${
            bpsStringed.length > 1 && i !== 0
              ? `and (max-width: ${bpsStringed[i - 1].value})`
              : ""
          }
        */
        this.createCSSRules(
          `@media only screen and (min-width: ${b.value}) ${
            bpsStringed.length > 1 && i !== 0
              ? `and (max-width: ${bpsStringed[i - 1].value})`
              : ""
          } { #bef-bp ${b.bef}}`
        );
        b.bef = "";
      }
    });
    const endTimeCSSCreate = performance.now();
    this.consoleLog(
      "info",
      `Call to cssCreate() took ${
        endTimeCSSCreate - startTimeCSSCreate
      } milliseconds`,
      this.styleConsole
    );
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
    this.consoleLog("error", { err: err }, this.styleConsole);
  }
}
function createCSSRules(rule) {
  try {
    consoleLog(
      "info",
      {
        rule: rule,
      },
      styleConsole
    );
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
        ? [...sheet.cssRules].find(
            (i) =>
              i.cssText
                /* .includes(
                        rule.split('{')[0].replace('\n', '').replace(/\s+/g, ' ')
                      ) */
                .split(" ")
                .find((aC) => {
                  return (
                    aC.replace(".", "") ===
                    rule.split("{")[0].replace("\n", "").replace(/\s+/g, " ")
                  );
                })
            /*
                    i.cssText.split(' ').find((aC) => {
                        return aC.replace('.', '') === bef;
                      })
                    */
          )
        : undefined;
      if (originalRule) {
        sheet.deleteRule(index);
      }
      consoleLog(
        "info",
        {
          rule: rule,
        },
        styleConsole
      );
      sheet.insertRule(rule, sheet.cssRules.length);
    } else {
      let originalMediaRules = false;
      let rulesParsed = rule
        .replace(/{/g, separator)
        .replace(/}/g, separator)
        .split(separator)
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
                    i.cssText.split(" ").find((aC) => {
                      return aC.replace(".", "") === rulesParsed[i];
                    })
                  )
                : /* .includes(rulesParsed[i])) */
                  /*
            i.cssText.split(' ').find((aC) => {
                return aC.replace('.', '') === bef;
              })
            */
                  undefined;
              if (!!posibleRule) {
                css.deleteRule(index);
              }
              let newRule = `${rulesParsed[i]}{${rulesParsed[i + 1]}}`;
              consoleLog(
                "info",
                {
                  newRule: newRule,
                },
                styleConsole
              );
              css.insertRule(newRule, css.cssRules.length);
              i = i + 2;
            }
          }
        });
      }
      if (originalMediaRules === false) {
        consoleLog(
          "info",
          {
            rule: rule,
          },
          styleConsole
        );
        sheet.insertRule(rule, sheet.cssRules.length);
      }
    }
    consoleLog(
      "info",
      {
        sheet: sheet,
      },
      styleConsole
    );
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function colorToRGB(color) {
  try {
    let rgb = [];
    color = color.toLowerCase();
    switch (true) {
      case !!this.colors[color]:
        rgb = this.colorToRGB(this.colors[color]);
        break;
      case color.includes("rgb") || color.includes("rgba"):
        rgb = this.parseRGB(color);
        break;
      case color.includes("#"):
        rgb = this.parseRGB(this.HexToRGB(color));
        break;
      case color.includes("hsl"):
        rgb = this.parseRGB(this.HSLToRGB(color));
        break;
      case color.includes("hwb"):
        rgb = this.parseRGB(this.HWBToRGB(color));
        break;
      default:
        rgb = [255, 0, 0];
        break;
    }
    return rgb;
  } catch (error) {
    this.consoleLog("error", { error: error }, this.styleConsole);
    return [255, 0, 0];
  }
}
function RGBToRGBA(rgb, alpha) {
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
}
function parseRGB(rgba) {
  let rgb = [];
  if (rgba.includes("rgb") || rgba.includes("rgba")) {
    rgb = rgba.split("(")[1].split(",")[4]
      ? [
          parseInt(rgba.split("(")[1].split(",")[0]),
          parseInt(rgba.split("(")[1].split(",")[1]),
          parseInt(rgba.split("(")[1].split(",")[2]),
          parseInt(rgba.split("(")[1].split(",")[3]),
        ]
      : [
          parseInt(rgba.split("(")[1].split(",")[0]),
          parseInt(rgba.split("(")[1].split(",")[1]),
          parseInt(rgba.split("(")[1].split(",")[2]),
        ];
  }
  return rgb;
}
function HexToRGB(Hex) {
  let rgb = [];
  const hexCode = Hex.replace("#", "");
  const hexCodeLength = hexCode.length;
  if (hexCodeLength === 3) {
    rgb.push(
      parseInt(hexCode.charAt(0) + hexCode.charAt(0), 16),
      parseInt(hexCode.charAt(1) + hexCode.charAt(1), 16),
      parseInt(hexCode.charAt(2) + hexCode.charAt(2), 16)
    );
  } else if (hexCodeLength === 4) {
    rgb.push(
      parseInt(hexCode.charAt(0) + hexCode.charAt(0), 16),
      parseInt(hexCode.charAt(1) + hexCode.charAt(1), 16),
      parseInt(hexCode.charAt(2) + hexCode.charAt(2), 16),
      parseInt(hexCode.charAt(3) + hexCode.charAt(3), 16)
    );
  } else if (hexCodeLength === 6) {
    rgb.push(
      parseInt(hexCode.charAt(0) + hexCode.charAt(1), 16),
      parseInt(hexCode.charAt(2) + hexCode.charAt(3), 16),
      parseInt(hexCode.charAt(4) + hexCode.charAt(5), 16)
    );
  } else if (hexCodeLength === 8) {
    rgb.push(
      parseInt(hexCode.charAt(0) + hexCode.charAt(1), 16),
      parseInt(hexCode.charAt(2) + hexCode.charAt(3), 16),
      parseInt(hexCode.charAt(4) + hexCode.charAt(5), 16),
      parseInt(hexCode.charAt(6) + hexCode.charAt(7), 16)
    );
  } else {
    this.consoleLog(
      "error",
      { hexToRGBError: "Invalid hex code" },
      this.styleConsole
    );
  }
  return `rgb${![3, 6].includes(hexCodeLength) ? "a" : ""}(${rgb.join(",")})`;
}
function HSLToRGB(HSL) {
  /* Convert hsl to rgb please */
  if (!["hsl", "hsla"].includes(HSL)) {
    return "rgb(255,0,0,1)";
  }
  /* Separate string by comas and eliminate rgb or rgba */
  const rgbSplited = HSL.split("(")[1]
    .split(")")[0]
    .split(",")
    .filter((r) => r !== "hsl" && r !== "hsla");

  const hDecimal = parseInt(rgbSplited[0]) / 100;
  const sDecimal = parseInt(rgbSplited[1]) / 100;
  const lDecimal = parseInt(rgbSplited[2]) / 100;

  if (parseInt(rgbSplited[1]) === 0) {
    return `rgb(${lDecimal},${lDecimal},${lDecimal})`;
  }
  let q =
    lDecimal < 0.5
      ? lDecimal * (1 + sDecimal)
      : lDecimal + sDecimal - lDecimal * sDecimal;
  let p = 2 * lDecimal - q;
  const r = this.HueToRGB(p, q, hDecimal + 1 / 3);
  const g = this.HueToRGB(p, q, hDecimal);
  const b = this.HueToRGB(p, q, hDecimal - 1 / 3);
  return `rgb${
    rgbSplited[3] && rgbSplited[3] !== "" ? "a" : ""
  }(${r},${g},${b}${
    rgbSplited[3] && rgbSplited[3] !== "" ? `,${rgbSplited[3]}` : ""
  })`;
}
function HueToRGB(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function HWBToRGB(HWB) {
  const rgbSplited = HWB.split("(")[1]
    .split(")")[0]
    .split(",")
    .filter((r) => r !== "hsl" && r !== "hsla");
  let h = parseInt(rgbSplited[0]) / 360;
  let wh = parseInt(rgbSplited[1]) / 100;
  let bl = parseInt(rgbSplited[2]) / 100;
  let ratio = wh + bl;
  let i;
  let v;
  let f;
  let n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;

  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }

  n = wh + f * (v - wh); // linear interpolation

  let r;
  let g;
  let b;
  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;
    case 1:
      r = n;
      g = v;
      b = wh;
      break;
    case 2:
      r = wh;
      g = v;
      b = n;
      break;
    case 3:
      r = wh;
      g = n;
      b = v;
      break;
    case 4:
      r = n;
      g = wh;
      b = v;
      break;
    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }

  return `rgb${rgbSplited[3] && rgbSplited[3] !== "" ? "a" : ""}(${Math.round(
    r * 255
  )},${Math.round(g * 255)},${Math.round(b * 255)}${
    rgbSplited[3] && rgbSplited[3] !== "" ? `,${rgbSplited[3]}` : ""
  })`;
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
  /* let RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
    let GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
    let BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16); */
  if (rgb[3]) {
    let A = rgb[3] ? (rgb[3] * 255).toString(16) : "FF";
    /* let AA =
        A.toString(16).length == 1 ? '0' + A.toString(16) : A.toString(16); */
    return [R, G, B, A];
  } else {
    return [R, G, B, 1];
  }
}
function removePseudos(thing, remove = false) {
  let pseudoFiltereds = pseudos.filter((pseudo) => {
    return thing.includes(pseudo.mask);
  });
  pseudoFiltereds.forEach((pse) => {
    let regMask = new RegExp(":*" + pse.mask, "gi");
    switch (true) {
      case this.pseudosHasSDED.includes(pse.mask):
        regMask = new RegExp(":*" + pse.mask + "(", "gi");
        break;
      case ["Right", "Left"].includes(pse.mask):
        regMask = new RegExp("page" + pse.mask, "gi");
        break;
      default:
        break;
    }
    thing = thing
      .replace("SD", "(")
      .replace("ED", ")")
      .replace(
        regMask,
        !remove
          ? this.pseudosHasSDED.includes(pse.mask)
            ? pse.real + "("
            : ["Right", "Left"].includes(pse.mask)
            ? "page" + pse.real
            : pse.real
          : ""
      );
  });
  return thing;
}
function cssValidToCamel(st) {
  return st.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
}
function camelToCSSValid(st) {
  return st
    .replace(/[\w]([A-Z])/g, (m) => {
      return m[0] + "-" + m[1];
    })
    .toLowerCase();
}
/* CRUD */
function pushCssNamesParsed(cssNamesParsed) {
  try {
    Object.keys(cssNamesParsed).forEach((key) => {
      cssNamesParsed[key] = cssNamesParsed[key];
    });
    cssCreate();
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function pushBPS(bps) {
  try {
    for (let nb of bps) {
      let bp = bps.find((b) => b.bp === nb.bp);
      if (bp) {
        bp.value = nb.value;
        bp.bef = "";
      } else {
        bps.push({
          bp: nb.bp,
          value: nb.value,
          bef: "",
        });
      }
    }
    cssCreate();
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
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
    cssCreate();
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function pushAbreviationsValues(abreviationsValues) {
  try {
    let prevIgnoredAbreviationsValues = [];
    Object.keys(abreviationsValues).forEach((key) => {
      abreviationsValues[key] = abreviationsValues[key];
      prevIgnoredAbreviationsValues = alreadyCreatedClasses.filter((aC) => {
        return aC.includes(key);
      });
    });
    if (prevIgnoredAbreviationsValues.length > 0) {
      cssCreate(prevIgnoredAbreviationsValues);
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function pushAbreviationsClasses(abreviationsClasses) {
  let prevIgnoredAbreviationsValues = [];
  try {
    Object.keys(abreviationsClasses).forEach((key) => {
      abreviationsClasses[key] = abreviationsClasses[key];
      prevIgnoredAbreviationsValues = alreadyCreatedClasses.filter((aC) => {
        return aC.includes(key);
      });
    });
    if (prevIgnoredAbreviationsValues.length > 0) {
      cssCreate(prevIgnoredAbreviationsValues);
    } else {
      cssCreate();
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function pushCombos(combos) {
  try {
    let prevIgnoredCombosValues = [];
    Object.keys(combos).forEach((key) => {
      combos[key] =
        typeof combos[key] === "string"
          ? combos[key].split(" ")
          : combos[key]
              .map((c) => {
                return c.split(" ").flat();
              })
              .flat();
      prevIgnoredCombosValues = alreadyCreatedClasses.filter((aC) => {
        return aC.includes(key);
      });
    });
    if (prevIgnoredCombosValues.length > 0) {
      cssCreate(prevIgnoredCombosValues);
    } else {
      cssCreate();
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function getColors() {
  consoleLog(
    "info",
    {
      colors: colors,
    },
    styleConsole
  );
  return colors;
}
function getBPS() {
  consoleLog(
    "info",
    {
      bps: bps,
    },
    styleConsole
  );
  return bps;
}
function getAbreviationsClasses() {
  consoleLog(
    "info",
    {
      abreviationsClasses: abreviationsClasses,
    },
    styleConsole
  );
  return abreviationsClasses;
}
function getAbreviationsValues() {
  consoleLog(
    "info",
    {
      abreviationsValues: abreviationsValues,
    },
    styleConsole
  );
  return abreviationsValues;
}
function getCombos() {
  consoleLog(
    "info",
    {
      combos: combos,
    },
    styleConsole
  );
  return combos;
}
function getCssNamesParsed() {
  consoleLog(
    "info",
    {
      cssNamesParsed: cssNamesParsed,
    },
    styleConsole
  );
  return cssNamesParsed;
}
function getColorsNames() {
  const colorsNames = [];
  Object.keys(colors).forEach((key) => {
    colorsNames.push(key);
  });
  return colorsNames;
}
function getColorValue(color) {
  consoleLog(
    "info",
    {
      color: color,
      colorValue: colors[color],
    },
    styleConsole
  );
  return colors[color];
}
function getAlreadyCreatedClasses() {
  consoleLog(
    "info",
    {
      alreadyCreatedClasses: alreadyCreatedClasses,
    },
    styleConsole
  );
  return alreadyCreatedClasses;
}
function getSheet() {
  if (sheet) {
    consoleLog(
      "info",
      {
        sheet: sheet,
      },
      styleConsole
    );
    return sheet;
  } else {
    return "";
  }
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
        cssCreate(classesToUpdate);
      }
    } else {
      throw new Error(`There is no color named ${color}.`);
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function updateAbreviationsClass(abreviationsClass, value) {
  try {
    if (abreviationsClasses[abreviationsClass.toString()]) {
      abreviationsClasses[abreviationsClass] = value;
      let classesToUpdate = [];
      for (let createdClass of alreadyCreatedClasses) {
        if (createdClass.includes(abreviationsClass)) {
          classesToUpdate.push(createdClass);
        }
      }
      if (classesToUpdate.length > 0) {
        cssCreate(classesToUpdate);
      }
    } else {
      throw new Error(
        `There is no abreviationsClass named ${abreviationsClass}.`
      );
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function updateAbreviationsValue(abreviationsValue, value) {
  try {
    if (abreviationsValues[abreviationsValue.toString()]) {
      abreviationsValues[abreviationsValue] = value;
      let classesToUpdate = [];
      for (let createdClass of alreadyCreatedClasses) {
        if (createdClass.includes(abreviationsValue)) {
          classesToUpdate.push(createdClass);
        }
      }
      if (classesToUpdate.length > 0) {
        cssCreate(classesToUpdate);
      }
    } else {
      throw new Error(
        `There is no abreviationsValue named ${abreviationsValue}.`
      );
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function updateCombo(combo, values) {
  try {
    if (combos[combo.toString()]) {
      combos[combo] = values;
      let classes2Delete = [];
      for (let createdClass of alreadyCreatedClasses) {
        if (createdClass.includes(combo)) {
          classes2Delete.push(createdClass);
        }
      }
      if (classes2Delete.length > 0) {
        for (let class2Delete of classes2Delete) {
          sheet.deleteRule(
            [...sheet.cssRules].findIndex((cssRule) => {
              return cssRule.cssText.includes(class2Delete);
            })
          );
          alreadyCreatedClasses = alreadyCreatedClasses.filter((aC) => {
            return aC !== class2Delete;
          });
        }
        cssCreate();
      }
    } else {
      throw new Error(`There is no combo named ${combo}.`);
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function updateCssNamesParsed(cssNameParsed, value) {
  try {
    if (cssNamesParsed[cssNameParsed.toString()]) {
      cssNamesParsed[cssNameParsed] = value;
      let classesToUpdate = [];
      for (let createdClass of alreadyCreatedClasses) {
        if (createdClass.includes(cssNameParsed)) {
          classesToUpdate.push(createdClass);
        }
      }
      if (classesToUpdate.length > 0) {
        cssCreate(classesToUpdate);
      }
    } else {
      throw new Error(`There is no cssNameParsed named ${cssNameParsed}.`);
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function updateClasses(classesToUpdate) {
  cssCreate(classesToUpdate);
}
function deleteColor(color) {
  try {
    if (!!colors[color.toString()]) {
      delete colors[color];
    } else {
      throw new Error(`There is no color named ${color}.`);
    }
  } catch (err) {
    consoleLog(
      "error",
      {
        err: err,
      },
      styleConsole
    );
  }
}
function clearAllColors() {
  colors = {};
  consoleLog(
    "info",
    {
      colors: colors,
    },
    styleConsole
  );
}
function changeImportantActive() {
  this.importantActive = !this.importantActive;
  this.cssCreate();
}
/* Debuging */
function changeDebugOption() {
  isDebug = !isDebug;
}
function changeUseTimerOption() {
  useTimer = !useTimer;
}
function setTimeBetweenReCreate(time) {
  timeBetweenReCreate = time;
}
function unbefysize(value) {
  return value
    .replace(/(\d+)\s*per/g, "$1%")
    .replace(/COM/g, " , ")
    .replace(/CSP/g, `'`)
    .replace(/CDB/g, `"`)
    .replace(/MIN/g, "-")
    .replace(/PLUS/g, "+")
    .replace(/SD/g, "(")
    .replace(/ED/g, ")")
    .replace(/SE/g, "[")
    .replace(/EE/g, "]")
    .replace(/HASH/g, "#")
    .replace(/SLASH/g, "/")
    .replace(/__/g, " ")
    .replace(/_/g, ".")
    .replace(/UND/g, "_")
    .replace(/CHILD/g, " > ")
    .replace(/ADJ/g, " + ")
    .replace(/SIBL/g, " ~ ")
    .replace(/ALL/g, "*")
    .replace(/EQ/g, "=")
    .replace(/ST/g, "^")
    .replace(/INC/g, "$")
    .replace(/DPS/g, ":")
    .replace(/PNC/g, ";");
}
function befysize(value) {
  return value
    .replace(/%/g, "per")
    .replace(/\s+,\s+/g, "COM")
    .replace(/'/g, `CSP`)
    .replace(/"/g, `CDB`)
    .replace(/-/g, "MIN")
    .replace(/\+/g, "PLUS")
    .replace(/\(/g, "SD")
    .replace(/\)/g, "ED")
    .replace(/\[/g, "SE")
    .replace(/\]/g, "EE")
    .replace(/#/g, "HASH")
    .replace(/\//g, "SLASH")
    .replace(/_/g, "UND")
    .replace(/\s/g, "__")
    .replace(/\./g, "_")
    .replace(/\s+>\s+/g, "CHILD")
    .replace(/\s+\+\s+/g, "ADJ")
    .replace(/\s~\s/g, "SIBL")
    .replace(/\*/g, "ALL")
    .replace(/=/g, "EQ")
    .replace(/\^/g, "ST")
    .replace(/\$/g, "INC")
    .replace(/:/g, "DPS")
    .replace(/;/g, "PNC");
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
  stoper = !isDebug
) {
  consoleParser({
    type: type,
    thing: thing,
    style: style,
    line: line,
    stoper: stoper,
  });
}
function consoleParser(config) {
  config.type = config.type ? config.type : "log";
  config.style = config.style ? config.style : styleConsole;
  config.stoper = config.stoper !== undefined ? config.stoper : !isDebug;
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
