"use strict";

if (!colors) {
  var colors = {};
}

if(!newColors) {
  var newColors = [];
}

var colorsDefault = {
  primary: "#0d6efd !default",
  secondary: "#6c757d !default",
  success: "#198754 !default",
  info: "#0dcaf0 !default",
  warning: "#ffc107 !default",
  danger: "#dc3545 !default",
  light: "#f8f9fa !default",
  dark: "#000 !default",
};

var colorsLP = {
  mystic: "#6610f2 !default",
  old: "#EEEDA0 !default",
  beast: "#fd7e14 !default",
  tree: "#5A311D !default",
  blood: "#8A0707 !default",
  pig:  "#d63384 !default",
  friend: "#20c997 !default"
}

newColors.push(colorsDefault);
newColors.push(colorsLP);

for (let nColor of newColors) {
  Object.keys(nColor).forEach(key => {
    console.log(key, nColor[key]);
    colors[key] = nColor[key];
  });
}

var colorsNames = [];
for (let nColor of colors) {
  Object.keys(nColor).forEach(key => {
    console.log(key, nColor[key]);
    colorsNames.push(key);
  });
}

