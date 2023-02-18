function updateNumberFieldValueById(numberFieldId, isIncrease) {
  const numberField = document.getElementById(numberFieldId);
  const previousNumberFieldValue = parseInt(numberField.value);
  let newNumberFieldValue;

  if (isIncrease) newNumberFieldValue = previousNumberFieldValue + 1;
  else newNumberFieldValue = previousNumberFieldValue - 1;

  numberField.value = newNumberFieldValue;
  return newNumberFieldValue;
}

function updatePriceFieldValueById(priceFieldId, price, quantity) {
  const priceField = document.getElementById(priceFieldId);
  priceField.innerText = price * quantity;
}

function getPriceFieldValueById(priceField) {
  const priceFieldValue = document.getElementById(priceField);
  return parseInt(priceFieldValue.innerText);
}

function calculateTotal() {
  const phonePriceTotal = getPriceFieldValueById("phone-price-total");
  const casePriceTotal = getPriceFieldValueById("case-price-total");

  const subTotal = document.getElementById("sub-total");
  subTotal.innerText = parseInt(phonePriceTotal) + parseInt(casePriceTotal);
  console.log(phonePriceTotal, casePriceTotal, subTotal.innerText);
  const tax = document.getElementById("tax-amount");
  const taxAmount = (
    (parseInt(phonePriceTotal) + parseInt(casePriceTotal)) *
    0.1
  ).toFixed(2);
  tax.innerText = taxAmount;

  const total = document.getElementById("final-total");
  total.innerText =
    parseFloat(taxAmount) +
    parseInt(phonePriceTotal) +
    parseInt(casePriceTotal);
}
