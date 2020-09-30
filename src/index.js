exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;

  let minValue = Number.MAX_VALUE
  array.forEach(elem => {
    if (minValue > elem) minValue = elem;
  });

  return minValue;
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;

  let maxValue = Number.MIN_VALUE
  array.forEach(elem => {
    if (maxValue < elem) maxValue = elem;
  });

  return maxValue
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;

  let sum = 0
  array.forEach(elem => {
    sum += elem
  });

  return sum / array.length
}