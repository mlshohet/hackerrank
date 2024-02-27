function printGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i]);
  }
}

function bomberMan(n, grid) {
  const explosions = {};

  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "0") {
        if (explosions[i]) {
          !explosions[i].includes(j - 1) && explosions[i].push(j - 1);
          !explosions[i].includes(j) && explosions[i].push(j);
          !explosions[i].includes(j + 1) && explosions[i].push(j + 1);
          if (explosions[i - 1]) {
            !explosions[i - 1].includes(j) && explosions[i - 1].push(j);
          } else {
            explosions[i - 1] = [j];
          }
          if (explosions[i + 1]) {
            !explosions[i + 1].includes(i + 1) && explosions[i + 1].push(j);
          } else {
            explosions[i + 1] = [j];
          }
        } else {
          explosions[i] = [j - 1];
          explosions[i].push(j);
          explosions[i].push(j + 1);
          if (explosions[i - 1]) {
            !explosions[i - 1].includes(j) && explosions[i - 1].push(j);
          } else {
            explosions[i - 1] = [j];
          }
          if (explosions[i + 1]) {
            !explosions[i - 1].includes(j) && explosions[i + 1].push(j);
          } else {
            explosions[i + 1] = [j];
          }
        }
      }
    }

  const explodedGrid = [];
  for (let k = 0; k < grid.length; k++) {
    let newRow = "";
    for (let l = 0; l < grid.length; l++) {
      if (explosions[k.toString()].includes(l)) {
        newRow = newRow + ".";
        explosions[k.toString()].splice(explosions[k.toString()].indexOf(l), 1);
      } else {
        newRow = newRow + "0";
      }
    }
    explodedGrid.push(newRow);
  }

  printGrid(grid);
  console.log("explosions: ", explosions);
  console.log("exploded grid: ", explodedGrid);
  printGrid(explodedGrid);
}

bomberMan(1, ["0.00", "...0", "0...", "00.0"]);
