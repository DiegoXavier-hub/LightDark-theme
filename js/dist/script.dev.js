"use strict";

var checkbox = document.getElementById("switch");
var link = document.querySelector("link");
var prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersColorScheme == true) {
  checkbox.checked = true;
}

function clicked() {
  if (checkbox.checked) {
    link.href = "css/style-dark.css";
  } else {
    link.href = "css/style-light.css";
  }
}