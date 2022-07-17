const graph = require("./mockData");
const bfs = (root) => {
  const queue = [root];
  const visited = new Set();
  visited.add(root);
  while (queue.length) {
    const node = queue.pop();
    console.log(node);
    const nodeList = graph[node];
    nodeList.forEach((node) => {
      if (!visited.has(node)) {
        queue.unshift(node);
        visited.add(node);
      }
    });
  }
};
bfs(2);
