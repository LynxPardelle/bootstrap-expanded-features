import { allColors } from "./colors";
import { cssNamesParsed as cssNP } from "./cssNamesParsed";
export interface IBPS {
  bp: string;
  value: string;
  bef: string;
}
export interface IConsoleParser {
  type?: "log" | "info" | "trace" | "error";
  thing: any;
  style?: string;
  line?: string | null;
  stoper?: boolean;
}
export interface IPseudo {
  mask: string;
  real: string;
}
export let colors: { [key: string]: string } = allColors;
export const abreviationsClasses: { [key: string]: string } = {};
export const abreviationsValues: { [key: string]: string } = {};
export const combos: { [key: string]: string[] } = {};
export const combosCreated: { [key: string]: string } = {};
export const cssNamesParsed: any = cssNP;
export let alreadyCreatedClasses: string[] = [];
export let sheet: any;
export let isDebug: boolean = false;
export const bps: IBPS[] = [
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
export let separator: string = "þµÞ";
/* Console */
export let styleConsole: string = `padding: 0.25rem 0.125rem; background-color: ${colors["mystic"]}; color: ${colors["friend"]};`;
/* Pseudos */
export const pseudoClasses: string[] = [
  "Active",
  "Checked",
  "Default",
  "Dir",
  "Disabled",
  "Empty",
  "Enabled",
  "FirstChild",
  "FirstOfType",
  "First",
  "Fullscreen",
  "FocusVisible",
  "FocusWithin",
  "Focus",
  "Hover",
  "Indeterminate",
  "InRange",
  "Invalid",
  "Lang",
  "LastChild",
  "LastOfType",
  "Left",
  "Link",
  "Not",
  "NthChild",
  "NthLastChild",
  "NthLastOfType",
  "NthOfType",
  "OnlyChild",
  "OnlyOfType",
  "Optional",
  "OutOfRange",
  "ReadOnly",
  "ReadWrite",
  "Required",
  "Right",
  "Root",
  "Scope",
  "Target",
  "Valid",
  "Visited",
];
export const pseudoElements: string[] = [
  "After",
  "Before",
  "FirstLetter",
  "FirstLine",
  "Selection",
  "Backdrop",
  "Placeholder",
  "Marker",
  "SpellingError",
  "GrammarError",
];
export const pseudos: IPseudo[] = pseudoClasses
  .sort((e1: number | string, e2: number | string) => {
    e1 = e1.toString().length;
    e2 = e2.toString().length;
    return e1 > e2 ? 1 : e1 < e2 ? -1 : 0;
  })
  .map((pse: string) => {
    return {
      mask: pse,
      real: `${separator}:${camelToCSSValid(pse)}`,
    };
  })
  .concat(
    pseudoElements
      .sort((e1: number | string, e2: number | string) => {
        e1 = e1.toString().length;
        e2 = e2.toString().length;
        return e1 > e2 ? 1 : e1 < e2 ? -1 : 0;
      })
      .map((pse: string) => {
        return {
          mask: pse,
          real: `${separator}::${camelToCSSValid(pse)}`,
        };
      })
  );
/* Time Management*/
export let lastCSSCreate: number = Date.now();
export let lastTimeAsked2Create: number = new Date().getTime();
export let timesCSSCreated: number = 0;
export let timeBetweenReCreate: number = 400;
export let useTimer: boolean = true;
export let sheets: any[] = [...document.styleSheets];
for (let sheet of sheets) {
  if (sheet.href?.includes("bef-styles")) {
    sheet = sheet;
  }
}
/* colors = allColors;
    console.log('colors', colors);
    */
export function cssCreate(
  updateBefs: string[] | null = null,
  primordial: boolean = false
): void {
  if (!!useTimer) {
    DoUseTimer(updateBefs, primordial);
  } else {
    doCssCreate(updateBefs);
  }
}

export function DoUseTimer(
  updateBefs: string[] | null = null,
  primordial: boolean = false
): void {
  lastTimeAsked2Create = Date.now();
  ta(updateBefs, primordial);
}

export function ta(
  updateBefs: string[] | null = null,
  primordial: boolean = false
) {
  if (
    Date.now() - lastCSSCreate >= timeBetweenReCreate ||
    primordial === true ||
    timesCSSCreated === 0
  ) {
    timesCSSCreated++;
    doCssCreate(updateBefs);
    lastCSSCreate = Date.now();
    consoleParser({ thing: { timesCSSCreated: timesCSSCreated } });
  } else {
    if (Date.now() - timeBetweenReCreate < lastTimeAsked2Create) {
      tas(updateBefs, primordial);
    }
  }
}

export function tas(
  updateBefs: string[] | null = null,
  primordial: boolean = false
) {
  setTimeout(() => {
    ta(updateBefs, primordial);
  }, timeBetweenReCreate);
}

export async function doCssCreate(
  updateBefs: string[] | null = null
): Promise<void> {
  try {
    if (!sheet) {
      let sheets: any[] = [...document.styleSheets];
      for (let sheet of sheets) {
        if (sheet.href?.includes("bef-styles")) {
          sheet = sheet;
        }
      }
      if (!sheet) {
        throw new Error("There is no bef-styles style sheet!");
      }
    }
    const startTimeCSSCreate = performance.now();
    let befs: string[] = [];
    if (!updateBefs) {
      let befElements: any = document.getElementsByClassName("bef");
      for (let befElement of befElements) {
        befElement.classList.forEach((item: any) => {
          let comb = Object.keys(combos).find((cs) => {
            return item.includes(cs);
          });
          if (!!comb) {
            if (combos[comb]) {
              let vals: string[] = !!item.includes("VALS")
                ? item.split("VALS")[1].split("VL")
                : [];
              combos[comb].forEach((c: string) => {
                let reg = new RegExp(/VAL[0-9]+(DEF[.]*DEF)?/, "g");
                if (reg.test(c)) {
                  let matches = c.match(reg);
                  consoleLog("info", { matches: matches }, styleConsole);
                  if (!!matches) {
                    for (let match of matches) {
                      let val = parseInt(match.split("VAL")[1].split("DEF")[0]);
                      consoleLog("info", { val: val }, styleConsole);
                      consoleLog("info", { match: match }, styleConsole);
                      let pattern = `VAL${val}(DEF[.]*DEF)?`;
                      let nreg = new RegExp(pattern, "g");
                      consoleLog("info", { nreg: nreg }, styleConsole);
                      let def = match.split("DEF")[1];
                      if (
                        !!vals[val] &&
                        vals[val] !== "" &&
                        vals[val] !== "undefined" &&
                        vals[val] !== "DEF" &&
                        vals[val] !== "null"
                      ) {
                        consoleLog(
                          "info",
                          { valsval: vals[val] },
                          styleConsole
                        );
                        if (/VAL[0-9]+/.test(vals[val])) {
                          let valval = vals[val].replace("VAL", "");
                          consoleLog("info", { valval: valval }, styleConsole);
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
                          consoleLog("info", { c: c }, styleConsole);
                        }
                      } else {
                        consoleLog("info", { def: def }, styleConsole);
                        c = c.replace(nreg, def ? def : "");
                      }
                    }
                  }
                }
                if (c.startsWith("bef")) {
                  let combosCreatedABBR = Object.keys(combosCreated);
                  consoleLog(
                    "info",
                    { combosCreatedABBR: combosCreatedABBR },
                    styleConsole
                  );
                  let alreadyABBRCombo = combosCreatedABBR.find((cs) => {
                    return combosCreated[cs] === item;
                  });
                  consoleLog(
                    "info",
                    { alreadyABBRCombo: alreadyABBRCombo },
                    styleConsole
                  );
                  let combosCreatedLenght = combosCreatedABBR.length;
                  if (!alreadyABBRCombo) {
                    combosCreated["■■■" + combosCreatedLenght] = item;
                    consoleLog(
                      "info",
                      {
                        cStartsWithBef:
                          combosCreated["■■■" + combosCreatedLenght],
                      },
                      styleConsole
                    );
                  }
                  consoleLog(
                    "info",
                    { combosCreatedABBR: combosCreatedABBR },
                    styleConsole
                  );
                  let comboABBR: string =
                    "■■■" +
                    (combosCreatedLenght !== 0 ? combosCreatedLenght - 1 : 0);
                  consoleLog("info", { comboABBR: comboABBR }, styleConsole);
                  consoleLog("info", { c: c }, styleConsole);
                  if (!!c.split("-")[1]?.includes("SEL")) {
                    consoleLog("info", { cIncludesSEL: c }, styleConsole);
                    c = c.replace("SEL", "SEL__COM_" + comboABBR + "__");
                    consoleLog("info", { cIncludesSELAfter: c }, styleConsole);
                  } else {
                    consoleLog("info", { cDoesntIncludesSEL: c }, styleConsole);
                    c = c.replace(
                      c.split("-")[1],
                      c.split("-")[1] + "SEL__COM_" + comboABBR
                    );
                    consoleLog(
                      "info",
                      { cDoesntIncludesSELAfter: c },
                      styleConsole
                    );
                  }
                } else {
                  consoleLog("info", { cDoesntStartsWithBef: c }, styleConsole);
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
              Object.keys(abreviationsClasses).find((aC) => item.includes(aC)))
          ) {
            befs.push(item);
          }
        });
      }
    } else {
      befs = updateBefs;
    }
    consoleLog("info", { befs: befs }, styleConsole);
    let befsStringed = "";
    let bpsStringed: IBPS[] = bps.map((b) => b);
    for (let bef of befs) {
      if (!updateBefs) {
        if (
          alreadyCreatedClasses.find((aC) => {
            return aC === bef;
          })
        ) {
          continue;
        }
        if (
          [...sheet.cssRules].find((i) =>
            i.cssText.split(" ").find((aC: string) => {
              return aC.replace(".", "") === bef;
            })
          )
        ) {
          continue;
        }
      }
      if (
        !alreadyCreatedClasses.find((aC) => {
          return aC === bef;
        })
      ) {
        alreadyCreatedClasses.push(bef);
      }
      let befStringed = "." + bef;
      if (!bef.includes("bef")) {
        let abbrClss = Object.keys(abreviationsClasses).find((aC) =>
          bef.includes(aC)
        );
        if (!!abbrClss) {
          bef = bef.replace(abbrClss, abreviationsClasses[abbrClss]);
        }
      }
      let befSplited = bef.split("-");
      /* if (befSplited[1].includes('SLASH')) {
          debugger;
        } */
      if (befSplited[1].includes("boxCustom")) {
        consoleLog("info", { befSplited1: befSplited[1] }, styleConsole);
      }
      let befSRP = removePseudos(befSplited[1])
        .replace(/SEL/g, separator)
        .split(`${separator}`);
      if (befSplited[1].includes("boxCustom")) {
        consoleLog("info", { befSRP: befSRP }, styleConsole);
      }
      let selector = befSRP[0];
      let specify = unbefysize(
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
        let alreadyABBRCombo = Object.keys(combosCreated).find((cs) =>
          specify.includes(cs)
        );
        if (!!alreadyABBRCombo) {
          consoleLog(
            "info",
            { OPalreadyABBRCombo: alreadyABBRCombo },
            styleConsole
          );
          specify = specify.replace(
            alreadyABBRCombo,
            combosCreated[alreadyABBRCombo]
          );
          bef = bef.replace(alreadyABBRCombo, combosCreated[alreadyABBRCombo]);
        }
      }
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
      value = unbefysize(
        !!abreviationsValues[value] ? abreviationsValues[value] : value
      );
      secondValue = unbefysize(
        !!abreviationsValues[secondValue]
          ? abreviationsValues[secondValue]
          : secondValue
      );
      let values: any = {
        value: value,
        secondValue: secondValue,
      };
      for (let v in values) {
        for (let i = 0; i < values[v].split(" ").length; i++) {
          let sv: string = values[v].split(" ")[i];
          let hasOPA: boolean = values[v].split(" ")[i + 1] === "OPA";
          let OPA: string = values[v].split(" ")[i + 2];
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
              : !!colors[sv.toString()]
              ? values[v].replace(sv, colors[sv.toString()])
              : values[v];
        }
      }
      value = values.value;
      secondValue = values.secondValue;
      consoleLog(
        "info",
        { value: value, secondValue: secondValue },
        styleConsole
      );
      switch (true) {
        case !!cssNamesParsed[selector.toString()]:
          if (typeof cssNamesParsed[selector.toString()] === "string") {
            befStringed += `${specify}{${
              cssNamesParsed[selector.toString()]
            }:${value};}`;
          } else {
            befStringed += `${specify}{${
              cssNamesParsed[selector.toString()][0]
            }:${value};${cssNamesParsed[selector.toString()][1]}:${value};}`;
          }
          break;
        case befSplited[1].startsWith("link"):
          befStringed += ` a${specify}{color:${value} !important;}`;
          break;
        case befSplited[1] === "btn":
          befStringed += `{
                    background-color:${value};
                    border-color:${value};}
                  ${separator}.${bef}:hover{background-color:${shadeTintColor(
            HexToRGB(value),
            -15
          )};border-color:${shadeTintColor(HexToRGB(value), -20)};}
                  ${separator}.btn-check:focus + .${bef}, .${bef}:focus{background-color:${shadeTintColor(
            HexToRGB(value),
            -15
          )};border-color:${shadeTintColor(HexToRGB(value), -20)};}
                  ${separator}.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{background-color:${shadeTintColor(
            HexToRGB(value),
            -20
          )};border-color:${shadeTintColor(
            HexToRGB(value),
            -25
          )};box-shadow: 0 0 0 0.25rem
                  rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                  ;}
                  ${separator}.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{box-shadow: 0 0 0 0.25rem
                    rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                  ;}`;
          break;
        case befSplited[1] === "btnOutline":
          befStringed += `{
                    color:${value};
                    background-color:${secondValue ? secondValue : "default"};
                      border-color:${value};}
                    ${separator}.${bef}:hover{
                      background-color:${value};
                      color:${secondValue ? secondValue : "default"};
                      border-color:${shadeTintColor(HexToRGB(value), -20)};}
                    ${separator}.btn-check:focus + .${bef}, .${bef}:focus{
                      border-color:${shadeTintColor(HexToRGB(value), -20)};}
                    ${separator}.btn-check:checked + .${bef}, .btn-check:active + .${bef}, .${bef}:active, .${bef}.active, .show > .${bef}.dropdown-toggle{
                      border-color:${shadeTintColor(HexToRGB(value), -25)};
                    box-shadow: 0 0 0 0.25rem
                    rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                    ;}
                    ${separator}.btn-check:checked + .btn-check:focus, .btn-check:active + .${bef}:focus, .${bef}:active:focus, .${bef}.active:focus, .show > .${bef}.dropdown-toggle:focus{
                      box-shadow: 0 0 0 0.25rem
                      rgba(${HexToRGB(shadeTintColor(HexToRGB(value), 3))}, 0.5)
                    ;}`;
          break;
        default:
          befStringed += `${specify}{${camelToCSSValid(selector)}:${value};}`;
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
          befStringed = befStringed.replace(new RegExp(separator, "g"), "");
          bpsStringed = bpsStringed.map((b) => {
            if (befSplited[2] === b.bp) {
              b.bef += befStringed;
            }
            return b;
          });
        } else {
          befsStringed += befStringed + separator;
        }
      }
    }
    if (befsStringed !== "") {
      consoleLog("info", { befsStringed: befsStringed }, styleConsole);
      for (let bef of befsStringed.split(separator)) {
        if (bef !== "") {
          createCSSRules(bef);
        }
      }
    }
    bpsStringed.forEach((b) => {
      if (b.bef !== "") {
        consoleLog(
          "info",
          { bp: b.bp, value: b.value, bef: b.bef },
          styleConsole
        );
        createCSSRules(
          `@media only screen and (min-width: ${b.value}) {html body ${b.bef}}`
        );
        b.bef = "";
      }
    });
    const endTimeCSSCreate = performance.now();
    consoleLog(
      "info",
      `Call to cssCreate() took ${
        endTimeCSSCreate - startTimeCSSCreate
      } milliseconds`,
      styleConsole
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function createCSSRules(rule: string, update: boolean = false): void {
  try {
    consoleLog("info", { rule: rule }, styleConsole);
    if (rule && !rule.split("{")[0].includes("@media")) {
      let index;
      let originalRule: any = [...sheet.cssRules].some(
        (cssRule: any, i: number) => {
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
        }
      )
        ? [...sheet.cssRules].find(
            (i) =>
              i.cssText
                /* .includes(
                    rule.split('{')[0].replace('\n', '').replace(/\s+/g, ' ')
                  ) */
                .split(" ")
                .find((aC: string) => {
                  return (
                    aC.replace(".", "") ===
                    rule.split("{")[0].replace("\n", "").replace(/\s+/g, " ")
                  );
                })
            /*
            i.cssText.split(' ').find((aC: string) => {
                return aC.replace('.', '') === bef;
              })
            */
          )
        : undefined;
      if (originalRule) {
        sheet.deleteRule(index);
      }
      consoleLog("info", { rule: rule }, styleConsole);
      sheet.insertRule(rule, sheet.cssRules.length);
    } else {
      let originalMediaRules: boolean = false;
      let rulesParsed: string[] = rule
        .replace(/{/g, separator)
        .replace(/}/g, separator)
        .split(separator)
        .filter((r) => r !== "")
        .map((r) => {
          return r.replace(/\n/g, "").replace(/\s{2}/g, "");
        });
      let mediaRule: string = rulesParsed[0].includes("media")
        ? rulesParsed[0]
        : "";
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
              let index: number = 0;
              let posibleRule: any = [...css.cssRules].some(
                (cssRule: any, ix: number) => {
                  if (cssRule.cssText.includes(rulesParsed[i])) {
                    index = ix;
                    return true;
                  } else {
                    return false;
                  }
                }
              )
                ? [...css.cssRules].find((i) =>
                    i.cssText.split(" ").find((aC: string) => {
                      return aC.replace(".", "") === rulesParsed[i];
                    })
                  )
                : /* .includes(rulesParsed[i])) */
                  /*
            i.cssText.split(' ').find((aC: string) => {
                return aC.replace('.', '') === bef;
              })
            */
                  undefined;
              if (!!posibleRule) {
                css.deleteRule(index);
              }
              let newRule: string = `${rulesParsed[i]}{${rulesParsed[i + 1]}}`;
              consoleLog("info", { newRule: newRule }, styleConsole);
              css.insertRule(newRule, css.cssRules.length);
              i = i + 2;
            }
          }
        });
      }
      if (originalMediaRules === false) {
        consoleLog("info", { rule: rule }, styleConsole);
        sheet.insertRule(rule, sheet.cssRules.length);
      }
    }
    consoleLog("info", { sheet: sheet }, styleConsole);
  } catch (err: any) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function HexToRGB(Hex: string): number[] {
  let rgb: number[] = [];
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

export function shadeTintColor(rgb: number[], percent: number): string {
  let R: any =
    rgb[0] === 0 && percent > 0
      ? 16
      : rgb[0] === 255 && percent < 0
      ? 239
      : rgb[0];
  let G: any =
    rgb[1] === 0 && percent > 0
      ? 16
      : rgb[1] === 255 && percent < 0
      ? 239
      : rgb[1];
  let B: any =
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
    let A: any = rgb[3] ? (rgb[3] * 255).toString(16) : "FF";
    let AA = A.toString(16).length == 1 ? "0" + A.toString(16) : A.toString(16);
    return "#" + RR + GG + BB + AA;
  } else {
    return "#" + RR + GG + BB;
  }
}

export function removePseudos(thing: string, remove: boolean = false): string {
  let pseudoFiltereds: IPseudo[] = pseudos.filter((pseudo: IPseudo) => {
    return thing.includes(pseudo.mask);
  });
  pseudoFiltereds.forEach((pse) => {
    let regMask = new RegExp(":*" + pse.mask, "gi");
    thing = thing
      .replace("SD", "(")
      .replace("ED", ")")
      .replace(regMask, !remove ? pse.real : "");
  });
  return thing;
}

export function cssValidToCamel(st: string): string {
  return st.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
}

export function camelToCSSValid(st: string): string {
  return st
    .replace(/[\w]([A-Z])/g, (m) => {
      return m[0] + "-" + m[1];
    })
    .toLowerCase();
}

/* CRUD */
export function pushCssNamesParsed(cssNamesParsed: any): void {
  try {
    Object.keys(cssNamesParsed).forEach((key) => {
      cssNamesParsed[key] = cssNamesParsed[key];
    });
    cssCreate();
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function pushBPS(bps: IBPS[]): void {
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
    cssCreate();
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function pushColors(newColors: any): void {
  try {
    Object.keys(newColors).forEach((key) => {
      colors[key] = newColors[key].replace(
        "!important" || "!default" || /\s+/g,
        ""
      );
    });
    cssCreate();
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}
export function pushAbreviationsValues(abreviationsValues: any): void {
  try {
    let prevIgnoredAbreviationsValues: string[] = [];
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
    consoleLog("error", { err: err }, styleConsole);
  }
}
export function pushAbreviationsClasses(abreviationsClasses: any): void {
  let prevIgnoredAbreviationsValues: string[] = [];
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function pushCombos(combos: any): void {
  try {
    let prevIgnoredCombosValues: string[] = [];
    Object.keys(combos).forEach((key) => {
      combos[key] =
        typeof combos[key] === "string"
          ? combos[key].split(" ")
          : combos[key]
              .map((c: string) => {
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function getColors(): any {
  consoleLog("info", { colors: colors }, styleConsole);
  return colors;
}

export function getBPS(): any {
  consoleLog("info", { bps: bps }, styleConsole);
  return bps;
}

export function getAbreviationsClasses(): any {
  consoleLog(
    "info",
    { abreviationsClasses: abreviationsClasses },
    styleConsole
  );
  return abreviationsClasses;
}

export function getAbreviationsValues(): any {
  consoleLog("info", { abreviationsValues: abreviationsValues }, styleConsole);
  return abreviationsValues;
}

export function getCombos(): any {
  consoleLog("info", { combos: combos }, styleConsole);
  return combos;
}

export function getCssNamesParsed(): any {
  consoleLog("info", { cssNamesParsed: cssNamesParsed }, styleConsole);
  return cssNamesParsed;
}

export function getColorsNames(): string[] {
  const colorsNames: string[] = [];
  Object.keys(colors).forEach((key) => {
    colorsNames.push(key);
  });
  return colorsNames;
}

export function getColorValue(color: string): any {
  consoleLog("info", { color: color, colorValue: colors[color] }, styleConsole);
  return colors[color];
}

export function getAlreadyCreatedClasses(): string[] {
  consoleLog(
    "info",
    { alreadyCreatedClasses: alreadyCreatedClasses },
    styleConsole
  );
  return alreadyCreatedClasses;
}

export function getSheet(): any {
  if (sheet) {
    consoleLog("info", { sheet: sheet }, styleConsole);
    return sheet;
  } else {
    return "";
  }
}

export function updateColor(color: string, value: string): void {
  try {
    if (colors[color.toString()]) {
      colors[color] = value.replace("!important" || "!default" || /\s+/g, "");
      let classesToUpdate: string[] = [];
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function updateabreviationsClass(
  abreviationsClass: string,
  value: string
): void {
  try {
    if (abreviationsClasses[abreviationsClass.toString()]) {
      abreviationsClasses[abreviationsClass] = value;
      let classesToUpdate: string[] = [];
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function updateabreviationsValue(
  abreviationsValue: string,
  value: string
): void {
  try {
    if (abreviationsValues[abreviationsValue.toString()]) {
      abreviationsValues[abreviationsValue] = value;
      let classesToUpdate: string[] = [];
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function updateabreviationsCombo(combo: string, values: string[]): void {
  try {
    if (combos[combo.toString()]) {
      combos[combo] = values;
      let classes2Delete: string[] = [];
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function updateCssNamesParsed(
  cssNameParsed: string,
  value: string
): void {
  try {
    if (cssNamesParsed[cssNameParsed.toString()]) {
      cssNamesParsed[cssNameParsed] = value;
      let classesToUpdate: string[] = [];
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
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function updateClasses(classesToUpdate: string[]): void {
  cssCreate(classesToUpdate);
}

export function deleteColor(color: string): void {
  try {
    if (!!colors[color.toString()]) {
      delete colors[color];
    } else {
      throw new Error(`There is no color named ${color}.`);
    }
  } catch (err) {
    consoleLog("error", { err: err }, styleConsole);
  }
}

export function clearAllColors(): void {
  colors = {};
  consoleLog("info", { colors: colors }, styleConsole);
}

/* Debuging */
export function changeDebugOption(): void {
  isDebug = !isDebug;
}

export function changeUseTimerOption(): void {
  useTimer = !useTimer;
}

export function setTimeBetweenReCreate(time: number): void {
  timeBetweenReCreate = time;
}

export function unbefysize(value: string): string {
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

export function befysize(value: string): string {
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

export function getStackTrace(): string {
  let stack;
  try {
    throw new Error("");
  } catch (error: any) {
    stack = error.stack || "";
  }
  stack = stack.split("\n").map((line: any) => {
    return line.trim();
  });
  return stack.splice(stack[0] == "Error" ? 2 : 1);
}

export function consoleLog(
  type: "log" | "info" | "trace" | "error" = "log",
  thing: any,
  style: string = styleConsole,
  line: string | null = null,
  stoper: boolean = !isDebug
): void {
  consoleParser({
    type: type,
    thing: thing,
    style: style,
    line: line,
    stoper: stoper,
  });
}

export function consoleParser(config: IConsoleParser): void {
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
