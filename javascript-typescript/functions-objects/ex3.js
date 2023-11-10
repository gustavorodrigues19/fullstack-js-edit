// const numberSign = (number) => {
//   if (number > 0) {
//     return "Positivo";
//   } else if (number < 0) {
//     return "Negativo";
//   } else {
//     return "Zero";
//   }
// };

// const numberSign = (number) =>
//   number > 0 ? "Positivo" : number < 0 ? "Negativo" : "Zero";

const numberSign = (number) => {
  if (number > 0) return "Positivo";
  if (number < 0) return "Negativo";
  return "Zero";
};

console.log(numberSign(0));
