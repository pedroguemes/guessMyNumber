// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest===true) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive!😁');


// FUNCTIONS----------------------------------------------------

// function logiGato (){
//     console.log('Soy un programador de Java Script');
// }

// calling/running// invoking a function

// logiGato();
// logiGato();
// logiGato();

//------------------------------------------

// function procesadorDefruta (naranjas, bananas){
//     console.log(naranjas, bananas);
//     const licuadito = `Licuadito con ${naranjas} naranjas y ${bananas} bananas.`;
//     return licuadito;
// }

// const licuadoOfrecido = procesadorDefruta (3,2);
// console.log(licuadoOfrecido);
// console.log(procesadorDefruta(2, 2));
// console.log(procesadorDefruta(4, 2));

//----------------------------------------
// f u n c i o n declarada (declaration)
// console.log(' ')
// function calcEdad1 (añoNac) {
//     const edad = 2021 - añoNac;
//     return edad;
// }

// const edad1 = calcEdad1(1998);
// console.log(edad1);

//---------------funcion expression

// const calcEdad2 = function (añoNac){
//     return 2021 - añoNac;
// }

// const edad2 = calcEdad2 (1996);
// console.log(edad2);

//-------- Funcion (arrow)

// const  calcEdad3 = añoNac => 2021 - añoNac;
// const edad3 = calcEdad3 (1997);
// console.log(edad3);

//--------ejemplo 2 arrw
 
// const añosParaJubilarse = (añoNac, primerNombre) => {
//     const edad = 2021 - añoNac;
//     const jubilacion = 65 - edad;
//     return `${primerNombre} se jubila en ${jubilacion} años`
// }
// console.log(añosParaJubilarse(1998, 'Pedro'));
// console.log(añosParaJubilarse(1990, 'Kuro'));
// console.log(añosParaJubilarse(1948, 'Fede'));
// console.log(añosParaJubilarse(1962, 'Luis'));

//-- f u n c i o n  Dentro de otrA n o i c n u f ---

// const pedacitos = function (fruta) {
//     return fruta * 4;
// }

// const procesadorDeFruta = function (manzanas, peras) {
//     const pedacitosDeManzana = pedacitos (manzanas);
//     const pedacitosDePera = pedacitos (peras);

//     const jugo  = `Jugo con ${pedacitosDeManzana} pedacitos de manzana y ${pedacitosDePera} de pera`
//     return jugo;
// }

// console.log(procesadorDeFruta(2, 3));


///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////
///////////
/////////
/////


// const añosParaJubilarse = (añoNac, primerNombre) => {

    // const edad = 2021 - añoNac;
    // const jubilacion = 65 - edad;
    // return `${primerNombre} se jubila en ${jubilacion} años.`;
// }

// console.log(añosParaJubilarse(2001, "Javier"));




//////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////
/////////////////////////////
///////////////////
/////////
/////
///

//  var day = "sunday";
// day = String(prompt ("what day is it?"));

// switch (day){
//     case "monday": // day===monday
//         console.log("gym 8 am/ JavaScript 10 am /12 am lunch / 13pm work / 17pm yoga");
//         console.log("Monday, you are. We are.");
//         break;
//     case "tuesday":
//         console.log("JavaScript 10 am /12 am lunch / 13pm work / 17pm  walk Kuro");
//         console.log("tuesday.im am that i am")
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("gym 8 am/ JavaScript 10 am /12 am lunch / 13pm work / 17pm muayTai");
//         console.log("wednesday thursday. i love.");
//     break;
//     case "friday":
//         console.log ("Sculpture 8 am/ JavaScript 10 am /12 am lunch / 13pm art / 17pm yoga");
//         console.log("Friday. Silence.");
//     break;
//     case "saturday":
//     case "sunday":
//         console.log("Chill :)");
//         break;
//     default:
//         console.log("just days in engish with no camelcase!");
//     }

// const measureKelvin = function(){
//     const measurement={
//         type: 'temp',
//         unit: 'celsius',
//         value: prompt('Degrees celius:')
//     }
//     console.table(measurement)
//     const kelvin = parseInt(measurement.value, 10) + 273;
//     return kelvin;
// }
// console.log(measureKelvin())
