

// function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   let cost = Math.floor(money/1.5);
//   console.log("buy " + cost + " bottolse of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return money % 1.5;
// }

// let change = getMilk(4);
// console.log(change);


// function bmiCalculator (weight, height) {

//   let answere = weight / (height * height);
//   return Math.round(answere)
  
// }

// let bmi = bmiCalculator(65, 1.8); 
// console.log(bmi);



// firstName = prompt ("wtf is ur name");
// secondName = prompt("wtf is ur cruches name");

// let random = Math.random();
// random = random * 100;
// random = Math.round(random);

// if (random <= 50){
//   alert (firstName + " and " + secondName + " are " + random + "% copatible" + " yall are trash.");
// } else {
//   alert (firstName + " and " + secondName + " are " + random + "% copatible");
// } 


// function bmiCalculator (weight, height) {
//   let bmi = weight / (height * height);
  
//   if (bmi < 18.5){
//       alert("Your BMI is " + bmi + ", so you are underweight.");
//   }
  
//   if (bmi >= 18.5 && bmi <= 24.9){
//       alert("Your BMI is " + bmi + ", so you have a normal weight.");
//   }
  
//   if(bmi > 24.9){
//       alert("Your BMI is " + bmi + ", so you are overweight.");
//   }
  
  
//   return bmi;
// }




// function isLeap (year) {
    

//     let f4 = year % 4;
//     let o10 = year % 100;
//     let f40 = year % 400;

//     // let foar = f4;
//     // let hundo = o10;
//     // let fundo = f40;

//     if(f4 === 0 ) {
//         let f4 = 0;
        
//     } 
//      else {
//          console.log("no")
//      }

    
//     if (o10 === 0){
//         let o10 = 0;
        
//     } 
//      else{
//          console.log("no")
//      }


//     if(f40 === 0){
//         let f40 = 0;
        
//     }
//      else{
//          console.log("no")
//      }

//      if (f4 = tow && tow === thr) {
//         console.log(yes)
//      }

// }

// if (year % 4 === 0)  {
//     if (year % 100 === 0) {

//     } else{
//         return "a leap";
//     }
// } else{
//     return "not a leap";
// }

// let number = isLeap(2400);

// let gestCheck = ["Elijah","Amelia","Charlotte","Noah","Emma","Liam","Olivia","Elijah"];
// let guestName = prompt("whats ur name");

// console.log(gestCheck.includes(guestName));

//  if (gestCheck.includes(guestName)){
//     alert(true);
//  } else {
//      alert(false);
//  }

var outPut = [];
var count = 1;

function a (){
    if (outPut % 3 === 0){
        outPut.push("b");
    }else{
        outPut.push(outPut);
    }

    

    console.log(outPut);
}











// if(output % 5 === 0){
//     output.push ("Buzz");
// }else{
//     output.push (count);
// }

// if(output % 3 === 0 && output % 5 === 0){
//     output.push ("fizzBuzz");
// }else{
//     output.push (count);
// }
