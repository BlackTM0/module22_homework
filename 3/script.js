const butn = document.querySelector('#btn');
const shir = document.querySelector('#shirota');
const dolg = document.querySelector('#dolgota');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
butn.addEventListener('click', ()=> {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const {coords} =position;
            shirota = coords.latitude;
            dolgota = coords.longitude;
            shir.textContent = shirota;
            dolg.textContent=dolgota;
        }, (error) => {
            if (error.code === error.PERMISSION_DENIED) {
                shir.textContent ='Информация недоступна';
                dolg.textContent ='Информация недоступна';
            }
        });
    }
   width.textContent = window.screen.width; 
   height.textContent = window.screen.height;
});