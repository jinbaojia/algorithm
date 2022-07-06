const treeRoot = require("./mockData");
const dsf = (root) => {
  console.log(root.val);
  root.children.forEach(dsf);
};
dsf(treeRoot);