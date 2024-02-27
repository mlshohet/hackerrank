function stones(n, a, b) {
  let lastStonesArr = [];

  for (let i = n; i >= 1; i--) {
    lastStonesArr.push(a * (i - 1) + b * (n - i));
  }

  lastStonesArr = lastStonesArr.sort((a, b) => a - b);

  return [...new Set(lastStonesArr)];
}

console.log(stones(3, 1, 2));