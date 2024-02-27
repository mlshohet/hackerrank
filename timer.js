function strangeCounter(time) {

  // init the stage of numbers
  // and the boundary
  // to find out which power of 2 to multiple 3 by

  let stage = 0;
  let timeBoundary = 0;

  // multiply 3 by a power of 2 until
  // the result is larger than time
  
  // Subtract 2 from result to get the exact first time
  // in the stage

  // when the result is larger than time
  // we know the time is in the proper stage
  // needed to rasie 2 by and multiply by 3

  while (true) {
    timeBoundary = 3 * 2 ** (stage + 1) - 2;

    if (timeBoundary > time) {
      break;
    }

    stage = stage + 1;
  }

  // get the values for the first time and the first value
  // in a stage
  // basically the same thing we did in the loop

  let topValue = 3 * 2 ** stage;
  const topTime = topValue - 2;

  // get the difference needed to reach the specified time
  // from the first time
  // then subtract it from the very first value
  const timeDifference = time - topTime;
  const finalValue = topValue - timeDifference;

  return finalValue;
}

const time = 21;
console.log(`Timer at time ${time} is ${strangeCounter(time)}`);
