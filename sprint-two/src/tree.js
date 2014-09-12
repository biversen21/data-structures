var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree,treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = makeTree(value);

  if (this.children === undefined) {
    this.children = [];
  }
  this.children[this.children.length] = tree;
};

treeMethods.contains = function(target){
  var result = false;
  var recurse = function(node) {
    if (node.value === target) {
      result = true;
    } else {
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          recurse(node.children[i]);
        }
      }
    }
  }
  recurse(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
