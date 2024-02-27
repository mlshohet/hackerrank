function sumXor(n) {
  const binaryString = n.toString(2);
  console.log(binaryString);
  let numOfZeros = 0;
  for (let letter of binaryString) {
    if (letter === '0') {
        numOfZeros++;
    }
  }

  // This is governed by the number of zeros
  // from which a matrix of all possible combinations
  // has to be constructed. This is the size of that matrix

  return 2 ** numOfZeros;
}

console.log(sumXor(0));
