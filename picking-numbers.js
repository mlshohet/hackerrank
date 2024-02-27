function pickingNumbers(a) {
  const sorted = a.sort((a, b) =>  a-b >0 ? 1 : -1);
  const counts = [];
  let count = 1;
  let current = sorted[0];
  console.log("SORTED: ", sorted);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - current < 2) {
      // console.log("FROM ARR: ", sorted[i]);
      // console.log("CURRENT: ", current);
      count++;
      // console.log("COUNT: ", count);
    } else {
      current = sorted[i];
      //console.log("CURRENT: ", current);
      counts.push(count++);
      count = 1;
    }
  }

  console.log("COUNT: ", count);
  console.log("COUNTS: ", counts);
  return counts.length ? Math.max(...counts) : sorted.length;
}

const testArr1 = [4, 6, 5, 3, 3, 1];
const testArr2 = [1, 2, 2, 3, 1, 2];
const testArr3 = [
  14, 18, 17, 10, 9, 20, 4, 13, 19, 19, 8, 15, 15, 17, 6, 5, 15, 12, 18, 2, 18,
  7, 20, 8, 2, 8, 11, 2, 16, 2, 12, 9, 3, 6, 9, 9, 13, 7, 4, 6, 19, 7, 2, 4, 3,
  4, 14, 3, 4, 9, 17, 9, 4, 20, 10, 16, 12, 1, 16, 4, 15, 15, 9, 13, 6, 3, 8, 4,
  7, 14, 16, 18, 20, 11, 20, 14, 20, 12, 15, 4, 5, 10, 10, 20, 11, 18, 5, 20,
  13, 4, 18, 1, 14, 3, 20, 19, 14, 2, 5, 13,
];
const testArr4 = [66,66,66,66,66];
// console.log("RESULT: ", pickingNumbers(testArr1));
console.log("RESULT2: ", pickingNumbers(testArr4));
