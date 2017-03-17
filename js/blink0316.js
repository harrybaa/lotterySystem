function Blink() {
  this.blinkIntervaler;

  this.startBlink = function() {
    window.blinkPositon = 0;

    this.blinkIntervaler = window.setInterval(function() {
      var idx, circle = [1, 2, 3, 6, 9, 8, 7, 4];
      // idx = circle[Math.floor(Math.random() * 8)];
      idx = circle[window.blinkPositon];
      // enlight
      var name = "#prize_box_" + idx;
      $(name).addClass("light");
      $(name).siblings(".prize-box").removeClass("light");

      window.blinkPositon = window.blinkPositon === 7 ? 0 : window.blinkPositon + 1;

    }, 1000);
  }

  this.fastBlink = function() {
    this.blinkIntervaler = window.setInterval(function(){
      var randomIdx = Math.floor(9 * Math.random()) + 1;

      // enlight
      var name = "#prize_box_" + randomIdx;
      $(name).addClass("light");
      $(name).siblings(".prize-box").removeClass("light");
    }, 80);
  }

  this.simpleBlink = function() {
    window.blinkStatus = "white";

    this.blinkIntervaler = window.setInterval(function(){

      $(".prize-box").removeClass("white").removeClass("blue");
      $(".prize-box").addClass(window.blinkStatus);

      window.blinkStatus = window.blinkStatus == "white" ? "blue" : "white";
    }, 100);
  }



  this.clearBlink = function() {
    window.clearInterval(this.blinkIntervaler);
  }

  this.blink = function() {
    var idx = this.circle[this.position];

    // enlight
    var name = "#prize_box_" + idx;
    $(name).addClass("light");
    $(name).siblings(".prize-box").removeClass("light");

    // change next index
    if(this.position === 8)
      this.position = 1;
    else
      this.position++;
  }

  this.enlight = function(idx) {
    var name = "#prize_box_" + idx;
    $(name).addClass("light");
    $(name).siblings(".prize-box").removeClass("light");
  }

}
