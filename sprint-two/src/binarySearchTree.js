var makeBinarySearchTree = function(value){
  var newTree = Object.create(binaryTreeMethods);
  newTree.children = undefined;
  newTree.left = undefined;
  newTree.right = undefined;
  newTree.value = value;
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {

  var recurse = function(node) {
    if (value >= node.value) {
      node.right ? recurse(node.right) : node.right = makeBinarySearchTree(value);
    } else {
      node.left ? recurse(node.left) : node.left = makeBinarySearchTree(value);
    }
  }
  recurse(this);
  var results = this.depths();

  if ((results.min / results.max) < 0.5 ) {
    this.rebalance(this);
  }
};

binaryTreeMethods.contains = function (target) {
  var result = false;
  var nextNode;
  var recurse = function(node) {
    if (!!node) {

      if (node.value === target) {
        result = true;
        nextNode = undefined;
      } else {
        nextNode = (target > node.value) ? node.right : node.left;
      }
    }
    if (nextNode) {
      recurse(nextNode);
    }
  }
  recurse(this);
  return result;
};

binaryTreeMethods.depthFirstLog = function (callback) {
  var recurse = function(node) {
    if (!!node) {
      callback(node.value);
      if (node.right) {
        recurse(node.right);
      }
      if (node.left) {
        recurse(node.left);
      }
    }
  }
  recurse(this);
};

binaryTreeMethods.breadthFirstLog = function (callback) {
  callback(this.value);
  var recurse = function(node) {
    if (!!node) {
      // callback(node.value);
      if (node.left) {
        callback(node.left.value);
      }
      if (node.right) {
        callback(node.right.value);
      }
      if (node.left) {
        recurse(node.left);
      }
      if (node.right) {
        recurse(node.right);
      }
    }
  }
  recurse(this);
};

binaryTreeMethods.depths = function() {
  var min = Infinity;
  var max = 0;
  var recurse = function(node, count) {
    if (!!node){
      count++;
    }
    if (!node.left && !node.right) {
      min = count < min ? count : min;
      max = count > max ? count : max;
    }
    if (node.left) {
      recurse(node.left, count);
    }
    if (node.right) {
      recurse(node.right, count);
    }
  }
  recurse(this,0);
  return {min:min, max:max};
}

binaryTreeMethods.rebalance = function(tree) {
  var arr = [];
  this.depthFirstLog( function(value) {
    arr.push(value);
  });
  arr.sort( function(a,b) { return a - b});
  // overwrite daddy node
  var median = Math.floor(arr.length / 2);
  this.value = arr[median];
  this.left = undefined;
  this.right = undefined;
  this.children = undefined;

  // insert children
  arr.splice(median,1);
  for (var i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */












