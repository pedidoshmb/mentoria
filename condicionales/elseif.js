/*

vamos a pedir hamburguesa sin cebolla o con cebolla, 

*/
let deseaCebolla = false;

if (!deseaCebolla) {
  console.log("hamburguesa sin cebolla");
} else console.log("Hamburguesa con cebolla");

console.log("Línea ****\n");

/*
Tenemos un alumno joaquin y tiene edad de 31 años, quiero comprobar si es mayor de edad para inscribirse al curso */

let edad = 10;
let nombre = "Mauricio Barrios";

if (edad >= 18) {
  console.log(`${nombre} : se puede insbribir al curso`);
} else console.log(`Debes esperar ${nombre} a ser mayor de edad`);

console.log("*\n\n");

console.log("Ejemplos de Else if y if dentro de otro if ****\n");

let edadUno = 10;
let nombreUno = "santiago";

if (edadUno >= 18) {
  console.log(`${nombreUno} Eres mayor de edad`);
  if (edadUno <= 20) {
    console.log(`${nombreUno} Eres todavia un adolecente`);
  } else if (edadUno >= 70) {
    console.log(`Eres un anciano ${nombreUno}`);
  } else console.log("Eres una dulto");
} else {
  console.log("eres un enano");
}

console.log("* VALDIACION AÑOS, con and\n\n");

let year = 2007;

if (year >= 2000 && year <= 2030) {
  console.log("estamos en la era moderna");
} else if (year > 2030) {
  console.log("Estamos era pos moderna");
} else {
  console.log("estamos en la era antigua");
}

console.log("* VALDIACION AÑOS, con OR || \n\n");

// vamos a comparar si el año es igual 7 (2007 - 2017 )

if (year == 2007 || year == 2017 || year == 2027 || year == 2037) {
  console.log("el año acaba en 7");
} else {
  console.log("Año no es conocido");
}
