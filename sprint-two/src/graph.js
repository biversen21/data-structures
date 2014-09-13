var Graph = function(value){
  this.nodes = {};
  this.totalNodes = 0;
};

Graph.prototype.addNode = function(newNode, toNode){

  var Node = function() {
    this.edges = {};
    this.totalEdges = 0;
  }

  this.nodes[newNode] = new Node();
  this.totalNodes++;

  if (toNode !== undefined) {
    this.addEdge(newNode, toNode);
  }

  if (this.totalNodes === 2) {
    var arr = [];
    for (var key in this.nodes) {
      arr.push(key);
    }
    this.addEdge(arr[0], arr[1]);
  }
};

Graph.prototype.contains = function(target){
  return (this.nodes[target] !== undefined) ? true : false;
};

Graph.prototype.removeNode = function(target){
  var edges = this.nodes[target].edges;
  for (var key in edges) {
    delete this.nodes[key].edges[target];
    this.nodes[key].totalEdges--;
  }
  delete this.nodes[target];
  this.totalNodes--;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return (this.nodes[fromNode].edges[toNode] !== undefined) ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[fromNode].totalEdges++;
  this.nodes[toNode].edges[fromNode] = fromNode;
  this.nodes[toNode].totalEdges++;
}

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  this.nodes[fromNode].totalEdges--;
  delete this.nodes[toNode].edges[fromNode];
  this.nodes[toNode].totalEdges--;

  if (this.nodes[fromNode].totalEdges === 0) {
    this.removeNode(fromNode);
    this.totalNodes--;
  }
  if (this.nodes[toNode].totalEdges === 0) {
    this.removeNode(toNode);
    this.totalNodes--;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
