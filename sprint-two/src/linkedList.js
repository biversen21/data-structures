var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    list[node.value] = node;

    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else  {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var removed = list.head;
    list.head = list.head.next;
    delete list[removed.value];
    return removed.value;
  };

  list.contains = function(target){
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    } // else
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
