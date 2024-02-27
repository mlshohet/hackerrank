function chiefHopper(arr) {
  let minNeeded = arr[0];

  while (true) {
    let endResult = minNeeded;

    for (let i = 0; i < arr.length; i++) {
      if (endResult > arr[i]) {
        endResult = endResult + (endResult - arr[i]);
      }

      if (endResult < arr[i]) {
        endResult = endResult - (arr[i] - endResult);
      }
      console.log("end result: ", endResult);
    }
    // console.log("end result: ", endResult);
    if (endResult >= 0) {
      break;
    } else {
      minNeeded += 1;
    }
  }

  console.log("MIN: ", minNeeded);
  return minNeeded;
}

const testArr = [3, 4, 3, 2, 4];
const testArr2 = [1, 6, 4];
chiefHopper([5]);
