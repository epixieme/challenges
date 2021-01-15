import { now } from './utility.js'
console.log(now ());
const getClockTemplate = id => `<div id="clock-${id}"" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
</div>`

const startClock = () => {
    document.body.innerHTML = getClockTemplate(0)
}

startClock()

const hr = document.querySelector(".clock .hour-hand");
const mn = document.querySelector(".clock .minute-hand");
const sc = document.querySelector(".clock .second-hand");

setInterval(() => {
    let time = now ();
    let houDeg =  270 + (3600 * time.hours + 60 * time.minutes + time.seconds) / 120;
    let minDeg = 270 + (60 * time.minutes + time.seconds) / 10;
    let secDeg = 270 + 6 * time.seconds;
    
  
hr.style.transform = `rotate(${houDeg}deg)`;
sc.style.transform = `rotate(${secDeg}deg)`;
mn.style.transform = `rotate(${minDeg}deg)`;
},1000);

background: url(https://github.com/iashaff/Video-for-web/blob/master/clock.png?raw=true),
    radial-gradient(circle, rgb(110, 66, 88) 0%, rgb(90, 37, 60) 15%, rgba(61, 14, 46) 40%); 

      background: radial-gradient(circle at 0% 100%,rgba(96, 16, 48, 0) 9px,#324 10px,rgba(96, 16, 48, 0) 11px)0px 10px,radial-gradient(rgba(96, 16, 48, 0) 9px,#324 10px,rgba(96, 16, 48, 0) 11px),#8a3;

      https://scrimba.com/scrim/co8ed4065b61ee16bb1b52e96?a=52944.0.3.L15