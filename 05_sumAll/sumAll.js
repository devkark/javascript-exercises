const sumAll = function(min, max) {
  if (min < 0 || max < 0) return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min > max) {
    const tmp = max;
    max = min;
    min = tmp;
  }

  let sum = 0;
  for (min; min <= max; min++) {
    sum += min;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
