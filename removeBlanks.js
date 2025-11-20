"use strict";

let sentance = "Hello my name is Dominyka ";

function removeBlanks() {
  return sentance.replace(/ /g, "");
}
console.log(removeBlanks());
