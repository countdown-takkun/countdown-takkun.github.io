const params = new URLSearchParams(location.search);
const titleText = params.get("title") || "イベントまで";
const dateParam = params.get("date") || "2026-01-01T00:00";

document.getElementById("title").textContent = decodeURIComponent(titleText);

const targetDate = new Date(dateParam).getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const doneEl = document.getElementById("done");

function update() {
  const diff = targetDate - Date.now();
  if (diff <= 0) {
    doneEl.classList.remove("hidden");
    return;
  }

  daysEl.textContent = Math.floor(diff / 86400000);
  hoursEl.textContent = Math.floor((diff / 3600000) % 24);
  minutesEl.textContent = Math.floor((diff / 60000) % 60);
  secondsEl.textContent = Math.floor((diff / 1000) % 60);
}
setInterval(update, 1000);
update();
