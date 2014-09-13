var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.resize = function(newLimit) {
  this._limit = newLimit;
  var oldStorage = this._storage;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
  var self = this;
  oldStorage.each( function(buck) {
    if (Array.isArray(buck)) {
      for (var j = 0; j < buck.length; j++) {
        self.insert(buck[j][0],buck[j][1]);
      }
    }
  });
}

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i) || [];

  // first collision overwrite if same key
  for (var j = 0; j < arr.length; j++) {
    if (arr[j][0] === k){
      arr[j][1] = v;
    }
  }

  // actually store arr in one of the buckets
  arr.push([k,v]);
  this._storage.set(i,arr);
  this._size++;

  if (this._size / this._limit > 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if (Array.isArray(arr)) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j][0] === k) {
        return arr[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  var results;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j][0] === k) {
      results = arr.splice(j,1);
    }
  }
  if (arr.length === 0) {
    this._size--;
  }

  if (this._size / this._limit < 0.25) {
    this.resize(this._limit * 0.5);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
