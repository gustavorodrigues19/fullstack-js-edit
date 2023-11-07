const prompt = require("prompt-sync")();

const weekDay = prompt("Digite o dia da semana:");

switch (weekDay) {
  case "domingo":
    console.log("Primeiro dia da semana");
    break;
  case "segunda":
    console.log("Segundo dia da semana");
    break;
  case "terça":
    console.log("Terceiro dia da semana");
    break;
  case "quarta":
    console.log("Quarto dia da semana");
    break;
  case "quinta":
    console.log("Quinto dia da semana");
    break;
  case "sexta":
    console.log("Sexto dia da semana");
    break;
  case "sábado":
    console.log("Sétimo dia da semana");
    break;
  default:
    console.log("Dia não encontrado");
    break;
}
