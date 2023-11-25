const date = new Date();
console.log(date); // Mostra a data e hora atual

const date2 = new Date();
console.log(date2.getFullYear()); // Mostra o ano atual
console.log(date2.getMonth()); // Mostra o mês atual (0-11, onde 0 é janeiro)
console.log(date2.getDate()); // Mostra o dia do mês atual (1-31)
console.log(date2.getHours()); // Mostra a hora atual (0-23)
console.log(date2.getMinutes()); // Mostra o minuto atual (0-59)
console.log(date2.getSeconds()); // Mostra o segundo atual (0-59)
console.log(date2.getMilliseconds()); // Mostra o milissegundo atual (0-999)

const date3 = new Date();
date3.setFullYear(2022);
date3.setMonth(11);
date3.setDate(31);
date3.setHours(23);
date3.setMinutes(59);
date3.setSeconds(59);
date3.setMilliseconds(999);
console.log(date3); // Mostra "2022-12-31T23:59:59.999Z"

const date4 = new Date();
console.log(date4.getTime()); // Mostra o tempo em milissegundos desde a Epoch (1 de janeiro de 1970 00:00:00 UTC)

const date5 = new Date();
console.log(date5.toString()); // Mostra a data e hora como uma string
