var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var setSize = function() {
    size = 0;
    for (var key in storage) {
      size++;
    }
  }

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    setSize();
  };

  someInstance.dequeue = function(){
    var dequeued = storage[0];
    for(var key in storage) {
      if (key !== "0") {
        storage[key - 1] = storage[key];
      }
    }
    delete storage[size - 1];
    setSize();
    return dequeued;
  };

  someInstance.size = function(){
    setSize();
    return size;
  };

  return someInstance;
};
