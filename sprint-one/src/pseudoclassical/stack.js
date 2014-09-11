var Stack = function() {
  this.storage = {};
  this.hiddenSize = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.hiddenSize] = value;
  this.hiddenSize++;
}

Stack.prototype.pop = function() {
  if(this.hiddenSize > 0) {
    var popped = this.storage[this.hiddenSize - 1];
    delete this.storage[this.hiddenSize - 1];
    this.hiddenSize--;
    return popped;
  }
}

Stack.prototype.size = function() {
  return this.hiddenSize;
}
