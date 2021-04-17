// let d = new Date();
// let year = d.getFullYear() - 2000;
// let month = d.getMonth() + 1;
// let date = d.getDate();
// let hour = d.getHours();
// let minute = d.getMinutes();
// let second = d.getSeconds();

let hourArm = document.getElementById('clock-arm-hour');
let minuteArm = document.getElementById('clock-arm-minute');
let secondArm = document.getElementById('clock-arm-second');
let infoButton = document.getElementById('info-button');
let watchButton = document.getElementById('watch-button');
let titleButton = document.getElementById('title-button');
let infoPage = document.getElementById('info-page');
let analogClock = document.getElementById('clock-analog');
let digitalClock = document.getElementById('clock-digital');
let videos = document.getElementById('videos');

infoButton.onclick = function(){
    digitalClock.style.display = 'none';
    videos.style.display = 'none';
    infoPage.style.display = 'block';
    // analogClock.style.opacity = '0.5';
}

titleButton.onclick = function(){
    digitalClock.style.display = 'block';
    videos.style.display = 'flex';
    infoPage.style.display = 'none';
    // analogClock.style.opacity = '1';
}

function clockAnlog() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    hourArm.style.transform = 'translate(-50%,-50%) rotate(' + (hour*30 - 90) + 'deg)';
    minuteArm.style.transform = 'translate(-50%,-50%) rotate(' + (minute*6 - 90) + 'deg)';
    secondArm.style.transform = 'translate(-50%,-50%) rotate(' + (second*6 - 90) + 'deg)';

    if (hour >= 3 && hour < 9){
        infoButton.style.transform = 'translate(70%, 70%) rotate(' + 270 + 'deg)';
    }
    else if (hour >= 15 && hour < 21){
        infoButton.style.transform = 'translate(70%, 70%) rotate(' + 270 + 'deg)';
    }
    else{
        infoButton.style.transform = 'translate(120%, 50%) rotate(' + 90 + 'deg)';
    }

    if (minute >= 15 && minute < 45){
        watchButton.style.transform = 'translate(70%, 70%) rotate(' + 270 + 'deg)';
    }
    else{
        watchButton.style.transform = 'translate(100%, 100%) rotate(' + 90 + 'deg)';
    }

    if (second >= 15 && second < 45){
        titleButton.style.transform = 'translate(55%, 55%) rotate(' + 270 + 'deg)';
    }
    else{
        titleButton.style.transform = 'translate(70%, 70%) rotate(' + 90 + 'deg)';
    }
}
setInterval(clockAnlog, 1);

let yearSpan = document.getElementById('year');
let monthSpan = document.getElementById('month');
let dateSpan = document.getElementById('date');
let hourSpan = document.getElementById('hour');
let minuteSpan = document.getElementById('minute');
let secondSpan = document.getElementById('second');

function clockDigital() {
    let d = new Date();
    let year = d.getFullYear() - 2000;
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    yearSpan.textContent = ("0" + year).substr(-2);
    monthSpan.textContent = ("0" + month).substr(-2);
    dateSpan.textContent = ("0" + date).substr(-2);
    hourSpan.textContent = ("0" + hour).substr(-2);
    minuteSpan.textContent = ("0" + minute).substr(-2);
    secondSpan.textContent = ("0" + second).substr(-2);
}
// setInterval(clockDigital, 1);

console.log('year:' + year);
console.log('month:' + month);
console.log('day:' + day);
console.log('hour:' + hour);
console.log('minute:' + minute);
console.log('second:' + second);