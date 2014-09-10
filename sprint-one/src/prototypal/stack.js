var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.hiddenSize = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.hiddenSize] = value;
  this.size();
};

stackMethods.pop = function() {
  var popped = this.storage[this.hiddenSize - 1];
  delete this.storage[this.hiddenSize - 1];
  this.size();
  return popped;
};

stackMethods.size = function() {
  this.hiddenSize = 0;
  for (var key in this.storage) {
    this.hiddenSize++;
  }
  return this.hiddenSize;
};
