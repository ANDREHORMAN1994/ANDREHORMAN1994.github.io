const searchCoin = () => {
  const button = document.querySelector('.button-search');
  button.addEventListener('click', getImputValue);
}

const getImputValue = () => {
  const input = document.querySelector('#coin').value;
  const inputUpperCase = input.toUpperCase();
  clear();
  return input === '' ? alertMessage('Moeda deve ser informada') : getApiInfo(inputUpperCase);
}

const addElements = (value) => {
  const sectionApi = document.querySelector('.api-container');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  sectionApi.appendChild(ul);
  ul.appendChild(li);
  li.innerHTML = value;
}

const alertMessage = (message) => {
  window.alert(message);
}

// const getApiInfo = (coin) => {
//   const endPoint = `https://api.ratesapi.io/api/latest?base=${coin}`
//   fetch(endPoint)
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data.error);
//       if (data.error) {
//         throw new Error(data.error)
//       } else {
//         handleRates(data.rates);
//       }
//     })
//     .catch(error => alertMessage(error))
// }

const getApiInfo = async (coin) => {
  const endPoint = `https://api.ratesapi.io/api/latest?base=${coin}`;
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error)
    } else {
      handleRates(data.rates);
    }
  } catch (error) {
    alertMessage(error);
  }
}

const handleRates = (object) => {
  let array = Object.entries(object);
  array.forEach(array => handleArray(array));
}

const handleArray = ([keys, value]) => {
  let message = `${keys}: ${value}`;
  addElements(message);
}

const clear = () => {
  const apiContainer = document.querySelector('.api-container');
  apiContainer.innerHTML = '';
}

window.onload = () => {
  searchCoin();
}
