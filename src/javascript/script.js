// ランダムな数値を生成してスライダーと表示を更新する関数
function setRandomValues() {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const randomValue = Math.floor(Math.random() * 101); // 0から100までのランダムな数値を生成
    slider.value = randomValue; // スライダーの値をランダムに設定
    const valueSpan = document.getElementById(`${slider.id}-value`); // スライダーに対応する表示部分
    valueSpan.textContent = randomValue; // ランダムな値を表示
  });
}

// ページが読み込まれた時に実行される
window.onload = function () {
  setRandomValues(); // ランダムな値を設定
};

// スライダーの値をリアルタイムで表示する機能
const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  const valueDisplay = document.getElementById(`${slider.id}-value`);
  slider.addEventListener("input", () => {
    valueDisplay.textContent = slider.value; // スライダーの値が変わるたびに表示を更新
  });
});

// フォームの送信処理
document
  .getElementById("character-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // フォームの入力値を取得
    const luck = document.getElementById("luck").value; // 攻撃力を運に変更
    const agility = document.getElementById("agility").value;
    const intelligence = document.getElementById("intelligence").value;
    const affection = document.getElementById("affection").value; // 年齢を愛情に変更
    const size = document.getElementById("size").value;
    const softness = document.getElementById("softness").value;

    // ローディングページに遷移
    window.location.href = `loading.html?luck=${luck}&agility=${agility}&intelligence=${intelligence}&affection=${affection}&size=${size}&softness=${softness}`;
  });
