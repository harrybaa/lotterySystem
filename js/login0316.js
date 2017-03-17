function Login() {
  this.passwort = "peony";

  this.checkPassport = function(input) {
    return this.passwort == input;
  }
}
