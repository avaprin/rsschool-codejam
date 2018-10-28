module.exports.sumOfOther = function sumOfOther(arr) {
  if (!arr) return [];
  if (arr.length === 1) return arr;
  const sum = [];
  for (let i = 0; i < arr.length; i += 1) {
    sum[i] = (arr.filter((elem, index) => index !== (+i)).reduce((acc, curVal) => acc + curVal));
  }
  return sum;
};
