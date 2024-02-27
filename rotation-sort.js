function rotateSort(arr) {
    let flips = 0;
    for (let i=0; i<arr.length; i++) {
        //console.log(arr[i]);
        if (arr[i] !== i+1) {
            //console.log(arr[i]);
            const correctIndex = arr.findIndex(num => num === i+1);
            console.log(`${arr[i]} - correct index: ${correctIndex}`);
            const temp = arr[i];
            arr[i] = arr[correctIndex];
            arr[correctIndex] = temp;
            flips += 1;
        }
        else {
            console.log(`${arr[i]} - index: ${i}`);
        }
    }
    //return true;
    console.log(arr);
    // console.log(flips);
    if (flips % 2 === 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}

const testArr = [9, 6, 8, 12, 3, 7, 1, 11, 10, 2, 5, 4];
const testArr2 = [1,2,3,4,5,6];
const result = rotateSort(testArr);
console.log(result);