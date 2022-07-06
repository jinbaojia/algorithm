const treeNode = require("./mockTree");
const preOrder = (treeNode) => {
  if (!treeNode) {
    return;
  }
  console.log(treeNode.val);
  preOrder(treeNode.left);
  preOrder(treeNode.right);
};

// preOrder(treeNode)
const preOrderIterator = (treeNode) => {
  if (!treeNode) {
    return;
  }
  const stack = [treeNode];
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.val);
    node.left && stack.push(node.right);
    node.right && stack.push(node.left);
  }
};


preOrderIterator(treeNode)