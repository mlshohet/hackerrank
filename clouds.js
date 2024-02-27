function jumpingOnClouds(c) {
    let jumps = 0;
    let currentIndex = 0;

    while (currentIndex < c.length - 1) {
        if (c[currentIndex + 2] === 0) {
            jumps += 1;
            currentIndex = currentIndex + 2;
        } else {
            jumps += 1;
            currentIndex = currentIndex + 1;
        }
    }

    return jumps;
}

const arr = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0];
const arr2 = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
const arr3 = [0, 0, 0, 1, 0, 0];

console.log("Answer: ", jumpingOnClouds(arr2));