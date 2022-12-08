

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


function bmiCalculator (weight, height) {
  let bmi = weight / (height * height);
  
  if (bmi < 18.5){
      alert("Your BMI is " + bmi + ", so you are underweight.");
  }
  
  if (bmi >= 18.5 && bmi <= 24.9){
      alert("Your BMI is " + bmi + ", so you have a normal weight.");
  }
  
  if(bmi > 24.9){
      alert("Your BMI is " + bmi + ", so you are overweight.");
  }
  
  
  return bmi;
}



