"use strict";

function abbrev_name(str) {
  let splitNames = str.trim().split(" ");
  if (splitNames.length > 1) {
    return splitNames[0] + " " + splitNames[1].charAt(0) + ".";
  }
  return splitNames[0];
}
console.log(abbrev_name("Robin Singh")); // Robin s.
