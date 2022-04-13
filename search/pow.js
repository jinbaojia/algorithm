//leetcode-cn.com/problems/powx-n/solution/powx-n-by-leetcode-solution/
https: var myPow = function (x, n) {
  let res = 1;
  let i = Math.abs(n);
  while (i != 0) {
    if (i % 2 != 0) {
      res *= x;
    }
    x *= x;
    i = Math.floor(i / 2);
  }
  return n < 0 ? 1 / res : res;
};

console.log(myPow(2, 10));

// 0 1  2  5 10
const recursivePow = (x, n) => {
  const cycle = (x, n) => {
    if (n === 1) {
      return x;
    }
    const y = cycle(x, Math.floor(n / 2));
    return n % 2 !== 0 ? y * y * x : y * y;
  };

  return n > 0 ? cycle(x, n) : 1 / cycle(x, -n);
};

console.log(recursivePow(2, 10));
