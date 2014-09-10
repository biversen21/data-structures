var makeQueue = function(){
  var newQueue = {};
  newQueue.sizes = 0;
  newQueue.storage = {};
  _.extend(newQueue,queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.sizes++;
  this.storage[this.sizes] = value;
};

queueMethods.dequeue = function() {
  if (this.sizes > 0) {
    var dequeued = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    this.sizes--;
    return dequeued;
  }
};

queueMethods.size = function() {
 return this.sizes;
};



