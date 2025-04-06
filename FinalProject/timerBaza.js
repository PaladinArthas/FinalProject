const TIMER_SECOND_TIME = 10800; // Сколько секунд будет идти таймер
let timer; // переменная для хранения таймера

function initTimer() {
  document.getElementById("timer").style.display = "block";
  let timerCounter = TIMER_SECOND_TIME * 1000;
  updateTimerCounter(timerCounter);
  timer = setInterval(function checkTimer() {
    timerCounter = timerCounter - 1000;
    updateTimerCounter(timerCounter);
    if (timerCounter <= 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  if (timer !== undefined) {
    clearInterval(timer);
    alert("ВРЕМЯ КОНЧИЛОСЬ!!!");
    document.getElementById("timer").style.display = "none";
  }
}

function updateTimerCounter(milliSeconds) {
  const timeString = msToTime(milliSeconds);
  document.getElementById("timer").textContent = timeString;
}

function msToTime(milliSeconds) {
  let seconds = Math.floor((milliSeconds / 1000) % 60);
  let minutes = Math.floor((milliSeconds / (1000 * 60)) % 60);
  let hours = Math.floor((milliSeconds / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}
