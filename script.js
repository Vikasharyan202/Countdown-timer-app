const daysElem = document.querySelector('#days');
const hoursElem = document.querySelector('#hours');
const minutesElem = document.querySelector('#minutes');
const secondsElem = document.querySelector('#seconds');


const newYear = "1 jan 2024";

function countdown(){
    const currentDate = new Date();
    const newYearDate = new Date(newYear);

    const totalSecond = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / (60 * 60 * 24));
    const hours = Math.floor(totalSecond / (60 * 60)) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;

    daysElem.innerHTML = days;
    hoursElem.innerHTML = formetTime(hours);
    minutesElem.innerHTML = formetTime(minutes);
    secondsElem.innerHTML = formetTime(seconds);
}

function formetTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);