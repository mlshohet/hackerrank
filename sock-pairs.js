function sockMerchant(n, ar) {
  let pairCounter = 0;
  let checked = {};

  for (let i = 0; i < ar.length; i++) {
    if (checked[ar[i]]) {
      checked[ar[i]] += 1;
    } else {
      checked[ar[i]] = 1;
    }
  }

  console.log("Checked : ", checked);
  const counts = Object.values(checked);
  console.log("Counts: ", counts);

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > 1) {
        if (counts[i] % 2 !== 0) {
            console.log("COUNT: ", counts[i]);
            pairCounter += (counts[i] - 1) / 2;
        } else {
            pairCounter += (counts[i]) / 2;
        }
    }
  }

  console.log("Pair counter: ", pairCounter);
}

testArr = [3, 3, 5, 5, 5, 6, 7, 1];
sockMerchant(3, testArr);
