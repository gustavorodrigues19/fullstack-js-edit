const prompt = require("prompt-sync")();

const minutesInput = prompt("Digite os minutos: ");

const minutesParsed = parseInt(minutesInput, 10);
const hours = Math.floor(minutesParsed / 60);
const minutes = minutesParsed % 60;

console.log(`${hours}:${minutes}`);
