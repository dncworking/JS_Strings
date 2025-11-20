"use strict";

let words = "Fear of missing out";

function getAcronym() {
  return words
    .split(" ")
    .map((words) => words.charAt(0).toUpperCase())
    .join("");
}
console.log(getAcronym());
