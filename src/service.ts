/* Singleton */
import { ValuesSingleton } from "./singletons/valuesSingleton";
/* Functions */
import { abreviation_traductors } from "./functions/abreviation_traductors";
import { color_transform } from "./functions/color_transform";
import { console_log } from "./functions/console_log";
import { css_camel } from "./functions/css-camel";
import { cssCreate } from "./functions/cssCreate";
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
export class BootstrapExpandedFeaturesService {
  constructor() {
    Object.assign(
      this,
      ValuesSingleton.getInstance(),
      abreviation_traductors,
      color_transform,
      console_log,
      css_camel,
      cssCreate,
      debugg_options,
      manage_abreviations,
      manage_bps,
      manage_classes,
      manage_colors,
      manage_combos,
      manage_CSSNamesParsed,
      manage_CSSRules,
      manage_sheet,
      utility_configurations
    );
  }
}
