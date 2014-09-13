describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should execute a callback on every value in a tree using breadthFirstLog', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5,2,10,3,7,15,20]);
  });

  it('should find max depth and min depth when calling depths', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(7);
    binarySearchTree.insert(21);
    var results = binarySearchTree.depths();
    expect(results.min).to.equal(3);
    expect(results.max).to.equal(5);
  });

  xit('should rebalance the tree when calling rebalance', function() {
    var arrBreadth = [];
    var func = function(value){ arrBreadth.push(value); };
    var arrDepth = [];
    var logger = function(value){ arrDepth.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(21);
    binarySearchTree.breadthFirstLog(func);
    binarySearchTree.depthFirstLog(logger);
    console.log(arrBreadth);
    expect(arrBreadth).to.eql([10,2,15,5,20,21]);
    expect(arrDepth).to.eql([10,2,5,15,20,21]);
  });

});
