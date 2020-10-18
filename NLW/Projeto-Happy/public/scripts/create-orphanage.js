const mymap = L.map('mapid').setView([-7.3330727, -35.3408701], 14);

//create and add my image map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

//create and add marker
// L.marker([-7.3330727, -35.3408701], { icon }).addTo(mymap);

let marker;
let latNumber = document.querySelector('#lat');
let lngNumber = document.querySelector('#lng');

// function click
mymap.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  // console.log(lat);
  latNumber.value = lat;
  lngNumber.value = lng;
  // remove icon
  marker && mymap.removeLayer(marker);
  // add icon
  marker = L.marker([lat, lng], { icon }).addTo(mymap);
});

const changeInputsImgs = () => {
  const plusButton = document.querySelector('.button-plus');

  plusButton.addEventListener('click', () => {
    // ATUALIZANDO VARIÁVEIS
    const uploadContainer = document.querySelector('.images-upload');
    const lastInput =
      uploadContainer.children[uploadContainer.children.length - 1].children[0];
    // console.log(lastInput);

    // CLONANDO ELEMENTO EXISTENTE
    const newUploadContainer = uploadContainer.children[
      uploadContainer.children.length - 1
    ].cloneNode(true);
    newUploadContainer.style.margin = '2rem 0';
    newUploadContainer.children[0].value = '';

    // ADICIONANDO O NOVO CLONE NO PAI
    lastInput.value === ''
      ? alert('Imagem Vazia')
      : uploadContainer.appendChild(newUploadContainer);
  });
};

const removeImg = (event) => {
  let target = event.currentTarget;
  let uploadContainer = document.querySelector('.images-upload');

  if (uploadContainer.children.length < 2) {
    alert('Não pode excluir esse campo');
    target.parentNode.children[0].value = '';
  } else {
    target.parentNode.remove();
  }
};

const buttonsWeekends = document.querySelectorAll('.button-selected button');
// console.log(buttonsWeekends);

// REMOVEVENDO CLASS ACTIVE
buttonsWeekends.forEach((button) =>
  button.addEventListener('click', () =>
    buttonsWeekends.forEach((button) => button.classList.remove('active'))
  )
);

// ATUALIZANDO VALOR DO INPUT ESCONDIDO
const inputHidden = document.querySelector('[name="open_on_weekends"]');

// ADICIONANDO CLASS ACTIVE
buttonsWeekends.forEach((button) =>
  button.addEventListener('click', () => {
    button.classList.add('active');
    inputHidden.value = button.childNodes[0].textContent;
    // console.log(button.childNodes[0]);
    // console.log(inputHidden.value);
  })
);

const backToPage = () => {
  const buttonBack = document.querySelector('.button-back');
  buttonBack.addEventListener('click', () => {
    history.back();
  });
};

const submitButton = () => {
  const button = document.querySelector('.primary-button');
  button.addEventListener('click', (event) => {
    const lat = document.querySelector('#lat');
    const lng = document.querySelector('#lng');
    console.log(lat.value);

    if (lat.value === '' || lng.value === '') {
      alert('Selecione algum ponto do mapa');
      event.preventDefault();
    }
  });
};

window.onload = () => {
  changeInputsImgs();
  backToPage();
  submitButton();
};
