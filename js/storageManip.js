function localStorageManip() {
  var getLSQuantity = function() {
    return JSON.parse(localStorage.getItem("prizeQuantity"));
  }

  var setLSQuantity = function(prizeQuantity) {
    localStorage.setItem("prizeQuantity", JSON.stringify(prizeQuantity));
  }
}
