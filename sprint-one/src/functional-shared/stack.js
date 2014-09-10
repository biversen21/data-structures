var makeStack = function() {
  var newStack = {};
  newStack.hiddenSize = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.hiddenSize] = value;
  this.size();
}

stackMethods.pop = function() {
  var popped = this.storage[this.hiddenSize - 1];
  delete this.storage[this.hiddenSize - 1];
  this.size();
  return popped;
}

stackMethods.size = function() {
  this.hiddenSize = 0;
  for(var key in this.storage) {
    this.hiddenSize++;
  }
  return this.hiddenSize;
}
