// 東京都の天気予報データを取得するためのURL（APIキー削除しています）
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&units=metric&appid=';

// dataクラスの要素を取得
const weatherData = document.querySelector('.weather-data');

// HTML出力初期化
let html = '';

// OpenWeather APIデータ取得
const openWeather = async () => {
  try {
    // fetchが解決されるまで待つ
    const response = await fetch(url);

    // response.jsonが解決されるまで待つ
    const data = await response.json();
    
    /* 
    【HTMLの内容をテンプレートリテラルで登録】
    weather[0].description → 天気
    weather[0].icon → アイコン
    main.temp → 気温
    wind.speed → 風速
    */
    html += `
      <div>天気</div><div>${data.weather[0].description}</div>
      <div>アイコン</div><div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></div>
      <div>気温</div><div>${Math.round(data.main.temp)}℃</div>
      <div>風速</div><div>${data.wind.speed} (m/s)</div>
    `;

    // DOM操作でdataクラスにHTMLを出力
    weatherData.innerHTML = html;

  } catch (e) {
    alert(`天気情報取得に失敗しました：${e}`);
  }
};
openWeather();