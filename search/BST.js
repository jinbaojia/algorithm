class Node {
  key;
  val;
  left;
  right;
  n;
  constructor(key, val, n) {
    this.key = key;
    this.val = val;
    this.n = n;
  }
}
class BST {
  root;

  constructor() {}
  size(node) {
    if (!node) {
      return 0;
    }
    return node.n;
  }
  get(key) {
  

  }
}
