"use strict";

if (!colors) {
  var colors = {};
}

if (!newColors) {
  var newColors = [];
}

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

newColors.push(colorsDefault);
newColors.push(colorsLP);

for (let nColor of newColors) {
  Object.keys(nColor).forEach((key) => {
    colors[key] = nColor[key];
  });
}

var colorsNames = [];
Object.keys(colors).forEach((key) => {
  colorsNames.push(key);
});
