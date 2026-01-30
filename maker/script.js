const params = new URLSearchParams(location.search);
const lang = params.get("lang") || "jp";

const T = {
  jp: {
    title: "カウントダウン作成",
    labelTitle: "タイトル",
    labelDate: "日時",
    btn: "URLを作成",
    share: "このURLを共有:",
    copy: "コピー",
    open: "開く",
    alert: "日時を入力してください"
  },
  en: {
    title: "Create Countdown",
    labelTitle: "Title",
    labelDate: "Date & Time",
    btn: "Generate URL",
    share: "Share this link:",
    copy: "Copy",
    open: "Open",
    alert: "Please select a date"
  }
};

document.querySelector("h1").textContent = T[lang].title;
document.querySelectorAll("label")[0].textContent = T[lang].labelTitle;
document.querySelectorAll("label")[1].textContent = T[lang].labelDate;
document.getElementById("create").textContent = T[lang].btn;

document.getElementById("create").onclick = () => {
  const title = encodeURIComponent(
    document.getElementById("title").value || T[lang].title
  );
  const date = document.getElementById("date").value;
  if (!date) return alert(T[lang].alert);

  const base = location.origin + location.pathname.replace("/maker/", "/countdown/");
  const url = `${base}?title=${title}&date=${encodeURIComponent(date)}&lang=${lang}`;

  document.getElementById("result").classList.remove("hidden");
  document.querySelector("#result p").textContent = T[lang].share;
  document.getElementById("url").value = url;
  document.getElementById("open").textContent = T[lang].open;
  document.getElementById("open").href = url;

  document.getElementById("copy").textContent = T[lang].copy;
  document.getElementById("copy").onclick = () => {
    navigator.clipboard.writeText(url);
    alert("OK!");
  };
};
