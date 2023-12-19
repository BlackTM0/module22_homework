const butn = document.querySelector('#btn');
const shir = document.querySelector('#shirota');
const dolg = document.querySelector('#dolgota');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
butn.addEventListener('click', () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {coords} = position;
        const {latitude, longitude} = coords;
        const apiUrl = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;
  
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            const timezone = data.timezone;
            const dateTime = data.date_time_txt;
            shir.textContent = timezone; 
            dolg.textContent = dateTime;
          })
          .catch(error => {
            console.error('Произошла ошибка:', error);
          });
      });
    } else {
      alert('Информация о местоположении недоступна');
    }
  });