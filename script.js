console.log('JS linked');

function setDate(){
    const now = new Date();
    const secDegrees = 90 + now.getSeconds()*6;
    const minDegrees = 90 + (now.getMinutes*6); //+ (secDegrees/360);
    const hourDegrees = 90 + now.getHours()*12;
    secHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    //Every call to setDate, you want to update the second hand
}


//Set interval is a built-in function that calls a function every x ms
setInterval(setDate, 1000);

var secHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

