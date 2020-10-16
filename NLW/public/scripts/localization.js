const mymap = L.map('mapid').setView([-7.3330727, -35.3408701], 14);

//create and add my image map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [40, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Você está aqui <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>'
);

//create and add marker
L.marker([-7.3330727, -35.3408701], { icon }).addTo(mymap).bindPopup(popup);
