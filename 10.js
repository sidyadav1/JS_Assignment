// Create a timer in javascript, in such a way, that it should display 0-10 seconds,
// and after displaying 10, the program should exit.

var timer = 1;

var interval = setInterval(() => {
  console.log(timer, "seconds");
  if (timer === 10) {
    clearInterval(interval);
  }
  timer++;
}, 1000);
