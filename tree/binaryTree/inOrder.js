const treeNode = require("./mockTree");
const inOrder = (treeNode) => {
  if (!treeNode) {
    return;
  }
  inOrder(treeNode.left);
  console.log(treeNode.val);
  inOrder(treeNode.right);
};
inOrder(treeNode);

const inOrderIterator = (treeNode) => {
  if (!treeNode) {
    return;
  }
  const stack = [];
  let p = treeNode;
  while (p || stack.length) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const node = stack.pop();
    console.log(node.val);
    p = node.right;
  }
};
// inOrderIterator(treeNode);
