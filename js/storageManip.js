function localStorageManip() {
  var getLSQuantity = function() {
    return localStorage.prizeQuantity;
  }

  var setLSQuantity = function(prizeQuantity) {
    localStorage.setItem("prizeQuantity", JSON.stringify(prizeQuantity));
  }
}
