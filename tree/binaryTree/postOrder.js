const treeNode = require("./mockTree");
const postOrder = (treeNode) => {
  if (!treeNode) {
    return;
  }
  postOrder(treeNode.left);
  console.log(treeNode.val);
  postOrder(treeNode.right);
};
// inOrder(treeNode);

const postOrderIterator = (treeNode) => {
  if (!treeNode) {
    return;
  }
  const stack = [treeNode];
};
