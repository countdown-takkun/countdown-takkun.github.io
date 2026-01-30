const p = new URLSearchParams(location.search);
const lang = p.get("lang") || "jp";

const T = {
  jp: { done: "🎉 時間になりました！" },
  en: { done: "🎉 Time is up!" }
};

document.getElementById("title").textContent =
  decodeURIComponent(p.get("title") || (lang === "en" ? "Countdown" : "イベントまで"));

const targetDate = new Date(p.get("date")).getTime();
const doneEl = document.getElementById("done");
doneEl.textContent = T[lang].done;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function update() {
  const d = targetDate - Date.now();
  if (d <= 0) {
    doneEl.classList.remove("hidden");
    return;
  }
  daysEl.textContent = Math.floor(d / 86400000);
  hoursEl.textContent = Math.floor((d / 3600000) % 24);
  minutesEl.textContent = Math.floor((d / 60000) % 60);
  secondsEl.textContent = Math.floor((d / 1000) % 60);
}

setInterval(update, 1000);
update();
