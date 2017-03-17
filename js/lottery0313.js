function Lottery() {
  this.prizeDetails = {};
  this.prizeQuantity = {};
  this.fakePrizeDetails = {
    "prize1": {
      "name": "牡丹（软蓝）竹语伞",
			"theme": "blue",
      "rank": "壹等奖A",
    },
		"prize2": {
      "name": "牡丹品牌丝巾（大方巾）",
			"theme": "blue",
      "rank": "壹等奖B",
    },
		"prize3": {
      "name": "牡丹（软蓝）鸡年记事本",
			"theme": "blue",
      "rank": "貳等奖",
    },
		"prize4": {
      "name": "牡丹（软蓝）打火机+牡丹（软蓝）烟盒",
			"theme": "blue",
      "rank": "叁等奖",
    },
		"prize5": {
      "name": "纪念小礼品",
			"theme": "red",
      "rank": "参与奖",
    },
    "default": {
      "name": "谢谢参与",
			"theme": "red",
      "rank": "參與獎",
    }
  };
  this.fakePrizeQuatity = {
    "prize1": 60,
		"prize2": 60,
		"prize3": 160,
		"prize4": 260,
    "prize5": 600
  };
  this.emptyPrize = {
    "name": "奖池被掏空了~",
    "rank": "对不起 您来晚了",
  }

  this.init = function() {
    // initial;
  };

  this.setPrizeDetails = function(prizeDetails) {
    if(this.prizeDetails == null)
      this.prizeDetails = prizeDetails;
  };

  this.setFakePrizeDetails = function() {
    this.prizeDetails = this.fakePrizeDetails;
  };

  this.setPrizeQuantity = function(prizeQuantity) {
    this.prizeQuantity = prizeQuantity;
  };

  this.setFakePrizeQuantity = function() {
    if(this.prizeQuantity == null)
      this.prizeQuantity = this.fakePrizeQuatity;
  };

  this.getPrizeQuantity = function() {
    return this.prizeQuantity;
  }

  this.lot = function() {
    var total,
        randomIdx,
        prize;

    total = this.calculateTotalSize();

    // no more prize
    if(total === 0) {
      return this.emptyPrize;
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

}
