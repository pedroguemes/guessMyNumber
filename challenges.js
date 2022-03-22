'use strict';

// //                                                              CHALLENGE 1

// const markHeight = 1.69;
// const markMass = 78;

// const johnHeight = 1.95;
// const johnMass = 92;

// const markBmi1 = markMass / markHeight ** 2 ;
// const johnBmi1 = johnMass / johnHeight ** 2 ;

// console.log(markBmi1);
// console.log(johnBmi1);

// const markHigherBmi = (markBmi1 > johnBmi1);
// console.log(markHigherBmi);

// const markHeight2 = 1.88;
// const markMass2 = 95;

// const johnHeight2 = 1.76;
// const johnMass2 = 85;

// const markBmi2 =  markMass2 / (markHeight2 * markHeight2);
// const johnBmi2 =  johnMass2 / (johnHeight2 * johnHeight2);

// console.log(markBmi2,johnBmi2);

// const markHigherBmi2 = (markBmi2 > johnBmi2);
// console.log(markHigherBmi2);




// //                                                          CHALLENGE 2

// if (markBmi1 > johnBmi1) {
//     console.log(`Mark's BMI (${markBmi1}) is higher than John's (${johnBmi1})!`);
//     } else { console.log(`John's BMI (${johnBmi}) is higher than Mark's ${markBmi1}!`);}

//                                                  CHALLENGE 3

// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110)/3;
// console.log(scoreDolphins, scoreKoalas);
 
// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy!🏆");

// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy!🏆");
// } else {
//     console.log("Its a draw!");
// }

// bonus 1 chllng 3

// const scoreDolphins = (97+112+80)/3;
// const scoreKoalas = (109+95+50)/3;
// console.log(scoreDolphins, scoreKoalas);
 
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy!🏆");

// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy!🏆");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Its a draw!");
// } else {
//      console.log("No one won the trophy yet 😐.");
// }

//                                                              CHALLENCH FOUR


// let bill = 430;

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

// console.log(`The bill was ${bill}$, the tip was ${tip}$ and the total value ${tip+bill}$`);




   // --------------------------------- CHALLENGE 1 (part 2) FUNCTIONS
// const calcAverage = (a, b, c) => (a + b + c)/3;

// console.log(calcAverage(3,4,5));


// const scoreDolphins1 = calcAverage(44, 23, 71);
// const scoreKoalas1 = calcAverage(65, 54, 49);

// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);


// console.log(scoreDolphins1, scoreKoalas1);

// const checkWinner = function (avgDolphins, avgKoalas){
//     if (avgDolphins>= 2 * avgKoalas){
//         console.log(`Dolphins win the trophy! (${avgDolphins} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas win the trophy! (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("no team wins.");
//     }
// }

// checkWinner(scoreDolphins1, scoreKoalas1);
// checkWinner(scoreDolphins2, scoreKoalas2);


// -------------------------------------------------------CHALLENGE 2 (part 2) METHODS---------------------
// repeticion challenge 4 (de ternary conditional ?) function
// ch4-----------------------------------
// const bill = 275;
//const bill = 40;
//const bill = 430;
// const tip = bill<= 300 && bill >= 50 ?  bill * 0.15 : bill * 0.2;
// console.log(tip);
// console.log(`the bill was $${bill}, the tip was $${tip}, and the total value $${bill+tip}.`);
//ch4--fin-----------------

//  const calcTip = function (bill){
//    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//  }
// const bills = [125, 555, 444];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(bills, tips);
// console.log(tips[2]);

// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(totals);

//---------------------CHALLENGE 3 PART 2----------------------------------------------------

//mass / height ** 2

// const mark = {
//    fullName: 'Mark Miller',
//    mass: 78,
//    height:1.69,

//    calcBmi: function (){
//        this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//    }
// }

// const john = {
//    fullName: 'John Smith',
//    mass:92,
//    height:1.95,

//    calcBmi: function (){
//       this.bmi = this.mass / (this.height * this.height);
//      return this.bmi;
//   }
// }

// mark.calcBmi();
// john.calcBmi();
// console.log(john);
// console.log(mark);
// console.log(mark.bmi);
// console.log(john.bmi);

// if (john.bmi > mark.bmi) {
//    console.log(`John's BMI (${john.bmi}) is higher than Mark's BMI(${mark.bmi}).`);
// } else if (john.bmi<mark.bmi){
//    console.log(`Mark's BMI (${mark.bmi}) is higher than John's BMI(${john.bmi}).`);   
// }



// developerSkills Challenge#1:

//data1:[17,21,23]
//data2:[12,5,-5,0,4]

// const temperatures1 = [17,21,23]
// const temperatures2 = [12,5,-5,0,4]

// const printForecast = function (arr){
//    let str = ''
//    for (let i = 0; i < arr.length; i++) {
//             str += `${arr[i]}ºC in ${i + 1} days ... `
//    }
//    console.log('... '+str)
// }

// printForecast(temperatures1)