"use strict";

function string_parameterize(str) {
  return str.split(" ").join("-").toLowerCase().replace(/\./g, "");
}

console.log(string_parameterize("Robin Singh from USA."));
