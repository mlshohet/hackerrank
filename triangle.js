function maximumPerimeterTriangle(sticks) {
    console.log("Arr: ", sticks);
    const sortedDesc = sticks.sort((a, b) => b > a ? 1 : -1);
    console.log("DESC: ", sortedDesc);
    for (let i =0; i< sortedDesc.length; i++) {
        if (sortedDesc[i] < sortedDesc[i+1] + sortedDesc[i+2]) {
            return [sortedDesc[i+2], sortedDesc[i+1], sortedDesc[i]];
        }
    }
    return [-1];
}

const testArr = [1,2,3];
const result = maximumPerimeterTriangle(testArr);
console.log("RESULT :", result);