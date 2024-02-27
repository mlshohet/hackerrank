const greedy = (arr, k) => {
  const arrSorted = arr.sort((a, b) => a - b);

  let min = Infinity;

  for (let i=0; i<arrSorted.length; i++) {
    const unfairness = arrSorted[i+k-1] - arrSorted[i];
    if (unfairness < min) {
        min = unfairness;
    }
  }
  console.log(arrSorted);

  return min;
};

const testArr = [10, 100, 300, 200, 1000, 20, 30];
const testArr2 = [100, 200, 300, 350, 400, 401, 402];
console.log(greedy(testArr2, 3));
