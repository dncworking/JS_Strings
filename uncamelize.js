"use strict";

function uncamelize(str, separator = " ") {
  return str.replace(/([A-Z])/g, separator + "$1").toLowerCase();
}
console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_')); 
