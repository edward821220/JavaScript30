const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  // 檢查是否按 shift 鍵以及是否打勾
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // 檢查每一個 checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      // 把 isBetween 設為 true 或 false
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      // 如果是在中間的就打勾
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  // 紀錄上一次勾選的是哪個 checkbox
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
