var Graph = function(value){
  this.children = [];
  this.value = value;
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = new Graph(newNode);

  if (this.value === undefined) {
    this.value = newNode;
  } else {
    this.children.push(node);
  }
};

Graph.prototype.getNode = function(target) {
  var node;
  var recurse = function(currentNode) {
    if (currentNode !== undefined) {
      if (currentNode.value === target) {
        node = currentNode;
      }
      for (var i = 0; i < currentNode.children.length; i++) {
        recurse(currentNode.children[i]);
      }
    }
  };
  recurse(this);
  return node;
}

Graph.prototype.contains = function(target){
  var result = false;
  var recurse = function(node) {
    if (node !== undefined) {
      if (node.value === target) {
        result = true;
      }
      for (var i = 0; i < node.children.length; i++) {
        recurse(node.children[i]);
      }
    }
  };
  recurse(this);
  return result;
};

Graph.prototype.removeNode = function(target){
  var node = this.getNode(target);
  delete node.value;

  for (var i = 0; i < node.children.length; i++) {
    for (var j = 0; j < node.children[i].length; j++) {
      node.children[i].children.splice(j, 1);
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var node = this.getNode(fromNode);
  for(var i = 0; i < node.children.length; i++) {
    if (node.children[i].value === toNode) {
      return true;
    }
  } // else
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var node = this.getNode(fromNode);
  var otherNode = this.getNode(toNode);
  node.children.push(otherNode);
  otherNode.children.push(node);
}

Graph.prototype.removeEdge = function(fromNode, toNode){
  var node = this.getNode(fromNode);
  for (var i = 0; i < node.children.length; i++) {
    for (var j = 0; j < node.children[i].length; j++) {
      node.children[i].children.splice(j, 1);
    }
    if (node.children[i].value === toNode) {
      node.children.splice(i, 1);
      if (node.children.length === 0) {
        delete node.value;
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
