const cart = ["Item1", "Item2", "Item3", "Item4"];
const api = "";

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.updateOrderSummary(function () {
      api.updateWalletAmount();
    });
  });
});
