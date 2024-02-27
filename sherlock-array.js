function balancedSumsBrute(arr) {
    let result = 'NO';
    for (let i=0; i< arr.length; i++) {
        const subSum1 = arr.slice(0, i).reduce((total, num) => total + num, 0);
        const subSum2 = arr.slice(i+1).reduce((total, num) => total + num, 0);
        console.log("SUBSUM1: ", subSum1);
        console.log("SUBSUM2: ", subSum2);
        if (subSum1 === subSum2) {
            result = 'YES';
        }
    }

    return result;
}

function balancedSums(arr) {
    const totalSum = arr.reduce((total, num) => total + num, 0);
    let firstSum = 0;
    for (let i=0; i< arr.length; i++) {
        const sumSansCurrent = totalSum - arr[i];
       
        console.log("FISRT SUM: ", firstSum);
        console.log("SUM SANS: ", sumSansCurrent);
        if (sumSansCurrent / 2 === firstSum) {
            return 'YES';
        }
        firstSum += arr[i];
    }

    return 'NO';
}

const testArr = [1,2,4,3];
console.log(balancedSums(testArr));