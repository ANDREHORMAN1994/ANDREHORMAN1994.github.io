const searchCoin = () => {
  const button = document.querySelector('.button-search');
  button.addEventListener('click', getImputValue);
};

const clearCoins = () => {
  const button = document.querySelector('.clear-button');
  button.addEventListener('click', clear);
};

const getImputValue = () => {
  const input = document.querySelector('#coin').value;
  const inputUpperCase = input.toUpperCase();
  clear();
  return input === ''
    ? alertMessage('Moeda deve ser informada')
    : getApiInfo(inputUpperCase);
};

const addElements = (value) => {
  const sectionApi = document.querySelector('.api-container');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  sectionApi.appendChild(ul);
  ul.appendChild(li);
  li.innerHTML = value;
};

// UTILIZANDO FETCH, THEN E CATCH
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

// UTILIZANDO TRY CATCH, ASYNC E AWAIT
const getApiInfo = async (coin) => {
  const endPoint = `https://api.ratesapi.io/api/latest?base=${coin}`;
  const endPointBtc = `https://api.coindesk.com/v1/bpi/currentprice/${coin}.json`;
  if (coin === 'BTC') {
    return apiBTC();
  }
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    // console.log(data.rates);
    const responseBtc = await fetch(endPointBtc);
    const objectBtc = await responseBtc.json();
    // console.log(objectBtc.bpi[coin].rate);
    const number = objectBtc.bpi[coin].rate;
    const numberSplit = number.split(',');
    const numberJoin = numberSplit.join('');
    // console.log(numberJoin);
    data.rates['BTC'] = parseFloat(numberJoin);
    // console.log(data.rates);

    if (data.error) {
      throw new Error(data.error);
    } else {
      handleRates(data.rates);
    }
  } catch (error) {
    alertMessage('Moeda Inválida');
  }
};

const apiBTC = () => {
  const endPoint = `https://api.coindesk.com/v1/bpi/currentprice.json`;
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      Object.entries(data.bpi).forEach((object) => {
        newRateBTC(object[1]);
      });
    });
};
// apiBTC();

const newRateBTC = (coin) => {
  let message = `${coin.code}: ${coin.rate}`;
  // console.log(parseFloat(coin.rate));
  addElements(message);
};

const handleRates = (object) => {
  let array = Object.entries(object);
  // console.log(array.sort());
  let newArray = array.sort();
  newArray.forEach((array) => handleArray(array));
};

const handleArray = ([keys, value]) => {
  let message = `${keys}: ${value.toFixed(2)}`;
  addElements(message);
};

const clear = () => {
  const apiContainer = document.querySelector('.api-container');
  apiContainer.innerHTML = '';
};

const alertMessage = (message) => {
  window.alert(message);
};

window.onload = () => {
  searchCoin();
  clearCoins();
};
