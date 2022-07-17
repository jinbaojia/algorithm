const graph = require("./mockData");
const visited = new Set();
const dfs = (root) => {
  if (visited.has(root)) {
    return;
  }
  console.log(root)
  const nodeList = graph[root];
  visited.add(root);
  nodeList.forEach(dfs);
};
dfs(2) 