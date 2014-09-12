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
      list[node.value].prev = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.addToHead = function(value) {
    var node = makeNode(value);
    list[node.value] = node;

    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list[node.value].next = list.head;
      list.head.prev = node;
      list.head = node;
    }
  };

  list.removeHead = function(){
    var removed = list.head;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.prev = null;
    }
    delete list[removed.value];
    return removed.value;
  };

  list.removeTail = function() {
    var removed = list.tail;
    list.tail = list.tail.prev;
    if (list.tail !== null) {
      list.tail.next = null;
    }
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
