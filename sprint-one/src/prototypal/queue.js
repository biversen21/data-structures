var makeQueue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.hiddenSize = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.hiddenSize++;
  this.storage[this.hiddenSize] = value;
};

queueMethods.dequeue = function() {
  if (this.hiddenSize > 0) {
    var temp = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    this.hiddenSize--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.hiddenSize;
};
