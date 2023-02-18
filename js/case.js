document.getElementById("btn-case-plus").addEventListener("click", function () {
  const itemQuantity = updateNumberFieldValueById("case-number-field", true);
  updatePriceFieldValueById("case-price-total", 59, itemQuantity);
  calculateTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const itemQuantity = updateNumberFieldValueById("case-number-field", false);
    updatePriceFieldValueById("case-price-total", 59, itemQuantity);
    calculateTotal();
  });
