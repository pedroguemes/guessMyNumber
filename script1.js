'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest===true) hasDriversLicense=true;
// if (hasDriversLicense) console.log('I can drive :D');

//------------------------FUNCTIONS----------------------

// function logger (){
//     console.log("my name is jonas");
// }
//calling / runing /invoking function
// logger ();
// logger ();
// logger ();

// function fruitProcessor (apples, oranges){
    // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const juiceOffered = fruitProcessor (5, 0);
// console.log(juiceOffered);
// console.log(fruitProcessor(3,7));

// console.log(fruitProcessor(4, 3));

//                                             FUNC   DECLARATION :
// function calcAge1(birthYear) {                           
//     const age = 2021 - birthYear;
//     return age;
// }

// const age1 = calcAge1(1998);
// console.log(age1);

//                                                 function EXPRESSION:

// const calcAge2 = function (birthYear){
//     return 2021 - birthYear;
// }

// const age2 = calcAge2 (1997);
// console.log(age2);

//                                         function ARROW: (shorter function expression)

// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3 (1999);
// console.log(age3); 

//example 2
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
    // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1962, "Louis"));
// console.log(yearsUntilRetirement(1998, "Pedro"));

//                                                           FUNCTION INSIDE A FUNCTION:

// const cutPieces= function (fruit)  {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutPieces (apples);
//     const orangePieces = cutPieces (oranges);

//     const juice = ` Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// };

// console.log(fruitProcessor(2,3)); 

// repaso 

// const calcAge = function (birthYear){
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName)  {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){

//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`)
//         return -1;
//     }

//     // return retirement;
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1938, "Pedro"));
// console.log(yearsUntilRetirement(1962, "Louis"));

//                       ------------------------------------   praktis

//  const calcEdad = function (añoNacimiento){
//      return 2021 - añoNacimiento; 
//  }
//  const añosParaJubilarse = function (añoNacimiento, nombre){
//      const edad = calcEdad (añoNacimiento);
//      const jubilacion = 65 - edad;
     
//      if (jubilacion > 0){
//          console.log(`${nombre} se jubila en ${jubilacion} años`);
//          return jubilacion;
//         }
//         else {
//             console.log(`${nombre} ya se jubilo.`);
//             return -1;
//         }
        
//     }

//  console.log(añosParaJubilarse(1998, "Pdro"));
//  console.log(añosParaJubilarse(2019, "Kuro"));
//  console.log(añosParaJubilarse(1956, "Luis"));

//                                                          A R R A Y S :


// const friends = ['Pedro', 'Kuro', 'Kiara', 'Rumbi'];

// log the whole array
// console.log(friends);

//log a specific element in the array
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

//log the number of elements in the array

// console.log(friends.length);

// to get the last element in the array:

// console.log(friends[friends.length - 1]);

// modify the array in a certain position element
// friends [1]= 'Kurama';
// console.log(friends);

// the elements cn be different types of data and redirected from another codes result value (even other arrays)

// const firstNombre = 'Pedro';
// const pedro = [firstNombre, 'Guemes', 2021-1998, 'estudiante de programacion', friends];
// console.log(pedro);
// console.log(pedro.length);

// ejercicio:

// const calcAge = function (birthYear){
    // return 2021 - birthYear;
// }

// const años = [1998, 1999, 1997, 1996];
// console.log(años);

// console.log(calcAge(años[0]));
// console.log(calcAge(años[1]));

// console.log(calcAge(años[años.length - 1]));

// const edades =[calcAge(años[0]), calcAge(años[1]), calcAge(años[años.length - 1])];
// console.log(edades);

//-----    ---------------- - - -          ---------A R R A Y   METHODS------------------------------

// const friends = ['Pedro', 'Kuro', 'Kiara', 'Rumbi'];

//-------PUSH METHOD. ADDS ELEMENTS TO THE END OF AN ARRAY---- agrega elementos

// let newLength = friends.push('pampi');
// console.log(friends);
// console.log(newLength);


//---------------------UNSHIFT---------(LIKE PUSH BUT ADDS FIRST)(both methods return a value of the new length)

// friends.unshift('bob');
// console.log(friends);

//-------------------------POP METHOD --------- opposite of the push method (removees elements)
//-----------------(it returnes what it took as value(as saved in popped))
// let popped = friends.pop();
// console.log(popped);
// friends.pop();
// console.log(friends);

//------------------------SHIFT (OPPOSITE TO UNSHIFT DUH)it returnes what it took as value too
// friends.shift();
// console.log(friends);

//-------------------------------------(POSITION IN THE ARRAY) INDEX OF--(returns -1 if its not included)
// console.log(friends.indexOf('Kuro'));

