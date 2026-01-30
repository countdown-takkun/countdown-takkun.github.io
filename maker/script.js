const p=new URLSearchParams(location.search);
const lang=p.get("lang")||"jp";

const T={
jp:{title:"カウントダウン作成",t:"タイトル",d:"日時",de:"説明文",b:"URLを作成",s:"このURLを共有:",c:"コピー",o:"開く",a:"日時を入力"},
en:{title:"Create Countdown",t:"Title",d:"Date",de:"Description",b:"Generate",s:"Share:",c:"Copy",o:"Open",a:"Select date"}
};

const L=T[lang];
document.querySelector("h1").textContent=L.title;
const labels=document.querySelectorAll("label");
labels[0].textContent=L.t;
labels[1].textContent=L.d;
labels[2].textContent=L.de;
document.getElementById("create").textContent=L.b;

document.getElementById("create").onclick=()=>{
const title=encodeURIComponent(document.getElementById("title").value||L.title);
const date=document.getElementById("date").value;
if(!date)return alert(L.a);
const desc=encodeURIComponent(document.getElementById("desc").value||"");
const bg=bg.value.replace("#","");
const text=text.value.replace("#","");
const card=card.value.replace("#","");
const alpha=alpha.value;

const base=location.origin+location.pathname.replace("/maker/","/countdown/");
const url=`${base}?title=${title}&desc=${desc}&date=${encodeURIComponent(date)}&bg=${bg}&text=${text}&card=${card}&alpha=${alpha}&lang=${lang}`;

result.classList.remove("hidden");
result.querySelector("p").textContent=L.s;
urlInput=urlField=url;
document.getElementById("url").value=url;
open.textContent=L.o;open.href=url;
copy.textContent=L.c;
copy.onclick=()=>{navigator.clipboard.writeText(url);alert("OK!");}
};
