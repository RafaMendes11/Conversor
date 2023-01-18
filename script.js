const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.2;
const euro = 5.5;
const btc = 0.0000093;

const convertValues = () => {
  const inputReal = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "U$ Dólar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }

  if (select.value === "btc") {
    currencyValueText.innerHTML = new Intl.NumberFormat("btc", {
      style: "currency",
      currency: "BTC",
    }).format(inputReal * btc);
  }
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "assets/euro.png";
  }

  if (select.value === "U$ Dólar Americano") {
    currencyName.innerHTML = "Dolár Americano";
    currencyImg.src = "assets/usa.png";
  }

  if (select.value === "btc") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "assets/btc.png";
  }
  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
