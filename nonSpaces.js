"use strict";

let text = "hello my world";

function nonSpaces() {
  let length = text.split(" ").join("").length;
  return length;
}
console.log(nonSpaces());
