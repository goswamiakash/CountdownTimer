var daysTime = document.getElementById("days");
var hoursTime = document.getElementById("hours");
var minutesTime = document.getElementById("minutes");
var secondsTime = document.getElementById("seconds");

var newYear = "1 Jan 2022";        //Setting new years date

function countdown() {
    var newYearsDate = new Date(newYear);
    var currentDate = new Date();        //Current date

    var totalSeconds = (newYearsDate - currentDate) / 1000;

    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) %60;
    var seconds = Math.floor(totalSeconds % 60);

    daysTime.innerHTML = days;
    hoursTime.innerHTML = formatTime(hours);
    minutesTime.innerHTML = formatTime(minutes);
    secondsTime.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? ("0" + time) : time;
}

countdown();

setInterval(countdown, 1000);