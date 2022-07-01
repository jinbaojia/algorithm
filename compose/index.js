function compose(...funcs) {
  const length = funcs.length;
  if (length === 0) {
    return (arg) => arg;
  }
  if (length === 1) {
    return (...args) => funcs[0](...args);
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

function compose_async(...funcs) {
  const init = funcs.pop();
  return (...args) =>
    funcs
      .reverse()
      .reduce(
        (promise, func) => promise.then(func),
        Promise.resolve(init(...args))
      );
}
