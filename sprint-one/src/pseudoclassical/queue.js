var Queue = function() {
  this.storage = {};
  this.hiddenSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.hiddenSize] = value;
  this.hiddenSize++;
};

Queue.prototype.dequeue = function() {
  if (this.hiddenSize > 0) {
    var temp = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    this.hiddenSize--;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.hiddenSize;
};


