class Stack {
  dataSource = [];
  length = 0;
  constructor() {}
  push(value) {
    this.dataSource[this.length++] = value;
  }
  pop() {
    this.length--;
    return this.dataSource.pop();
  }
  clear() {
    this.dataSource = [];
    this.length = 0;
  }
  peek() {
    return this.dataSource[this.length - 1];
  }
}
module.exports = Stack;
