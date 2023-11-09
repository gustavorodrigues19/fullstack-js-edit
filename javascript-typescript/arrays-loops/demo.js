///

// access array positions
// console.log(numbersList[0]);

// push items to array
// numbersList.push(70);
// console.log(stringsList);

// for loop
// let text = "";
// for (let i = 0; i < stringsList.length; i++) {
//   if (stringsList[i]) {
//     text += stringsList[i] + " ";
//   } else {
//     text += "u ";
//   }
// }
// const emptyString = "";
// if (!emptyString) {
//   console.log("empty string");
// }
// console.log(text);

// while
// let text = "";
// let i = 0;
// while (i < text.length) {
//   text += stringsList[i] + " ";
//   i++;
// }
// console.log(text);

// const stringsList = ["a", "b", "c", "d"];
// for (let x of stringsList) {
//   console.log(stringsList.indexOf(x));
// }

// map
const stringsList = ["a", "b", "c", "d"];
const mappedList = stringsList.map((item, index) => item + index);

console.log(mappedList);

// foreach
const arr = [];
stringsList.forEach((item, index) => {
  arr.push(item + index);
});
console.log(arr);
// filter
const elem = stringsList
  .filter((_, index) => index !== 1)
  .map((x) => x + "a")
  .find((x) => x === "ca");

console.log(elem);
// find
// const foundItem = stringsList.find((item, index) => index === 0);
// console.log(foundItem);
// reduce(advanced)

const numbersList = [10, 20, 30];
const sum = numbersList.reduce((acc, item) => acc + item, 0);
const text = stringsList.reduce((acc, item) => acc + item, "bla");
console.log(sum);
console.log(text);

let sumFor = 0;
for (let i = 0; i < numbersList.length; i++) {
  sumFor += numbersList[i];
}

console.log(sumFor);
