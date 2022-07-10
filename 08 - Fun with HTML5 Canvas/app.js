// 選取 canvas
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
// 設定範圍
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 設定筆
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

// 設定初始狀態
let isDrawing = false;
let lastX = 0;
let lastY = 0;
// 設定函數
function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
// 監聽滑鼠移動事件，執行函數
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
