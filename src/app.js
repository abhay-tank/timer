let time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

let stopWatchInterval;
const hrsContainer = document.getElementById("hrs");
const minsContainer = document.getElementById("mins");
const secsContainer = document.getElementById("secs");
const startTimerButton = document.getElementById("startTimerButton");
const pauseTimerButton = document.getElementById("pauseTimerButton");
const resetTimerButton = document.getElementById("resetTimerButton");
window.onload = () => {
  time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  let hr = String(time.hours).padStart(2, "0");
  let min = String(time.minutes).padStart(2, "0");
  let sec = String(time.seconds).padStart(2, "0");
  hrsContainer.innerHTML = hr;
  minsContainer.innerHTML = min;
  secsContainer.innerHTML = sec;
  pauseTimerButton.classList.add("disable");
  resetTimerButton.classList.add("disable");
};

// on start show pause and reset
// on pause show start and reset
// on reset show start

const pauseTimer = () => {
  startTimerButton.classList.remove("disable");
  pauseTimerButton.classList.add("disable");
  resetTimerButton.classList.remove("disable");
  clearInterval(stopWatchInterval);
};

const resetTimer = () => {
  startTimerButton.classList.remove("disable");
  pauseTimerButton.classList.add("disable");
  resetTimerButton.classList.add("disable");
  clearInterval(stopWatchInterval);
  time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  let hr = String(time.hours).padStart(2, "0");
  let min = String(time.minutes).padStart(2, "0");
  let sec = String(time.seconds).padStart(2, "0");
  hrsContainer.innerHTML = hr;
  minsContainer.innerHTML = min;
  secsContainer.innerHTML = sec;
};

const startTimer = () => {
  startTimerButton.classList.add("disable");
  pauseTimerButton.classList.remove("disable");
  resetTimerButton.classList.remove("disable");
  stopWatchInterval = setInterval(() => {
    if (time.seconds > 59) {
      time.minutes++;
      time.seconds = 0;
    }
    if (time.minutes > 59) {
      time.hours++;
      time.minutes = 0;
    }
    if (time.hours >= 24) {
      resetTimer();
    }
    let hr = String(time.hours).padStart(2, "0");
    let min = String(time.minutes).padStart(2, "0");
    let sec = String(time.seconds).padStart(2, "0");
    hrsContainer.innerHTML = hr;
    minsContainer.innerHTML = min;
    secsContainer.innerHTML = sec;
    time.seconds++;
  }, 1000);
};
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;
