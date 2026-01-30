const p=new URLSearchParams(location.search);
const lang=p.get("lang")||"jp";

const title=decodeURIComponent(p.get("title")||"Countdown");
const desc=decodeURIComponent(p.get("desc")||"");
document.getElementById("title").textContent=title;
document.getElementById("desc").textContent=desc;

const bg=p.get("bg")||"0f2027";
const text=p.get("text")||"ffffff";
const card=p.get("card")||"000000";
const alpha=p.get("alpha")||"40";

document.body.style.background="#"+bg;
document.body.style.color="#"+text;

document.querySelector(".container").style.background=
`rgba(${parseInt(card.substr(0,2),16)},${parseInt(card.substr(2,2),16)},${parseInt(card.substr(4,2),16)},${alpha/100})`;

const doneText={jp:"🎉 時間になりました！",en:"🎉 Time is up!"};
document.getElementById("done").textContent=doneText[lang];

const target=new Date(p.get("date")).getTime();
const dEl=days,hEl=hours,mEl=minutes,sEl=seconds;

function tick(){
const diff=target-Date.now();
if(diff<=0){document.getElementById("done").classList.remove("hidden");return;}
dEl.textContent=Math.floor(diff/86400000);
hEl.textContent=Math.floor((diff/3600000)%24);
mEl.textContent=Math.floor((diff/60000)%60);
sEl.textContent=Math.floor((diff/1000)%60);
}
setInterval(tick,1000);tick();
