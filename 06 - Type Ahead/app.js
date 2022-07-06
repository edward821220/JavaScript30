const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

// 取得資料後將 Json格式轉成 object 再放到名為 cities 的 array 裡
// fetch(endpoint)
//   .then((data) => data.json())
//   .then((json_data) => cities.push(...json_data));
// console.log(cities);
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
console.log(cities);
// 過濾文字的函數
function filterWord(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
// 將篩選出的資料顯示在 HTML 上
function displayMatches() {
  const matchArray = filterWord(this.value, cities);
  const html = matchArray.map((place) => {
    // 將關鍵字渲染成黃色底
    const regex = new RegExp(this.value, "gi");
    const cityName = place.city.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );
    const stateName = place.state.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );
    return `
    <li>
      <span class='name'>${cityName}, ${stateName}</span>
      <span class='population'>${place.population}</span>
    </li>
    `;
  });
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
// 搭配 change 使用，在 input 中不用輸入完，輸入到一半手離開鍵盤就會被執行
searchInput.addEventListener("keyup", displayMatches);
