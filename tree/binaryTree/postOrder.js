const treeNode = require("./mockTree");
const postOrder = (treeNode) => {
  if (!treeNode) {
    return;
  }
  postOrder(treeNode.left);
  postOrder(treeNode.right);
  console.log(treeNode.val);
};
// postOrder(treeNode);

const postOrderIterator = (treeNode) => {
  if (!treeNode) {
    return;
  }
  const stack = [treeNode];
  const outputStack = [];
  while (stack.length) {
    const node = stack.pop();
    outputStack.push(node);
    node.right && stack.push(node.left);
    node.left && stack.push(node.right);
  }
  while (outputStack.length) {
    const node = outputStack.pop();
    console.log(node.val);
  }
};
postOrderIterator(treeNode);