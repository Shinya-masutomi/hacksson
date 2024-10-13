// URLのパラメータを取得
const urlParams = new URLSearchParams(window.location.search);
const luck = urlParams.get("luck"); // 攻撃力を運に変更
const agility = urlParams.get("agility");
const intelligence = urlParams.get("intelligence");
const affection = urlParams.get("affection"); // 年齢を愛情に変更
const size = urlParams.get("size");
const softness = urlParams.get("softness");
const resultText = window.location.search.substring(1).replace(/&/g, ',');

$.ajax({
    type: "POST",
    url: "https://ishinomakihack2024.azurewebsites.net/api/CreateCharctorText", // 指定されたターゲットURL
    contentType: "application/json",
    data: JSON.stringify({ message: resultText }), // resultTextの内容を送信
    dataType: "json",
  })
    .done(function (response) {
      console.log("Success:", response);

      if (response.status) {
        // 返ってきたBase64エンコードされた画像データを取得
        var message = response.message;

        // 2秒後に結果ページに遷移
        setTimeout(() => {
            window.location.href = `result.html?luck=${luck}&agility=${agility}&intelligence=${intelligence}&affection=${affection}&`
                + `size=${size}&softness=${softness}&message=${message}`;
        }, 2000);
      } else {
        console.error("Error: No image data found");
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Error:", textStatus, errorThrown);
    });

