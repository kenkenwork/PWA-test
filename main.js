document.getElementById("sendBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // GASのURL（デプロイで取得したもの）
  const gasUrl =
    "https://script.google.com/macros/s/AKfycbyKyaOfSCg2JUHPO2iFGPOybgHkJwdPh4fqIiqRqUvpq6fYtE-YRG3CSCu9eWVpLiD3Kw/exec";
  // デプロイID：AKfycbyKyaOfSCg2JUHPO2iFGPOybgHkJwdPh4fqIiqRqUvpq6fYtE-YRG3CSCu9eWVpLiD3Kw
  const data = {
    name: name,
    message: message,
  };

  try {
    // GASにデータを送信
    await fetch(gasUrl, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    });
    alert("送信しました！スプレッドシートを確認してください。");
  } catch (error) {
    console.error("エラーが発生しました", error);
    alert("送信に失敗しました");
  }
});

// Service Workerの登録
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker 登録完了'))
    .catch((err) => console.log('Service Worker 登録失敗', err));
}