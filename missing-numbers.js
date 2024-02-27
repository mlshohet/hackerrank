function missingNumbers(arr, brr) {

    for (let i=0; i<arr.length; i++) {
        const indexOfNum = brr.findIndex(el => el === arr[i]);
        if (indexOfNum !== -1) {
            brr.splice(indexOfNum, 1);
        }
    }
    
    return [...new Set(brr)].sort((a, b) => a - b);
}


const testArr1 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const testArr2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

console.log(missingNumbers(testArr1, testArr2));