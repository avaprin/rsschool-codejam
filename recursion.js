module.exports.recursion = function recursion(tree) {
  const res = [];
  (function getResult(...trees) {
    let next = [];
    res.push(trees.map(a => a.value));
    trees.forEach(a => next.push(a.left, a.right));
    next = next.filter(a => typeof a !== 'undefined');
    if (!next.length) return res;
    getResult(...next);
    return res;
  }(tree));
  return res;
};
