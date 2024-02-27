function countingValleys(steps, path) {
  console.log(path);
  const arr = path.split("");
  console.log("ARR: ", arr);
  let numOfValleys = 0;
  let elevation = 0;
  let isNegative = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "U") {
      elevation++;
      if (elevation >= 0 && isNegative === true) {
        numOfValleys++;
        isNegative = false;
      }
    } else {
      elevation--;
      if (elevation < 0) {
        isNegative = true;
      }
    }
  }
  console.log("ELEVATION: ", numOfValleys);
  return numOfValleys;
}

const testStr = "UDDDUDUU";
countingValleys(8, testStr);
