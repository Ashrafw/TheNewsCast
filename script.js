const dateInfo = document.getElementById('date-info');
const tempInfo = document.getElementById('temp');
const d = new Date();

let monthsList = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'August',
  'October',
  'November',
  'December',
];

// API Key: ec7ca409266e4e439b885725202104
updateTime();
updateTemp();

function updateTime() {
  const d = new Date();

  dateInfo.innerHTML = `${
    monthsList[d.getUTCMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`;
}

function updateTemp() {
  fetch(
    'http://api.weatherapi.com/v1/current.json?key=ec7ca409266e4e439b885725202104&q=London&aqi=yes'
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.current.temp_c);
      tempInfo.innerHTML = `${data.current.temp_c}`;
    });
}
