"use strict";

var colorsDefault = {
  primary: "#0d6efd !default",
  secondary: "#6c757d !default",
  success: "#198754 !default",
  info: "#0dcaf0 !default",
  warning: "#ffc107 !default",
  danger: "#dc3545 !default",
  light: "#f8f9fa !default",
  dark: "#000 !default",
  mystic: "#6610f2 !default",
  old: "#EEEDA0 !default",
  beast: "#fd7e14 !default",
  tree: "#5A311D !default",
};

if (!colors) {
  var colors = {};
}

/* colorsDefault.forEach(([key, value]) => {
  colors.key = value;
}); */

Object.keys(colorsDefault).forEach(key => {
  console.log(key, colorsDefault[key]);
});

console.log(colors);

