function absolutePermutation(n, k) {
  const perm = [];

  let pos;
  let sum;
  let dif;
  let used = {};

  for (let j = 0; j < n; j++) {
    sum = j + 1 + k;
    dif = j + 1 - k;

    if (j + 1 <= k || used[dif]) {
      pos = sum;
      used[pos] = "used";
    } else if (j + 1 > k) {
      pos = dif;
    }

    if (pos > n) {
      return [-1];
    }
    perm[j] = pos;
  }

  return perm;
}

console.log(absolutePermutation(8, 2));
console.log(absolutePermutation(10, 1));
