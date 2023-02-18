document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const itemQuantity = updateNumberFieldValueById("phone-number-field", true);
    updatePriceFieldValueById("phone-price-total", 1219, itemQuantity);
    calculateTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const itemQuantity = updateNumberFieldValueById(
      "phone-number-field",
      false
    );
    updatePriceFieldValueById("phone-price-total", 1219, itemQuantity);
    calculateTotal();
  });
