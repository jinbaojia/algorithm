class Node {
  left = null;
  right = null;
  value;

  constructor(value, left, right) {
    this.value = value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 前中后遍历指的是 根节点的遍历顺序
 */
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

  /**
   * 中序遍历-递归
   * @param node
   */
  inOrderRecursively(node) {
    if (node === null) { return; }
    this.inOrderRecursively(node.left);
    console.log(node.value);
    this.inOrderRecursively(node.right);
  }

  /**
   * 中序遍历-迭代
   */
  inOrder(node) {
    if (!node) { return; }
    const queue = [node];

  }
}

const arr = [23,45,16,37,3,99,22];
const bst = new BST();
for (const iterator of arr) {
  bst.insert(iterator);
}
console.log(bst);
bst.inOrderRecursively(bst.root);