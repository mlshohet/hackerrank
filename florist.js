function getMinimumCost(k, c) {
    const sorted = c.sort((a, b) => b - a);
    let current = 0;
    let counter = 0;
    let total = 0;
    while (current < sorted.length) {
        const kSlice = sorted.slice(current, current + k);
        let subTotal = kSlice.reduce((subSum, price) => (price * counter + price) + subSum, 0);
        console.log(kSlice);
        console.log("SUBTOTAL: ", subTotal);
        total = total + subTotal;
        current += k;
        counter += 1;
    }

    console.log("TOTAL: ", total);
    return total;
}

const testArr = [1,2,3,4,1,2,4,6];
const testArr2 = [1,2,3,4];
getMinimumCost(3, testArr2);