var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if (arr === undefined) {
    var value = [];
    value.push({k: k, v: v});
    this._storage.set(i, value);
  } else {
    arr.push({k:k, v:v});
    this._storage.set(i, arr);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].k === k) {
      return arr[j].v;
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].k === k) {
      arr[j] = {k: k, v: null};
    }
  }
  this._storage.set(i, arr);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
