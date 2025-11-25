"use strict";

function repeat(str, num = 1) {
  return str.repeat(num);
}
console.log(repeat("Ha!")); // "Ha!"
console.log(repeat("Ha!", 2)); // "Ha!Ha!"
console.log(repeat("Ha!", 3)); // "Ha!Ha!Ha!"
