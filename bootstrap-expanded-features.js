"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.consoleParser = exports.consoleLog = exports.getStackTrace = exports.befysize = exports.unbefysize = exports.setTimeBetweenReCreate = exports.changeUseTimerOption = exports.changeDebugOption = exports.clearAllColors = exports.deleteColor = exports.updateClasses = exports.updateCssNamesParsed = exports.updateabreviationsCombo = exports.updateabreviationsValue = exports.updateabreviationsClass = exports.updateColor = exports.getSheet = exports.getAlreadyCreatedClasses = exports.getColorValue = exports.getColorsNames = exports.getCssNamesParsed = exports.getCombos = exports.getAbreviationsValues = exports.getAbreviationsClasses = exports.getBPS = exports.getColors = exports.pushCombos = exports.pushAbreviationsClasses = exports.pushAbreviationsValues = exports.pushColors = exports.pushBPS = exports.pushCssNamesParsed = exports.camelToCSSValid = exports.cssValidToCamel = exports.removePseudos = exports.shadeTintColor = exports.HexToRGB = exports.createCSSRules = exports.doCssCreate = exports.tas = exports.ta = exports.DoUseTimer = exports.cssCreate = exports.sheets = exports.useTimer = exports.timeBetweenReCreate = exports.timesCSSCreated = exports.lastTimeAsked2Create = exports.lastCSSCreate = exports.pseudos = exports.pseudoElements = exports.pseudoClasses = exports.styleConsole = exports.separator = exports.bps = exports.isDebug = exports.sheet = exports.alreadyCreatedClasses = exports.cssNamesParsed = exports.combosCreated = exports.combos = exports.abreviationsValues = exports.abreviationsClasses = exports.colors = void 0;
var colors_1 = require("./colors");
var cssNamesParsed_1 = require("./cssNamesParsed");
exports.colors = colors_1.allColors;
exports.abreviationsClasses = {};
exports.abreviationsValues = {};
exports.combos = {};
exports.combosCreated = {};
exports.cssNamesParsed = cssNamesParsed_1.cssNamesParsed;
exports.alreadyCreatedClasses = [];
exports.isDebug = false;
exports.bps = [
    {
        bp: "sm",
        value: "576px",
        bef: ""
    },
    {
        bp: "md",
        value: "768px",
        bef: ""
    },
    {
        bp: "lg",
        value: "992px",
        bef: ""
    },
    {
        bp: "xl",
        value: "1200px",
        bef: ""
    },
    {
        bp: "xxl",
        value: "1400px",
        bef: ""
    },
];
exports.separator = "þµÞ";
/* Console */
exports.styleConsole = "padding: 0.25rem 0.125rem; background-color: " + exports.colors["mystic"] + "; color: " + exports.colors["friend"] + ";";
/* Pseudos */
exports.pseudoClasses = [
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
exports.pseudoElements = [
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
exports.pseudos = exports.pseudoClasses
    .sort(function (e1, e2) {
    e1 = e1.toString().length;
    e2 = e2.toString().length;
    return e1 > e2 ? 1 : e1 < e2 ? -1 : 0;
})
    .map(function (pse) {
    return {
        mask: pse,
        real: exports.separator + ":" + camelToCSSValid(pse)
    };
})
    .concat(exports.pseudoElements
    .sort(function (e1, e2) {
    e1 = e1.toString().length;
    e2 = e2.toString().length;
    return e1 > e2 ? 1 : e1 < e2 ? -1 : 0;
})
    .map(function (pse) {
    return {
        mask: pse,
        real: exports.separator + "::" + camelToCSSValid(pse)
    };
}));
/* Time Management*/
exports.lastCSSCreate = Date.now();
exports.lastTimeAsked2Create = new Date().getTime();
exports.timesCSSCreated = 0;
exports.timeBetweenReCreate = 400;
exports.useTimer = true;
exports.sheets = __spreadArrays(document.styleSheets);
for (var _i = 0, sheets_1 = exports.sheets; _i < sheets_1.length; _i++) {
    var sheet_1 = sheets_1[_i];
    if ((_a = sheet_1.href) === null || _a === void 0 ? void 0 : _a.includes("bef-styles")) {
        sheet_1 = sheet_1;
    }
}
/* colors = allColors;
    console.log('colors', colors);
    */
function cssCreate(updateBefs, primordial) {
    if (updateBefs === void 0) { updateBefs = null; }
    if (primordial === void 0) { primordial = false; }
    if (!!exports.useTimer) {
        DoUseTimer(updateBefs, primordial);
    }
    else {
        doCssCreate(updateBefs);
    }
}
exports.cssCreate = cssCreate;
function DoUseTimer(updateBefs, primordial) {
    if (updateBefs === void 0) { updateBefs = null; }
    if (primordial === void 0) { primordial = false; }
    exports.lastTimeAsked2Create = Date.now();
    ta(updateBefs, primordial);
}
exports.DoUseTimer = DoUseTimer;
function ta(updateBefs, primordial) {
    if (updateBefs === void 0) { updateBefs = null; }
    if (primordial === void 0) { primordial = false; }
    if (Date.now() - exports.lastCSSCreate >= exports.timeBetweenReCreate ||
        primordial === true ||
        exports.timesCSSCreated === 0) {
        exports.timesCSSCreated++;
        doCssCreate(updateBefs);
        exports.lastCSSCreate = Date.now();
        consoleParser({ thing: { timesCSSCreated: exports.timesCSSCreated } });
    }
    else {
        if (Date.now() - exports.timeBetweenReCreate < exports.lastTimeAsked2Create) {
            tas(updateBefs, primordial);
        }
    }
}
exports.ta = ta;
function tas(updateBefs, primordial) {
    if (updateBefs === void 0) { updateBefs = null; }
    if (primordial === void 0) { primordial = false; }
    setTimeout(function () {
        ta(updateBefs, primordial);
    }, exports.timeBetweenReCreate);
}
exports.tas = tas;
function doCssCreate(updateBefs) {
    var _a;
    if (updateBefs === void 0) { updateBefs = null; }
    return __awaiter(this, void 0, Promise, function () {
        var sheets_3, _i, sheets_2, sheet_2, startTimeCSSCreate, befs_2, befElements, _loop_1, _b, befElements_1, befElement, befsStringed, bpsStringed, _loop_2, _c, befs_1, bef, _d, _e, bef, endTimeCSSCreate, befTimer;
        return __generator(this, function (_f) {
            try {
                if (!exports.sheet) {
                    sheets_3 = __spreadArrays(document.styleSheets);
                    for (_i = 0, sheets_2 = sheets_3; _i < sheets_2.length; _i++) {
                        sheet_2 = sheets_2[_i];
                        if ((_a = sheet_2.href) === null || _a === void 0 ? void 0 : _a.includes("bef-styles")) {
                            sheet_2 = sheet_2;
                        }
                    }
                    if (!exports.sheet) {
                        throw new Error("There is no bef-styles style sheet!");
                    }
                }
                startTimeCSSCreate = performance.now();
                befs_2 = [];
                if (!updateBefs) {
                    befElements = document.getElementsByClassName("bef");
                    _loop_1 = function (befElement) {
                        befElement.classList.forEach(function (item) {
                            var comb = Object.keys(exports.combos).find(function (cs) {
                                return item.includes(cs);
                            });
                            if (!!comb) {
                                if (exports.combos[comb]) {
                                    var vals_1 = !!item.includes("VALS")
                                        ? item.split("VALS")[1].split("VL")
                                        : [];
                                    exports.combos[comb].forEach(function (c) {
                                        var _a;
                                        var reg = new RegExp(/VAL[0-9]+(DEF[.]*DEF)?/, "g");
                                        if (reg.test(c)) {
                                            var matches = c.match(reg);
                                            consoleLog("info", { matches: matches }, exports.styleConsole);
                                            if (!!matches) {
                                                for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                                                    var match = matches_1[_i];
                                                    var val = parseInt(match.split("VAL")[1].split("DEF")[0]);
                                                    consoleLog("info", { val: val }, exports.styleConsole);
                                                    consoleLog("info", { match: match }, exports.styleConsole);
                                                    var pattern = "VAL" + val + "(DEF[.]*DEF)?";
                                                    var nreg = new RegExp(pattern, "g");
                                                    consoleLog("info", { nreg: nreg }, exports.styleConsole);
                                                    var def = match.split("DEF")[1];
                                                    if (!!vals_1[val] &&
                                                        vals_1[val] !== "" &&
                                                        vals_1[val] !== "undefined" &&
                                                        vals_1[val] !== "DEF" &&
                                                        vals_1[val] !== "null") {
                                                        consoleLog("info", { valsval: vals_1[val] }, exports.styleConsole);
                                                        if (/VAL[0-9]+/.test(vals_1[val])) {
                                                            var valval = vals_1[val].replace("VAL", "");
                                                            consoleLog("info", { valval: valval }, exports.styleConsole);
                                                            c = c.replace(nreg, vals_1[parseInt(valval)]
                                                                ? vals_1[parseInt(valval)]
                                                                : def
                                                                    ? def
                                                                    : "");
                                                        }
                                                        else {
                                                            c = c.replace(nreg, vals_1[val]);
                                                            consoleLog("info", { c: c }, exports.styleConsole);
                                                        }
                                                    }
                                                    else {
                                                        consoleLog("info", { def: def }, exports.styleConsole);
                                                        c = c.replace(nreg, def ? def : "");
                                                    }
                                                }
                                            }
                                        }
                                        if (c.startsWith("bef")) {
                                            var combosCreatedABBR = Object.keys(exports.combosCreated);
                                            consoleLog("info", { combosCreatedABBR: combosCreatedABBR }, exports.styleConsole);
                                            var alreadyABBRCombo = combosCreatedABBR.find(function (cs) {
                                                return exports.combosCreated[cs] === item;
                                            });
                                            consoleLog("info", { alreadyABBRCombo: alreadyABBRCombo }, exports.styleConsole);
                                            var combosCreatedLenght = combosCreatedABBR.length;
                                            if (!alreadyABBRCombo) {
                                                exports.combosCreated["■■■" + combosCreatedLenght] = item;
                                                consoleLog("info", {
                                                    cStartsWithBef: exports.combosCreated["■■■" + combosCreatedLenght]
                                                }, exports.styleConsole);
                                            }
                                            consoleLog("info", { combosCreatedABBR: combosCreatedABBR }, exports.styleConsole);
                                            var comboABBR = "■■■" +
                                                (combosCreatedLenght !== 0 ? combosCreatedLenght - 1 : 0);
                                            consoleLog("info", { comboABBR: comboABBR }, exports.styleConsole);
                                            consoleLog("info", { c: c }, exports.styleConsole);
                                            if (!!((_a = c.split("-")[1]) === null || _a === void 0 ? void 0 : _a.includes("SEL"))) {
                                                consoleLog("info", { cIncludesSEL: c }, exports.styleConsole);
                                                c = c.replace("SEL", "SEL__COM_" + comboABBR + "__");
                                                consoleLog("info", { cIncludesSELAfter: c }, exports.styleConsole);
                                            }
                                            else {
                                                consoleLog("info", { cDoesntIncludesSEL: c }, exports.styleConsole);
                                                c = c.replace(c.split("-")[1], c.split("-")[1] + "SEL__COM_" + comboABBR);
                                                consoleLog("info", { cDoesntIncludesSELAfter: c }, exports.styleConsole);
                                            }
                                        }
                                        else {
                                            consoleLog("info", { cDoesntStartsWithBef: c }, exports.styleConsole);
                                            befElement.classList.add(c);
                                        }
                                        if (!befs_2.includes(c)) {
                                            befs_2.push(c);
                                        }
                                    });
                                }
                            }
                            else if (!befs_2.includes(item) &&
                                item !== "bef" &&
                                (item.includes("bef") ||
                                    Object.keys(exports.abreviationsClasses).find(function (aC) { return item.includes(aC); }))) {
                                befs_2.push(item);
                            }
                        });
                    };
                    for (_b = 0, befElements_1 = befElements; _b < befElements_1.length; _b++) {
                        befElement = befElements_1[_b];
                        _loop_1(befElement);
                    }
                }
                else {
                    befs_2 = updateBefs;
                }
                consoleLog("info", { befs: befs_2 }, exports.styleConsole);
                befsStringed = "";
                bpsStringed = exports.bps.map(function (b) { return b; });
                _loop_2 = function (bef) {
                    if (!updateBefs) {
                        if (exports.alreadyCreatedClasses.find(function (aC) {
                            return aC === bef;
                        })) {
                            return "continue";
                        }
                        if (__spreadArrays(exports.sheet.cssRules).find(function (i) {
                            return i.cssText.split(" ").find(function (aC) {
                                return aC.replace(".", "") === bef;
                            });
                        })) {
                            return "continue";
                        }
                    }
                    if (!exports.alreadyCreatedClasses.find(function (aC) {
                        return aC === bef;
                    })) {
                        exports.alreadyCreatedClasses.push(bef);
                    }
                    var befStringed = "." + bef;
                    if (!bef.includes("bef")) {
                        var abbrClss = Object.keys(exports.abreviationsClasses).find(function (aC) {
                            return bef.includes(aC);
                        });
                        if (!!abbrClss) {
                            bef = bef.replace(abbrClss, exports.abreviationsClasses[abbrClss]);
                        }
                    }
                    var befSplited = bef.split("-");
                    /* if (befSplited[1].includes('SLASH')) {
                        debugger;
                      } */
                    if (befSplited[1].includes("boxCustom")) {
                        consoleLog("info", { befSplited1: befSplited[1] }, exports.styleConsole);
                    }
                    var befSRP = removePseudos(befSplited[1])
                        .replace(/SEL/g, exports.separator)
                        .split("" + exports.separator);
                    if (befSplited[1].includes("boxCustom")) {
                        consoleLog("info", { befSRP: befSRP }, exports.styleConsole);
                    }
                    var selector = befSRP[0];
                    var specify = unbefysize(befSRP
                        .map(function (bs, i) {
                        if (i !== 0) {
                            return bs;
                        }
                        else {
                            return "";
                        }
                    })
                        .join(""));
                    if (!!specify) {
                        var alreadyABBRCombo = Object.keys(exports.combosCreated).find(function (cs) {
                            return specify.includes(cs);
                        });
                        if (!!alreadyABBRCombo) {
                            consoleLog("info", { OPalreadyABBRCombo: alreadyABBRCombo }, exports.styleConsole);
                            specify = specify.replace(alreadyABBRCombo, exports.combosCreated[alreadyABBRCombo]);
                            bef = bef.replace(alreadyABBRCombo, exports.combosCreated[alreadyABBRCombo]);
                        }
                    }
                    var hasBP = false;
                    var value = "";
                    var secondValue = "";
                    if (exports.bps.find(function (b) { return befSplited[2] === b.bp; })) {
                        hasBP = true;
                        value = befSplited[3];
                        secondValue = !!befSplited[4] ? befSplited[4] : "";
                    }
                    else if (befSplited[2]) {
                        value = befSplited[2];
                        secondValue = !!befSplited[3] ? befSplited[3] : "";
                    }
                    /* befSplited[1] = befSplited[1]
                        .replace(/COM/g, ' , ')
                        .replace(/__/g, ' ')
                        .replace(/_/g, '.'); */
                    value = unbefysize(!!exports.abreviationsValues[value] ? exports.abreviationsValues[value] : value);
                    secondValue = unbefysize(!!exports.abreviationsValues[secondValue]
                        ? exports.abreviationsValues[secondValue]
                        : secondValue);
                    var values = {
                        value: value,
                        secondValue: secondValue
                    };
                    for (var v in values) {
                        for (var i = 0; i < values[v].split(" ").length; i++) {
                            var sv = values[v].split(" ")[i];
                            var hasOPA = values[v].split(" ")[i + 1] === "OPA";
                            var OPA = values[v].split(" ")[i + 2];
                            values[v] =
                                !!hasOPA && !!OPA
                                    ? values[v]
                                        .replace(sv, "rgba(" + HexToRGB(exports.colors[sv.toString()]).toString() + ", " + OPA + ")")
                                        .split(" OPA " + OPA)[0]
                                    : values[v].includes(" OPA")
                                        ? values[v]
                                            .replace(sv, "rgba(" + HexToRGB(exports.colors[sv.toString()]).toString() + ", " + values[v].split("OPA ")[1] + ")")
                                            .split(" OPA")[0]
                                        : !!exports.colors[sv.toString()]
                                            ? values[v].replace(sv, exports.colors[sv.toString()])
                                            : values[v];
                        }
                    }
                    value = values.value;
                    secondValue = values.secondValue;
                    consoleLog("info", { value: value, secondValue: secondValue }, exports.styleConsole);
                    switch (true) {
                        case !!exports.cssNamesParsed[selector.toString()]:
                            if (typeof exports.cssNamesParsed[selector.toString()] === "string") {
                                befStringed += specify + "{" + exports.cssNamesParsed[selector.toString()] + ":" + value + ";}";
                            }
                            else {
                                befStringed += specify + "{" + exports.cssNamesParsed[selector.toString()][0] + ":" + value + ";" + exports.cssNamesParsed[selector.toString()][1] + ":" + value + ";}";
                            }
                            break;
                        case befSplited[1].startsWith("link"):
                            befStringed += " a" + specify + "{color:" + value + " !important;}";
                            break;
                        case befSplited[1] === "btn":
                            befStringed += "{\n                    background-color:" + value + ";\n                    border-color:" + value + ";}\n                  " + exports.separator + "." + bef + ":hover{background-color:" + shadeTintColor(HexToRGB(value), -15) + ";border-color:" + shadeTintColor(HexToRGB(value), -20) + ";}\n                  " + exports.separator + ".btn-check:focus + ." + bef + ", ." + bef + ":focus{background-color:" + shadeTintColor(HexToRGB(value), -15) + ";border-color:" + shadeTintColor(HexToRGB(value), -20) + ";}\n                  " + exports.separator + ".btn-check:checked + ." + bef + ", .btn-check:active + ." + bef + ", ." + bef + ":active, ." + bef + ".active, .show > ." + bef + ".dropdown-toggle{background-color:" + shadeTintColor(HexToRGB(value), -20) + ";border-color:" + shadeTintColor(HexToRGB(value), -25) + ";box-shadow: 0 0 0 0.25rem\n                  rgba(" + HexToRGB(shadeTintColor(HexToRGB(value), 3)) + ", 0.5)\n                  ;}\n                  " + exports.separator + ".btn-check:checked + .btn-check:focus, .btn-check:active + ." + bef + ":focus, ." + bef + ":active:focus, ." + bef + ".active:focus, .show > ." + bef + ".dropdown-toggle:focus{box-shadow: 0 0 0 0.25rem\n                    rgba(" + HexToRGB(shadeTintColor(HexToRGB(value), 3)) + ", 0.5)\n                  ;}";
                            break;
                        case befSplited[1] === "btnOutline":
                            befStringed += "{\n                    color:" + value + ";\n                    background-color:" + (secondValue ? secondValue : "default") + ";\n                      border-color:" + value + ";}\n                    " + exports.separator + "." + bef + ":hover{\n                      background-color:" + value + ";\n                      color:" + (secondValue ? secondValue : "default") + ";\n                      border-color:" + shadeTintColor(HexToRGB(value), -20) + ";}\n                    " + exports.separator + ".btn-check:focus + ." + bef + ", ." + bef + ":focus{\n                      border-color:" + shadeTintColor(HexToRGB(value), -20) + ";}\n                    " + exports.separator + ".btn-check:checked + ." + bef + ", .btn-check:active + ." + bef + ", ." + bef + ":active, ." + bef + ".active, .show > ." + bef + ".dropdown-toggle{\n                      border-color:" + shadeTintColor(HexToRGB(value), -25) + ";\n                    box-shadow: 0 0 0 0.25rem\n                    rgba(" + HexToRGB(shadeTintColor(HexToRGB(value), 3)) + ", 0.5)\n                    ;}\n                    " + exports.separator + ".btn-check:checked + .btn-check:focus, .btn-check:active + ." + bef + ":focus, ." + bef + ":active:focus, ." + bef + ".active:focus, .show > ." + bef + ".dropdown-toggle:focus{\n                      box-shadow: 0 0 0 0.25rem\n                      rgba(" + HexToRGB(shadeTintColor(HexToRGB(value), 3)) + ", 0.5)\n                    ;}";
                            break;
                        default:
                            befStringed += specify + "{" + camelToCSSValid(selector) + ":" + value + ";}";
                            break;
                    }
                    for (var _i = 0, _a = befStringed.split(";"); _i < _a.length; _i++) {
                        var cssProperty = _a[_i];
                        if (!cssProperty.includes("!important") && cssProperty.length > 5) {
                            befStringed = befStringed.replace(cssProperty, cssProperty + " !important");
                        }
                    }
                    if (befStringed.includes("{") && befStringed.includes("}")) {
                        if (hasBP === true) {
                            befStringed = befStringed.replace(new RegExp(exports.separator, "g"), "");
                            bpsStringed = bpsStringed.map(function (b) {
                                if (befSplited[2] === b.bp) {
                                    b.bef += befStringed;
                                }
                                return b;
                            });
                        }
                        else {
                            befsStringed += befStringed + exports.separator;
                        }
                    }
                };
                for (_c = 0, befs_1 = befs_2; _c < befs_1.length; _c++) {
                    bef = befs_1[_c];
                    _loop_2(bef);
                }
                if (befsStringed !== "") {
                    consoleLog("info", { befsStringed: befsStringed }, exports.styleConsole);
                    for (_d = 0, _e = befsStringed.split(exports.separator); _d < _e.length; _d++) {
                        bef = _e[_d];
                        if (bef !== "") {
                            createCSSRules(bef);
                        }
                    }
                }
                bpsStringed.forEach(function (b) {
                    if (b.bef !== "") {
                        consoleLog("info", { bp: b.bp, value: b.value, bef: b.bef }, exports.styleConsole);
                        createCSSRules("@media only screen and (min-width: " + b.value + ") {html body " + b.bef + "}");
                        b.bef = "";
                    }
                });
                endTimeCSSCreate = performance.now();
                consoleLog("info", "Call to cssCreate() took " + (endTimeCSSCreate - startTimeCSSCreate) + " milliseconds", exports.styleConsole);
                befTimer = document.getElementById("befTimer");
                if (befTimer) {
                    befTimer.innerHTML = "\n            <p>\n            Call to cssCreate() took " + (endTimeCSSCreate - startTimeCSSCreate) + " milliseconds\n            </p>\n            ";
                }
            }
            catch (err) {
                consoleLog("error", { err: err }, exports.styleConsole);
            }
            return [2 /*return*/];
        });
    });
}
exports.doCssCreate = doCssCreate;
function createCSSRules(rule, update) {
    if (update === void 0) { update = false; }
    try {
        consoleLog("info", { rule: rule }, exports.styleConsole);
        if (rule && !rule.split("{")[0].includes("@media")) {
            var index_1;
            var originalRule = __spreadArrays(exports.sheet.cssRules).some(function (cssRule, i) {
                if (cssRule.cssText.includes(rule.split("{")[0].replace("\n", "").replace(/\s+/g, " "))) {
                    index_1 = i;
                    return true;
                }
                else {
                    return false;
                }
            })
                ? __spreadArrays(exports.sheet.cssRules).find(function (i) {
                    return i.cssText
                        /* .includes(
                            rule.split('{')[0].replace('\n', '').replace(/\s+/g, ' ')
                          ) */
                        .split(" ")
                        .find(function (aC) {
                        return (aC.replace(".", "") ===
                            rule.split("{")[0].replace("\n", "").replace(/\s+/g, " "));
                    });
                }
                /*
                i.cssText.split(' ').find((aC: string) => {
                    return aC.replace('.', '') === bef;
                  })
                */
                )
                : undefined;
            if (originalRule) {
                exports.sheet.deleteRule(index_1);
            }
            consoleLog("info", { rule: rule }, exports.styleConsole);
            exports.sheet.insertRule(rule, exports.sheet.cssRules.length);
        }
        else {
            var originalMediaRules_1 = false;
            var rulesParsed_1 = rule
                .replace(/{/g, exports.separator)
                .replace(/}/g, exports.separator)
                .split(exports.separator)
                .filter(function (r) { return r !== ""; })
                .map(function (r) {
                return r.replace(/\n/g, "").replace(/\s{2}/g, "");
            });
            var mediaRule_1 = rulesParsed_1[0].includes("media")
                ? rulesParsed_1[0]
                : "";
            if (mediaRule_1 !== "") {
                if (mediaRule_1.endsWith(" ")) {
                    mediaRule_1 = mediaRule_1.slice(0, -1);
                }
                rulesParsed_1.shift();
                __spreadArrays(exports.sheet.cssRules).forEach(function (css) {
                    if (css.cssText.includes(mediaRule_1) && css.cssRules) {
                        originalMediaRules_1 = true;
                        var i_1 = 0;
                        var _loop_3 = function () {
                            var index = 0;
                            var posibleRule = __spreadArrays(css.cssRules).some(function (cssRule, ix) {
                                if (cssRule.cssText.includes(rulesParsed_1[i_1])) {
                                    index = ix;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            })
                                ? __spreadArrays(css.cssRules).find(function (i) {
                                    return i.cssText.split(" ").find(function (aC) {
                                        return aC.replace(".", "") === rulesParsed_1[i];
                                    });
                                })
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
                            var newRule = rulesParsed_1[i_1] + "{" + rulesParsed_1[i_1 + 1] + "}";
                            consoleLog("info", { newRule: newRule }, exports.styleConsole);
                            css.insertRule(newRule, css.cssRules.length);
                            i_1 = i_1 + 2;
                        };
                        while (i_1 <= rulesParsed_1.length) {
                            _loop_3();
                        }
                    }
                });
            }
            if (originalMediaRules_1 === false) {
                consoleLog("info", { rule: rule }, exports.styleConsole);
                exports.sheet.insertRule(rule, exports.sheet.cssRules.length);
            }
        }
        consoleLog("info", { sheet: exports.sheet }, exports.styleConsole);
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.createCSSRules = createCSSRules;
function HexToRGB(Hex) {
    var rgb = [];
    if (!Hex.includes("rgb") && !Hex.includes("rgba")) {
        var HexNoCat = Hex.replace("#", "");
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
    }
    else {
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
exports.HexToRGB = HexToRGB;
function shadeTintColor(rgb, percent) {
    var R = rgb[0] === 0 && percent > 0
        ? 16
        : rgb[0] === 255 && percent < 0
            ? 239
            : rgb[0];
    var G = rgb[1] === 0 && percent > 0
        ? 16
        : rgb[1] === 255 && percent < 0
            ? 239
            : rgb[1];
    var B = rgb[2] === 0 && percent > 0
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
    var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
    var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
    var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
    if (rgb[3]) {
        var A = rgb[3] ? (rgb[3] * 255).toString(16) : "FF";
        var AA = A.toString(16).length == 1 ? "0" + A.toString(16) : A.toString(16);
        return "#" + RR + GG + BB + AA;
    }
    else {
        return "#" + RR + GG + BB;
    }
}
exports.shadeTintColor = shadeTintColor;
function removePseudos(thing, remove) {
    if (remove === void 0) { remove = false; }
    var pseudoFiltereds = exports.pseudos.filter(function (pseudo) {
        return thing.includes(pseudo.mask);
    });
    pseudoFiltereds.forEach(function (pse) {
        var regMask = new RegExp(":*" + pse.mask, "gi");
        thing = thing
            .replace("SD", "(")
            .replace("ED", ")")
            .replace(regMask, !remove ? pse.real : "");
    });
    return thing;
}
exports.removePseudos = removePseudos;
function cssValidToCamel(st) {
    return st.replace(/([-_][a-z])/gi, function ($1) {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
}
exports.cssValidToCamel = cssValidToCamel;
function camelToCSSValid(st) {
    return st
        .replace(/[\w]([A-Z])/g, function (m) {
        return m[0] + "-" + m[1];
    })
        .toLowerCase();
}
exports.camelToCSSValid = camelToCSSValid;
/* CRUD */
function pushCssNamesParsed(cssNamesParsed) {
    try {
        Object.keys(cssNamesParsed).forEach(function (key) {
            cssNamesParsed[key] = cssNamesParsed[key];
        });
        cssCreate();
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.pushCssNamesParsed = pushCssNamesParsed;
function pushBPS(bps) {
    try {
        var _loop_4 = function (nb) {
            var bp = bps.find(function (b) { return b.bp === nb.bp; });
            if (bp) {
                bp.value = nb.value;
                bp.bef = "";
            }
            else {
                bps.push({ bp: nb.bp, value: nb.value, bef: "" });
            }
        };
        for (var _i = 0, bps_1 = bps; _i < bps_1.length; _i++) {
            var nb = bps_1[_i];
            _loop_4(nb);
        }
        cssCreate();
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.pushBPS = pushBPS;
function pushColors(newColors) {
    try {
        Object.keys(newColors).forEach(function (key) {
            exports.colors[key] = newColors[key].replace("!important" || "!default" || /\s+/g, "");
        });
        cssCreate();
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.pushColors = pushColors;
function pushAbreviationsValues(abreviationsValues) {
    try {
        var prevIgnoredAbreviationsValues_1 = [];
        Object.keys(abreviationsValues).forEach(function (key) {
            abreviationsValues[key] = abreviationsValues[key];
            prevIgnoredAbreviationsValues_1 = exports.alreadyCreatedClasses.filter(function (aC) {
                return aC.includes(key);
            });
        });
        if (prevIgnoredAbreviationsValues_1.length > 0) {
            cssCreate(prevIgnoredAbreviationsValues_1);
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.pushAbreviationsValues = pushAbreviationsValues;
function pushAbreviationsClasses(abreviationsClasses) {
    var prevIgnoredAbreviationsValues = [];
    try {
        Object.keys(abreviationsClasses).forEach(function (key) {
            abreviationsClasses[key] = abreviationsClasses[key];
            prevIgnoredAbreviationsValues = exports.alreadyCreatedClasses.filter(function (aC) {
                return aC.includes(key);
            });
        });
        if (prevIgnoredAbreviationsValues.length > 0) {
            cssCreate(prevIgnoredAbreviationsValues);
        }
        else {
            cssCreate();
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.pushAbreviationsClasses = pushAbreviationsClasses;
function pushCombos(combos) {
    try {
        var prevIgnoredCombosValues_1 = [];
        Object.keys(combos).forEach(function (key) {
            combos[key] =
                typeof combos[key] === "string"
                    ? combos[key].split(" ")
                    : combos[key]
                        .map(function (c) {
                        return c.split(" ").flat();
                    })
                        .flat();
            prevIgnoredCombosValues_1 = exports.alreadyCreatedClasses.filter(function (aC) {
                return aC.includes(key);
            });
        });
        if (prevIgnoredCombosValues_1.length > 0) {
            cssCreate(prevIgnoredCombosValues_1);
        }
        else {
            cssCreate();
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.pushCombos = pushCombos;
function getColors() {
    consoleLog("info", { colors: exports.colors }, exports.styleConsole);
    return exports.colors;
}
exports.getColors = getColors;
function getBPS() {
    consoleLog("info", { bps: exports.bps }, exports.styleConsole);
    return exports.bps;
}
exports.getBPS = getBPS;
function getAbreviationsClasses() {
    consoleLog("info", { abreviationsClasses: exports.abreviationsClasses }, exports.styleConsole);
    return exports.abreviationsClasses;
}
exports.getAbreviationsClasses = getAbreviationsClasses;
function getAbreviationsValues() {
    consoleLog("info", { abreviationsValues: exports.abreviationsValues }, exports.styleConsole);
    return exports.abreviationsValues;
}
exports.getAbreviationsValues = getAbreviationsValues;
function getCombos() {
    consoleLog("info", { combos: exports.combos }, exports.styleConsole);
    return exports.combos;
}
exports.getCombos = getCombos;
function getCssNamesParsed() {
    consoleLog("info", { cssNamesParsed: exports.cssNamesParsed }, exports.styleConsole);
    return exports.cssNamesParsed;
}
exports.getCssNamesParsed = getCssNamesParsed;
function getColorsNames() {
    var colorsNames = [];
    Object.keys(exports.colors).forEach(function (key) {
        colorsNames.push(key);
    });
    return colorsNames;
}
exports.getColorsNames = getColorsNames;
function getColorValue(color) {
    consoleLog("info", { color: color, colorValue: exports.colors[color] }, exports.styleConsole);
    return exports.colors[color];
}
exports.getColorValue = getColorValue;
function getAlreadyCreatedClasses() {
    consoleLog("info", { alreadyCreatedClasses: exports.alreadyCreatedClasses }, exports.styleConsole);
    return exports.alreadyCreatedClasses;
}
exports.getAlreadyCreatedClasses = getAlreadyCreatedClasses;
function getSheet() {
    if (exports.sheet) {
        consoleLog("info", { sheet: exports.sheet }, exports.styleConsole);
        return exports.sheet;
    }
    else {
        return "";
    }
}
exports.getSheet = getSheet;
function updateColor(color, value) {
    try {
        if (exports.colors[color.toString()]) {
            exports.colors[color] = value.replace("!important" || "!default" || /\s+/g, "");
            var classesToUpdate = [];
            for (var _i = 0, alreadyCreatedClasses_1 = exports.alreadyCreatedClasses; _i < alreadyCreatedClasses_1.length; _i++) {
                var createdClass = alreadyCreatedClasses_1[_i];
                if (createdClass.includes(color)) {
                    classesToUpdate.push(createdClass);
                }
            }
            if (classesToUpdate.length > 0) {
                cssCreate(classesToUpdate);
            }
        }
        else {
            throw new Error("There is no color named " + color + ".");
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.updateColor = updateColor;
function updateabreviationsClass(abreviationsClass, value) {
    try {
        if (exports.abreviationsClasses[abreviationsClass.toString()]) {
            exports.abreviationsClasses[abreviationsClass] = value;
            var classesToUpdate = [];
            for (var _i = 0, alreadyCreatedClasses_2 = exports.alreadyCreatedClasses; _i < alreadyCreatedClasses_2.length; _i++) {
                var createdClass = alreadyCreatedClasses_2[_i];
                if (createdClass.includes(abreviationsClass)) {
                    classesToUpdate.push(createdClass);
                }
            }
            if (classesToUpdate.length > 0) {
                cssCreate(classesToUpdate);
            }
        }
        else {
            throw new Error("There is no abreviationsClass named " + abreviationsClass + ".");
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.updateabreviationsClass = updateabreviationsClass;
function updateabreviationsValue(abreviationsValue, value) {
    try {
        if (exports.abreviationsValues[abreviationsValue.toString()]) {
            exports.abreviationsValues[abreviationsValue] = value;
            var classesToUpdate = [];
            for (var _i = 0, alreadyCreatedClasses_3 = exports.alreadyCreatedClasses; _i < alreadyCreatedClasses_3.length; _i++) {
                var createdClass = alreadyCreatedClasses_3[_i];
                if (createdClass.includes(abreviationsValue)) {
                    classesToUpdate.push(createdClass);
                }
            }
            if (classesToUpdate.length > 0) {
                cssCreate(classesToUpdate);
            }
        }
        else {
            throw new Error("There is no abreviationsValue named " + abreviationsValue + ".");
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.updateabreviationsValue = updateabreviationsValue;
function updateabreviationsCombo(combo, values) {
    try {
        if (exports.combos[combo.toString()]) {
            exports.combos[combo] = values;
            var classes2Delete = [];
            for (var _i = 0, alreadyCreatedClasses_4 = exports.alreadyCreatedClasses; _i < alreadyCreatedClasses_4.length; _i++) {
                var createdClass = alreadyCreatedClasses_4[_i];
                if (createdClass.includes(combo)) {
                    classes2Delete.push(createdClass);
                }
            }
            if (classes2Delete.length > 0) {
                var _loop_5 = function (class2Delete) {
                    exports.sheet.deleteRule(__spreadArrays(exports.sheet.cssRules).findIndex(function (cssRule) {
                        return cssRule.cssText.includes(class2Delete);
                    }));
                    exports.alreadyCreatedClasses = exports.alreadyCreatedClasses.filter(function (aC) {
                        return aC !== class2Delete;
                    });
                };
                for (var _a = 0, classes2Delete_1 = classes2Delete; _a < classes2Delete_1.length; _a++) {
                    var class2Delete = classes2Delete_1[_a];
                    _loop_5(class2Delete);
                }
                cssCreate();
            }
        }
        else {
            throw new Error("There is no combo named " + combo + ".");
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.updateabreviationsCombo = updateabreviationsCombo;
function updateCssNamesParsed(cssNameParsed, value) {
    try {
        if (exports.cssNamesParsed[cssNameParsed.toString()]) {
            exports.cssNamesParsed[cssNameParsed] = value;
            var classesToUpdate = [];
            for (var _i = 0, alreadyCreatedClasses_5 = exports.alreadyCreatedClasses; _i < alreadyCreatedClasses_5.length; _i++) {
                var createdClass = alreadyCreatedClasses_5[_i];
                if (createdClass.includes(cssNameParsed)) {
                    classesToUpdate.push(createdClass);
                }
            }
            if (classesToUpdate.length > 0) {
                cssCreate(classesToUpdate);
            }
        }
        else {
            throw new Error("There is no cssNameParsed named " + cssNameParsed + ".");
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.updateCssNamesParsed = updateCssNamesParsed;
function updateClasses(classesToUpdate) {
    cssCreate(classesToUpdate);
}
exports.updateClasses = updateClasses;
function deleteColor(color) {
    try {
        if (!!exports.colors[color.toString()]) {
            delete exports.colors[color];
        }
        else {
            throw new Error("There is no color named " + color + ".");
        }
    }
    catch (err) {
        consoleLog("error", { err: err }, exports.styleConsole);
    }
}
exports.deleteColor = deleteColor;
function clearAllColors() {
    exports.colors = {};
    consoleLog("info", { colors: exports.colors }, exports.styleConsole);
}
exports.clearAllColors = clearAllColors;
/* Debuging */
function changeDebugOption() {
    exports.isDebug = !exports.isDebug;
}
exports.changeDebugOption = changeDebugOption;
function changeUseTimerOption() {
    exports.useTimer = !exports.useTimer;
}
exports.changeUseTimerOption = changeUseTimerOption;
function setTimeBetweenReCreate(time) {
    exports.timeBetweenReCreate = time;
}
exports.setTimeBetweenReCreate = setTimeBetweenReCreate;
function unbefysize(value) {
    return value
        .replace(/(\d+)\s*per/g, "$1%")
        .replace(/COM/g, " , ")
        .replace(/CSP/g, "'")
        .replace(/CDB/g, "\"")
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
exports.unbefysize = unbefysize;
function befysize(value) {
    return value
        .replace(/%/g, "per")
        .replace(/\s+,\s+/g, "COM")
        .replace(/'/g, "CSP")
        .replace(/"/g, "CDB")
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
exports.befysize = befysize;
function getStackTrace() {
    var stack;
    try {
        throw new Error("");
    }
    catch (error) {
        stack = error.stack || "";
    }
    stack = stack.split("\n").map(function (line) {
        return line.trim();
    });
    return stack.splice(stack[0] == "Error" ? 2 : 1);
}
exports.getStackTrace = getStackTrace;
function consoleLog(type, thing, style, line, stoper) {
    if (type === void 0) { type = "log"; }
    if (style === void 0) { style = exports.styleConsole; }
    if (line === void 0) { line = null; }
    if (stoper === void 0) { stoper = !exports.isDebug; }
    consoleParser({
        type: type,
        thing: thing,
        style: style,
        line: line,
        stoper: stoper
    });
}
exports.consoleLog = consoleLog;
function consoleParser(config) {
    config.type = config.type ? config.type : "log";
    config.style = config.style ? config.style : exports.styleConsole;
    config.stoper = config.stoper !== undefined ? config.stoper : !exports.isDebug;
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
                    console.log("%c" +
                        (typeof config.thing === "object"
                            ? JSON.stringify(config.thing)
                            : config.thing), config.style);
                    break;
                case "info":
                    console.info("%c" +
                        (typeof config.thing === "object"
                            ? JSON.stringify(config.thing)
                            : config.thing), config.style);
                    break;
                case "error":
                    console.error("%c" +
                        (typeof config.thing === "object"
                            ? JSON.stringify(config.thing)
                            : config.thing), config.style);
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
exports.consoleParser = consoleParser;
