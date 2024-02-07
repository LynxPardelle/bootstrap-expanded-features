import { BootstrapExpandedFeaturesService } from "./service";
/* Interfaces */
import { IConsoleParser, IBPS } from "./interfaces";
/* Singletons */
import { ValuesSingleton } from "./singletons/valuesSingleton";
/* Functions */
import { abreviation_traductors } from "./functions/abreviation_traductors";
import { color_transform } from "./functions/color_transform";
import { console_log } from "./functions/console_log";
import { css_camel } from "./functions/css-camel";
import { cssCreate as cssCreateFunc } from "./functions/cssCreate";
import { debugg_options } from "./functions/debugg_options";
import { manage_abreviations } from "./functions/manage_abreviations";
import { manage_bps } from "./functions/manage_bps";
import { manage_classes } from "./functions/manage_classes";
import { manage_colors } from "./functions/manage_colors";
import { manage_combos } from "./functions/manage_combos";
import { manage_CSSNamesParsed } from "./functions/manage_CSSNamesParsed";
import { manage_CSSRules } from "./functions/manage_CSSRules";
import { manage_sheet } from "./functions/manage_sheet";
import { utility_configurations } from "./functions/utility_configurations";
/* Declarations */
export const service: any = new BootstrapExpandedFeaturesService();
export const values: ValuesSingleton = ValuesSingleton.getInstance();
export const functions: any = {
  ...abreviation_traductors,
  ...color_transform,
  ...console_log,
  ...css_camel,
  ...cssCreateFunc,
  ...debugg_options,
  ...manage_abreviations,
  ...manage_bps,
  ...manage_classes,
  ...manage_colors,
  ...manage_combos,
  ...manage_CSSNamesParsed,
  ...manage_CSSRules,
  ...manage_sheet,
  ...utility_configurations,
};
export const cssCreate = (
  updateClasses2Create: string[] | null = null,
  primordial: boolean = false
) => service.cssCreate(updateClasses2Create, primordial);
export const createCSSRules = (rule: string) => service.createCSSRules(rule);
export const colorToRGB = (color: string) => service.colorToRGB(color);
export const RGBToRGBA = (rgb: number[], alpha: number) =>
  service.RGBToRGBA(rgb, alpha);
export const parseRGB = (rgba: string) => service.parseRGB(rgba);
export const HexToRGB = (Hex: string) => service.HexToRGB(Hex);
export const HSLToRGB = (HSL: string) => service.HSLToRGB(HSL);
export const HWBToRGB = (HWB: string) => service.HWBToRGB(HWB);
export const shadeTintColor = (rgb: number[], percent: number) =>
  service.shadeTintColor(rgb, percent);
export const cssValidToCamel = (st: string) => service.cssValidToCamel(st);
export const camelToCSSValid = (st: string) => service.camelToCSSValid(st);
/* CRUD */
export const pushCssNamesParsed = (cssNamesParsed: any) =>
  service.pushCssNamesParsed(cssNamesParsed);
export const pushBPS = (bps: IBPS[]) => service.pushBPS(bps);
export const pushColors = (newColors: any) => service.pushColors(newColors);
export const pushAbreviationsValues = (abreviationsValues: any) =>
  service.pushAbreviationsValues(abreviationsValues);
export const pushAbreviationsClasses = (abreviationsClasses: any) =>
  service.pushAbreviationsClasses(abreviationsClasses);
export const pushCombos = (combos: any) => service.pushCombos(combos);
export const getColors = () => service.getColors();
export const getBPS = () => service.getBPS();
export const getAbreviationsClasses = () => service.getAbreviationsClasses();
export const getAbreviationsValues = () => service.getAbreviationsValues();
export const getCombos = () => service.getCombos();
export const getCssNamesParsed = () => service.getCssNamesParsed();
export const getColorsNames = () => service.getColorsNames();
export const getColorValue = (color: string) => service.getColorValue(color);
export const getAlreadyCreatedClasses = () =>
  service.getAlreadyCreatedClasses();
export const getSheet = () => service.getSheet();
export const updateColor = (color: string, value: string) =>
  service.updateColor(color, value);
export const updateAbreviationsClass = (
  abreviationsClass: string,
  value: string
) => service.updateAbreviationsClass(abreviationsClass, value);
export const updateAbreviationsValue = (
  abreviationsValue: string,
  value: string
) => service.updateAbreviationsValue(abreviationsValue, value);
export const updateCombo = (combo: string, values: string[]) =>
  service.updateCombo(combo, values);
export const updateCssNamesParsed = (cssNameParsed: string, value: string) =>
  service.updateCssNamesParsed(cssNameParsed, value);
export const updateClasses = (classesToUpdate: string[]) =>
  service.updateClasses(classesToUpdate);
export const deleteColor = (color: string) => service.deleteColor(color);
export const clearAllColors = () => service.clearAllColors();
export const changeImportantActive = () => service.changeImportantActive();
/* Debuging */
export const changeDebugOption = () => service.changeDebugOption();
export const changeUseTimerOption = () => service.changeUseTimerOption();
export const setTimeBetweenReCreate = (time: number) =>
  service.setTimeBetweenReCreate(time);
export const unbefysize = (value: string) => service.unbefysize(value);
export const befysize = (value: string) => service.befysize(value);
export const consoleLog = (
  type: "log" | "info" | "trace" | "error" = "log",
  thing: any,
  style: string = values.styleConsole,
  line: string | null = null,
  stoper: boolean = !values.isDebug
) => service.consoleLog(type, thing, style, line, stoper);
export const consoleParser = (config: IConsoleParser) =>
  service.consoleParser(config);
/* Init on Window Load */
if (window) {
  window.addEventListener("load", (event: any) => {
    let colors;
    cssCreate();
  });
}
