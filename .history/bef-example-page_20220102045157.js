var tabBackground = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-background")
); // Returns a Bootstrap tab instance
var tabButtonBackground = document.getElementById("nav-background-tab");
var tabBorder = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-border")
); // Returns a Bootstrap tab instance
var tabButtonBorder = document.getElementById("nav-border-tab");
var tabButtons = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-buttons")
); // Returns a Bootstrap tab instance
var tabButtonButtons = document.getElementById("nav-buttons-tab");
var tabOpacity = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-opacity")
); // Returns a Bootstrap tab instance
var tabButtonOpacity = document.getElementById("nav-opacity-tab");
var tabPosition = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-position")
); // Returns a Bootstrap tab instance
var tabButtonPosition = document.getElementById("nav-position-tab");
var tabShadows = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-shadows")
); // Returns a Bootstrap tab instance
var tabButtonShadows = document.getElementById("nav-shadows-tab");
var tabSizing = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-sizing")
); // Returns a Bootstrap tab instance
var tabButtonSizing = document.getElementById("nav-sizing-tab");
var tabText = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-text")
); // Returns a Bootstrap tab instance
var tabButtonText = document.getElementById("nav-text-tab");
var tabZIndex = bootstrap.Tab.getOrCreateInstance(
  document.getElementById("nav-z-index")
); // Returns a Bootstrap tab instance
var tabButtonZIndex = document.getElementById("nav-z-index-tab");
console.log(tabBackground);

var tabEls = document.querySelectorAll('button[data-bs-toggle="tab"]');
for (let tabEl of tabEls) {
  console.log(tabEl);
  tabEl.addEventListener("shown.bs.tab", function (event) {
    event.target; // newly activated tab
    console.log(event.target);
    if (event.target.classList.contains("bef-text-dark")) {
      event.target.classList.remove("bef-text-dark");
    }
    if (event.target.classList.contains("bef-bg-futurePop__OPA__0")) {
      event.target.classList.remove("bef-bg-futurePop__OPA__0");
    }
    event.target.classList.add("bef-text-futurePop");
    event.target.classList.add("bef-bg-futurePop__OPA__0_03");
    event.relatedTarget; // previous active tab
    console.log(event.relatedTarget);
    if (event.target.classList.contains("bef-text-futurePop")) {
      event.relatedTarget.classList.remove("bef-text-futurePop");
    }
    if (event.target.classList.contains("bef-bg-futurePop__OPA__0_03")) {
      event.relatedTarget.classList.remove("bef-bg-futurePop__OPA__0_03");
    }
    event.relatedTarget.classList.add("bef-text-dark");
    event.relatedTarget.classList.add("bef-bg-futurePop__OPA__0");
  });
}
