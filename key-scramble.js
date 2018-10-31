"use strict";

module.exports = scramble;

function newchar(base, max) {
  return String.fromCharCode(base.charCodeAt(0) + Math.floor(Math.random() * max))
}

function scramble(key, resetNumber) {

  var newkey = "";
  String(key).split("").forEach((c) => {
    if (resetNumber && resetNumber === "--resetNumber") {
      if (c >= "0" && c <= "9") {
        newkey += "9";
      } else {
        newkey += c;
      }
    } else {
      if (c >= "A" && c <= "Z") {
        newkey += newchar("A", 26);
      } else if (c >= "a" && c <= "z") {
        newkey += newchar("a", 26);
      } else if (c >= "0" && c <= "9" && !resetNumber) {
        newkey += newchar("0", 10);
      } else {
        newkey += c;
      }
    }
  })
  return newkey;
}
