// 秒針
const secondHand = document.querySelector(".second-hand");
// 分針
const minHand = document.querySelector(".min-hand");
// 時針
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // 先創造一個 Date 物件的實例
  const now = new Date();
  // 取得秒數
  const seconds = now.getSeconds();

  console.log(seconds);
  // 設定秒針每秒鐘走幾度 (一開始從90度開始，所以 + 90)
  const secondDegrees = (360 / 60) * seconds + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  // 一樣的方法設定分針
  const mins = now.getMinutes();
  const minDegrees = (360 / 60) * mins + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  // 一樣的方法設定時針
  const hours = now.getHours();
  const hourDegrees = (360 / 12) * hours + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
