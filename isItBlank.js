"use strict";

function is_Blank(string) {
  return string === "";
//   return string.trim() === ""; // option two
}
console.log(is_Blank(""));
//console.log(is_Blank("         ")); // option two
console.log(is_Blank("abc"));
