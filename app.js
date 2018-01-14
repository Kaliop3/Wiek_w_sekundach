const rs = require("readline-sync");
const age = rs.question("Podaj date (rrrr,mm,dd) ");
let today = new Date();
let birthday = new Date(...age.split(","));
let timeOfLive = today.getTime() - birthday.getTime();
timeOfLive = timeOfLive / 1000;
console.log("Przeżyłeś już " + timeOfLive + " sekund");

