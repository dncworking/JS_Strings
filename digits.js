"use strict";

function getDigits() {
  let text = "h3ll0 w0rd3";
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= "0" && char <= "9") {
      result += char;
    }
  }
  return Number(result);
}
console.log(getDigits());
