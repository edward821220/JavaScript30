const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // dataset 可以取得 HTML 的資料屬性 (這裡是取得 data-sizing 的單位)
  const suffix = this.dataset.sizing || "";
  // 將 input 的數值用來改變 CSS style
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// input 數值改變的時候觸發事件
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
