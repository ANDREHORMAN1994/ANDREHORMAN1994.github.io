const mymap = L.map('mapid').setView([-7.3330727, -35.3408701], 14);

//create and add my image map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [40, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  // create popup
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
  }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`);

  //create and add marker
  L.marker([lat, lng], { icon }).addTo(mymap).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };
  addMarker(orphanage);
});
