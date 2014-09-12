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
};

binaryTreeMethods.contains = function (target) {
  var result = false;
  var nextNode;
  var recurse = function(node) {
    if (node !== undefined) {

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
    if (node !== undefined) {
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
