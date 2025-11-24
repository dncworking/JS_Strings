"use strict";

let words = ["hello", "labas", "privet"];
let number = 6;

function getWordsLenght() {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= number) {
      newArray.push(word);
    }
  }
  return newArray;
}

console.log(getWordsLenght());
