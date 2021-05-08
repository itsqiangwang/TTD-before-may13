//analog clock + components
let analogClock = document.getElementById('clock-analog');
let hourArm = document.getElementById('clock-arm-hour');
let minuteArm = document.getElementById('clock-arm-minute');
let secondArm = document.getElementById('clock-arm-second');
let knob = document.getElementById('clock-knob');

//buttons
let infoButton = document.getElementById('info-button');
let watchButton = document.getElementById('watch-button');
let titleButton = document.getElementById('title-button');
let homeButton = document.getElementById('home-button');

//info page
let infoPage = document.getElementById('info-page');

//home header
let homeHeader = document.getElementById('home-header');

//hide on info page
let digitalClock = document.getElementById('clock-digital');
let videos = document.getElementById('videos');

//show on info page
let clockToggleHide = document.getElementById('toggle-button-hide');
let clockToggleShow = document.getElementById('toggle-button-show');

////////////////////////////////////////////////////////////////////

//when info button is clicked
infoButton.onclick = function(){
    digitalClock.style.display = 'none';
    analogClock.style.opacity = '0.5';
    videos.style.display = 'none';
    knob.style.display = 'none';
    infoPage.style.display = 'block';
    clockToggleHide.style.display = 'flex';
    infoButton.classList.add('current-page');
    titleButton.classList.remove('current-page');
    homeHeader.style.borderBottom = '1px solid rgba(0,0,0,0.5)';
}

//when toggle hide button is clicked
clockToggleHide.onclick = function(){
    hourArm.style.display = 'none';
    minuteArm.style.display = 'none';
    secondArm.style.display = 'none';
    clockToggleHide.style.display = 'none';
    clockToggleShow.style.display = 'flex';
}

//when toggle show button is clicked
clockToggleShow.onclick = function(){
    hourArm.style.display = 'block';
    minuteArm.style.display = 'block';
    secondArm.style.display = 'block';
    clockToggleHide.style.display = 'flex';
    clockToggleShow.style.display = 'none';
}

//when title (home) button is clicked
titleButton.onclick = function(){
    digitalClock.style.display = 'block';
    videos.style.display = 'flex';
    analogClock.style.display = 'block';
    knob.style.display = 'block';
    infoPage.style.display = 'none';
    clockToggleHide.style.display = 'none';
    clockToggleShow.style.display = 'none';
    infoButton.classList.remove('current-page');
    titleButton.classList.add('current-page');
    analogClock.style.opacity = '1';
    homeHeader.style.borderBottom = '1px solid rgba(0,0,0,0)';
}

homeButton.onclick = function(){
    digitalClock.style.display = 'block';
    videos.style.display = 'flex';
    analogClock.style.display = 'block';
    knob.style.display = 'block';
    infoPage.style.display = 'none';
    clockToggleHide.style.display = 'none';
    clockToggleShow.style.display = 'none';
    hourArm.style.display = 'block';
    minuteArm.style.display = 'block';
    secondArm.style.display = 'block';
    infoButton.classList.remove('current-page');
    titleButton.classList.add('current-page');
    analogClock.style.opacity = '1';
    homeHeader.style.borderBottom = '1px solid rgba(0,0,0,0)';
}

// function to animate analog clock
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

// function to animate digital clock

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
// call after may 13 (live digital clock)
// setInterval(clockDigital, 1);

// console.log('year:' + year);
// console.log('month:' + month);
// console.log('day:' + day);
// console.log('hour:' + hour);
// console.log('minute:' + minute);
// console.log('second:' + second);