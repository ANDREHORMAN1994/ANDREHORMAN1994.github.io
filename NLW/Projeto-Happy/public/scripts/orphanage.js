const backToPage = () => {
  const buttonBack = document.querySelector('.button-back');
  buttonBack.addEventListener('click', () => {
    history.back();
  });
};

const changeImg = () => {
  const miniatures = document.querySelectorAll('.button-miniature');
  miniatures[0].classList.add('active');
  // console.log(miniatures[0]);
  const currentMiniature = document.querySelector('.orphanage-details > img');
  // console.log(currentMiniature);

  miniatures.forEach((miniature) => {
    miniature.addEventListener('click', (event) => {
      // remove the all classes 'active' from the buttons;
      miniatures.forEach((miniature) => miniature.classList.remove('active'));

      // add the class 'active' in the button clicked;
      miniature.classList.add('active');

      // change the src form the images;
      currentMiniature.src = event.target.src;
    });
  });
};

window.onload = function () {
  backToPage();
  changeImg();
};

// options personalizadas do meu map
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// valores originais do html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// criando posição original do meu mapa
const mymap = L.map('mapid', options).setView([lat, lng], 14);

//create and add my image map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [40, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([lat, lng], { icon }).addTo(mymap);
