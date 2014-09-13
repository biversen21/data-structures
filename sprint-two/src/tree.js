var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = undefined;
  _.extend(newTree,treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = makeTree(value);
  tree.parent = this;
  this.children[this.children.length] = tree;
};

treeMethods.removeFromParent = function(){
  // remove connection between this and this.parent
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i].value === this.value) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = undefined;

}

treeMethods.contains = function(target){
  var result = false;
  var recurse = function(node) {
    if (node.value === target) {
      result = true;
    } else {
      if (!!node.children) {
        for (var i = 0; i < node.children.length; i++) {
          recurse(node.children[i]);
        }
      }
    }
  }
  recurse(this);
  return result;
};

treeMethods.traverse = function(callback){
  var recurse = function(node){
    if (!!node.value) {
      callback(node.value);
    }
    if (!!node.children) {
      for (var i = 0; i < node.children.length; i++) {
        recurse(node.children[i]);
      }
    }
  }
  recurse(this);
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
