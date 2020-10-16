const backToPage = () => {
  const buttonBack = document.querySelector('.button-back');
  buttonBack.addEventListener('click', () => {
    history.back();
  });
};

const changeImg = () => {
  const miniatures = document.querySelectorAll('.button-miniature');
  const currentMiniature = document.querySelector('.orphanage-details > img')
  console.log(currentMiniature);

  miniatures.forEach((miniature) => {
    miniature.addEventListener('click', (event) => {
      // remove the all classes 'active' from the buttons;
      miniatures.forEach((miniature) => miniature.classList.remove('active'));

      // add the class 'active' in the button clicked;
      miniature.classList.add('active');

      // change the src form the images;
      currentMiniature.src = event.target.src;
    })
  })
};

window.onload = function () {
  backToPage();
  changeImg();
};

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const mymap = L.map('mapid', options).setView([-7.3330727, -35.3408701], 14);

//create and add my image map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [40, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([-7.3330727, -35.3408701], { icon }).addTo(mymap);
