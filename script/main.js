const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");
const hideEle = document.querySelector(".hide");

console.log(hideEle);

// Set the countdown end date and time
const targetDate = new Date("Feb 14, 2025 00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysEle.innerHTML = days > 9 ? `${days}` : `0${days}`;
  hoursEle.innerHTML = hours > 9 ? `${hours}` : `0${hours}`;
  minutesEle.innerHTML = minutes > 9 ? `${minutes}` : `0${minutes}`;
  secondsEle.innerHTML = seconds > 9 ? `${seconds}` : `0${seconds}`;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    hideEle.setAttribute("id", "close");
  }
}, 1000);
