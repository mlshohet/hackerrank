function encryption(s) {
  let encrypted = "";

  console.log(s);
  const stripped = s.replace(/\s/g, "").trim();
  console.log(stripped);

  const root = Math.sqrt(stripped.length);

  const lowerBoundary = Math.floor(root);
  const upperBoundary = Math.ceil(root);

  console.log("length: ", stripped.length);

  console.log(root);
  console.log(lowerBoundary);
  console.log(upperBoundary);

  const grid = [];
  let currentIndex = 0;

  for (let i = 0; i <= lowerBoundary; i++) {
    grid.push(stripped.slice(currentIndex, currentIndex + upperBoundary));
    console.log(grid);
    currentIndex = currentIndex + upperBoundary;
    console.log("current index: ", currentIndex);
  }

  console.log(grid);

  for (let j = 0; j < upperBoundary; j++){
      encrypted = encrypted + ' ';

       for (let i = 0; i < grid.length; i++) {
           if (grid[i][j]) {
               encrypted = encrypted + grid[i][j];
           }
    }
  }
   

  console.log("encrypted: ", encrypted);

  return encrypted;
}

console.log(encryption("chillout"));
