//Collision Implementation
function HashTable(size) {
  this.size = size;
  this.buckets = new Array(size);
  for(var i = 0; i < size; ++i) {
    this.buckets[i] = new LinkedList();
  }
  this.add = function(value) {
    var index = this.hash(value);
    this.buckets[index].add(value);
  };
  this.hash = function(value) { ... };
}

var hash = new HashTable(5);
hash.add('i');
hash.add('will');
hash.add('face');
hash.add('my');
hash.add('fear');
Example