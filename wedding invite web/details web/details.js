// welcome.js

// Wedding Date

const weddingDate =
new Date("may 14, 2026 18:00:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  // Time Calculations

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  // Display

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds;

  // Wedding Day Message

  if(distance < 0){

    clearInterval(countdown);

    document.querySelector(".countdown").innerHTML =
    "<h2>❤ Wedding Day Started ❤</h2>";
  }

}, 1000);