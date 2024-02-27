const arr = [
  ["a", "c", "d", "e", "e"],
  ["b", "a", "c", "a", "f"],
  ["a", "d", "c", "d", "e"],
  ["w", "s", "c", "d", "e"],
];

for (let [x, y, z] of arr) {
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
}
