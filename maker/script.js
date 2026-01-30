document.getElementById("create").onclick = () => {
  const title = encodeURIComponent(
    document.getElementById("title").value || "イベントまで"
  );
  const date = document.getElementById("date").value;

  if (!date) return alert("日時を入力してください");

  const base = location.origin + location.pathname.replace("/maker/", "/countdown/");
  const url = `${base}?title=${title}&date=${encodeURIComponent(date)}`;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("url").value = url;
  document.getElementById("open").href = url;

  document.getElementById("copy").onclick = () => {
    navigator.clipboard.writeText(url);
    alert("コピーしました！");
  };
};
