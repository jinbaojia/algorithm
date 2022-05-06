class Node {
  left = null;
  right = null;
  value;
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  root = null;
  insert(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let curNode = this.root;
    let parent;
    while (curNode) {
      parent = curNode;
      if (curNode.value > data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    if (parent.value > data) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }

  inOrderRecursively() {}
}

const arr = [65, 23, 54, 1, 3, 659, 23, 5, 8, 334, 68, 09, 674, 26, 568, 234];
const bst = new BST();
for (const iterator of arr) {
  bst.insert(iterator);
}

console.log(bst);
