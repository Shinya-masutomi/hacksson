// スライダーの値を表示する機能
const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
  const valueDisplay = document.getElementById(`${slider.id}-value`);
  slider.addEventListener('input', () => {
    valueDisplay.textContent = slider.value;
  });
});

// フォームの送信処理
document.getElementById("character-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // フォームの入力値を取得
  const strength = document.getElementById("strength").value;
  const agility = document.getElementById("agility").value;
  const intelligence = document.getElementById("intelligence").value;

  // ローディングページに遷移
  window.location.href = `loading.html?strength=${strength}&agility=${agility}&intelligence=${intelligence}`;
});
