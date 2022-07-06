const treeRoot = require("./mockData");
const bfs = (root) => {
  const queue = [root];
  while (queue.length > 0) {
    const treeNode = queue.pop();
    console.log(treeNode.val);
    queue.unshift(...treeNode.children);
  }
};

bfs(treeRoot);
  