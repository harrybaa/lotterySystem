function Lottery() {
  this.prizeDetails = {};
  this.prizeQuantity = {};
  this.fakePrizeDetails = {
    "prize1": {
      "name": "空调",
      "rank": "特等奖",
      "rate": "SSR",
      "rate_pic": "#",
      "pic": ""
    },
		"prize2": {
      "name": "冰箱",
      "rank": "一等奖",
      "rate": "SR",
      "rate_pic": "#",
      "pic": ""
    },
		"prize3": {
      "name": "洗衣机",
      "rank": "二等奖",
      "rate": "R",
      "rate_pic": "#",
      "pic": ""
    }
  };
  this.fakePrizeQuatity = {
    "prize1": 1,
    "prize2": 2,
    "prize3": 3
  };

  this.init = function() {
    // initial;
  };

  this.setPrizeDetails = function(prizeDetails) {
    this.prizeDetails = prizeDetails;
  };

  this.setFakePrizeDetails = function() {
    this.prizeDetails = this.fakePrizeDetails;
  };

  this.setPrizeQuantity = function(prizeQuantity) {
    this.prizeQuantity = prizeQuantity;
  };

  this.setFakePrizeQuantity = function() {
    this.prizeQuantity = this.fakePrizeQuatity;
  };

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

    for(var name in this.prizeQuantity) {
      if(randomIdx < this.prizeQuantity[name]) {
        this.prizeQuantity[name]--;

        return this.prizeDetails[name];
      } else
        randomIdx -= this.prizeQuantity[name];
    }

    return null;
  };

  this.calculateTotalSize = function() {
    var totalSize = 0;
    for(var name in this.prizeQuantity) {
      totalSize += this.prizeQuantity[name];
    }
    return totalSize;
  };

  this.setNewPrizeQuantity(name) {

  }
}
