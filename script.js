let day = document.getElementById("day");

let date = new Date();

// get current day
let currentDay = date.getUTCDay();

switch (currentDay) {
  case 1:
    day.textContent = "Monday";
    break;
  case 2:
    day.textContent = "Tuesday";
    break;
  case 3:
    day.textContent = "Wednesday";
    break;
  case 4:
    day.textContent = "Thursday";
    break;
  case 5:
    day.textContent = "Friday";
    break;
  case 6:
    day.textContent = "Saturday";
    break;
  case 7:
    day.textContent = "Sunday";
    break;
  default:
    day.textContent = "Day does not exist";
    break;
}

// get current time
let time = document.getElementById('time');

function getCurrentTime(){
  let date = new Date()

  let hours = date.getUTCHours()
  hours < 10 ? hours = "0" + hours : ""

  let minutes = date.getUTCMinutes()
  minutes < 10 ? minutes = "0" + minutes : ""

  let seconds = date.getUTCSeconds()
  seconds < 10 ? (seconds = "0" + seconds) : "";

  let currentTime = `${hours} : ${minutes} : ${seconds}`;

  time.textContent = currentTime
}

setInterval(getCurrentTime, 1000)