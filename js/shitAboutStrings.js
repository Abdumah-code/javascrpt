// let myname = "king";
// myname = "abdu";

// let urname = prompt("Whats ur input bitch?");
// alert("Hello " + urname);
// alert("my input is " + myname + " ,waddup");


// let message = "whats up ";
// message.length;
// let bitchName = "bitch";
// alert (message + bitchName);

// character counter js code to inplement in character wounder website
// let bars = prompt("write what u want fam");
// let slice = bars.slice(0,81);
// let textCount = bars.length;
// let whatsLeft = (280 - textCount);
// alert (slice);


// const bars = document.getElementById('bars');
// let textCount = bars.length;
// bars.value = 'textCount';
// console.log(bars.value);


let question = prompt("Whats ur name");
let input = (question);

let slice = input.slice(0,1);
slice = slice.toUpperCase();

rest = input.slice(1,input.length);
restOfName = rest.toLowerCase();

alert ("Hello " + slice + restOfName + "!");

