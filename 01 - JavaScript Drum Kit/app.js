function playSound(e) {
  // 屬性用 [ ] 包住
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // 如果按的按鍵沒有可以對應的音檔的話就結束 function
  if (!audio) return;
  // 倒帶到 0 秒的時候
  audio.currentTime = 0;
  // 有對應到音檔的話就播放音效
  audio.play();
  // 增加動畫的 class
  key.classList.add("playing");
}
// 由於 JS 的執行機制 ， 用 setTimeout 會有時間誤差問題，所以在動畫處理上最好不要用
function removeTransition(e) {
  // 忽略除了 transform 屬性變更之外的 transition 動畫事件 ( 用 propertyName 來判斷是哪個 css 屬性)
  if (e.propertyName !== "transform") return;
  // 這裡的 this 是 key.addEventListener 的 key (觸發事件呼叫函式的地方)
  // console.log(this);
  this.classList.remove("playing");
}

// 監聽瀏覽器視窗中按鍵盤按鍵的事件
const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  // transition 動畫結束時觸發的事件
  key.addEventListener("transitionend", removeTransition)
);
window.addEventListener("keydown", playSound);
