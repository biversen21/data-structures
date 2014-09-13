var HashTable = function(limit){
  this._limit = limit;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.resize = function() {
  console.log(this._size);
  console.log(this._limit);
  if (this._size / this._limit >= 0.75) {
    var tempArr = [];
    this._storage.each(function(v, k, c) {
      tempArr.push(v);
    });
    // console.log(tempArr);
    this._limit *= 2;
    this._storage = makeLimitedArray(this._limit);
    var self = this;
    tempArr.forEach(function(el, index, col) {
      if (el !== undefined) {
        for (j = 0; j < el.length; j++) {
          if (el[j] !== undefined) {
            var i = getIndexBelowMaxForKey(el[j].k, self._limit);
            self.insert(i, el[j].v);
          }
        }
      }
    });
  }
}

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);

  if (arr === undefined) {
    var value = [];
    value.push({k: k, v: v});
    this._storage.set(i, value);
    this._size++;
  } else {
    arr.push({k:k, v:v});
    this._storage.set(i, arr);
  }
  this.resize();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].k === k) {
      return arr[j].v;
    }
  } // else
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].k === k) {
      arr.splice(j, 1);
    }
  }
  if (arr.length === 0) {
    this._size--;
  }
  this._storage.set(i, arr);
  this.resize();
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