//-----------------------------------INCLUDES (TRUE IF ITS INCLUDED AND FALSE IF ITS NOT) strict checked(===)string vs number false)
// console.log(friends.includes('Kiara'));
// console.log(friends.includes('Delfina'));

// if (friends.includes('Pedro')) {
//     console.log('You have a friend called Pedro.');
// }


//------------------------------------------------------------OBJECTS---------------------------

// const pedroObject = {
//         firstName: 'Pedro',
//         lastName: 'Güemes',
//         age: 2021-1998,
//         job: 'unemployed',
//         friends: ['Miguel', 'Pedro', 'Lucas'],
//         love: 'Pupi 💔',
//         city: 'Buenos Aires, ciudad de la furia'
// };
// console.log(pedroObject);
// console.log(pedroObject.lastName);
// console.log(pedroObject.job);
// console.log(pedroObject['age']);

// (cada dato (nombre,edad,etc)es una 'propiedad' que es una variable

// const nameKey = 'Name';
// console.log(pedroObject['first'+ nameKey]);
// console.log(pedroObject['last'+ nameKey]);
// console.log(pedroObject['last'+ nameKey]+' '+pedroObject['first'+ nameKey]);

// const interestedIn= prompt(`What do you want to know about Pedro? choose between firstName, lastName, age, job, city, love and friends`);

// if (pedroObject[interestedIn]){console.log(pedroObject[interestedIn]);
// } else{
//     console.log('wrong request');
// }
// pedroObject['license']= 'yes, can drive';
// console.log(pedroObject);

// Challenge

// console.log(`${pedroObject.firstName}  tiene ${pedroObject.friends.length} amigos y su mejor amigo se llama ${pedroObject.friends[0]}.`);

//--------------------------------OBJECT METHODS--------------------------
//THIS lets us call variables from the object it is called in (in every object method)

// const pedroObject = {
//     firstName: 'Pedro',
//     lastName: 'Güemes',
//     birthYear: 1998,
//     job: 'artista',
//     friends: ['Miguel', 'Pedro', 'Lucas'],
//     hasDriversLicense: true,

    //--- calcAge: function (birthYear){
    //     return 2021 - birthYear;
    // }
 
    //---- calcAge: function (){
        // console.log(this);
    //     return 2021 - this.birthYear;
    // }

//     calcAge: function (){
//         this.age = 2021- this.birthYear;
//         return this.age;
//     },
    
//     getSummary: function(){
//         return `${this.firstName} ${this.lastName} es un ${this.job} de ${pedroObject.calcAge()} años.Y ${this.hasDriversLicense ? 'tiene' :'no tiene'} licencia de conducir.`
//     }
    
// };

//---console.log(pedroObject.calcAge(pedroObject.birthYear));
// si el objeto cambiara el nombre, usando THIS, el codigo continuaria corriendo correctamente
//con control+D editas texto de a varias palabras iguales

// console.log(pedroObject.calcAge());
// console.log(pedroObject.age);
// console.log(pedroObject.age);

//challenge
// console.log(pedroObject.getSummary());

//-----     L         O              O            P           S --------------------------

// console.log('lifting weights repetition 1');

// ''for'' loop keeps running while condition is true

// for(let rep = 6; rep <= 7; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
//     }

//----4---7------

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// const types= [];

// for(let i = 0; i < jonas.length; i++){
    // reading jonas array
    // console.log(jonas[i], typeof jonas[i]);
// Filling 'types' array
// types[i]= typeof jonas [i];
    // types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1998, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i<years.length; i++) {
    // ages.push(2021 - years [i]);
// }

// console.log(years, ages);

//continue------------and-------break-----------------------!!!!!!
// console.log('--ONLY STRINGS--')

// for(let i = 0; i < jonas.length; i++){

    // if(typeof jonas[i]!=='string') continue;
    // console.log(jonas[i], typeof jonas[i]);
// }
//---------
// console.log('--BREAK WITH NUMBER--');

// for(let i = 0; i < jonas.length; i++){

    // if(typeof jonas[i]==='number') break;
    // console.log(jonas[i], typeof jonas[i]);
// }






//////////////////////////////////////////////////////////////////////////////////////////////////-------------------------------------------------------------------------------------------------------------------------------
const nombre = "Pedro";
// const apellido = "Guemes";
// const empleo = "desempleado";
// const añoDeNacimiento = 1998;
// const año = 2021;

// const pedroGuemes = "Soy "+ nombre + " " + apellido + ", un "+ empleo + " de " + (año-añoDeNacimiento) + " años.";
// console.log(pedroGuemes);

// const pedroGueme = `Soy ${nombre} ${apellido}, un ${empleo} de ${año-añoDeNacimiento} años.`;
// console.log(pedroGueme)

// console.log(`string`);


