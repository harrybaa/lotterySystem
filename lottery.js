function Lottery() {
  this.prize = {};
  this.fakePrize = {
    "冰箱": 1,
    "空调": 2,
    "洗衣机": 3
  }

  this.init = function() {
    this.prize = this.fakePrize;
  }

  this.setPrize = function(name, size) {
    this.prize[name] = size;
  }

  this.getPrize = function() {
    return this.prize;
  }

  this.lot = function() {
    var total,
        randomIdx,
        prize;

    total = this.calculateTotalSize();

    // no more prize
    if(total === 0) {
      return "No more prize.";
    }

    randomIdx = total * Math.random();

    for(var name in this.prize) {
      if(randomIdx < this.prize[name]) {
        this.prize[name]--;
        return name;
      } else
        randomIdx -= this.prize[name];
    }

    return null;
  }

  this.calculateTotalSize = function() {
    var totalSize = 0;
    for(var name in this.prize) {
      totalSize += this.prize[name];
    }
    return totalSize;
  }
}
