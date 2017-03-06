function localStorageManip() {
  this.getLSQuantity = function() {
    return JSON.parse(localStorage.getItem("prizeQuantity"));
  }

  this.setLSQuantity = function(prizeQuantity) {
    localStorage.setItem("prizeQuantity", JSON.stringify(prizeQuantity));
  }
}
