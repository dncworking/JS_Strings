"use strict";

function is_String(input) {
  return typeof input === "string";
}
console.log(is_String("wiwiwi"));
console.log(is_String([1, 2, 3, 4]));
