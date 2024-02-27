function gridChallenge(grid) {
  const sortedGrid = [];
  for (let i = 0; i < grid.length; i++) {
    console.log("LINE: ", grid[i]);
    const arrFromStr = grid[i].split("");
    const sortedLine = arrFromStr.sort();
    sortedGrid.push(sortedLine.toString().replace(/,/g, ""));
    console.log("SORTED: ", sortedLine);
  }
  console.log("GRID: ", sortedGrid);
//sortedGrid.sort();
//console.log("GRID SORTED: ", sortedGrid);

  for (let i = 0; i < sortedGrid.length-1; i++) {
    for (let j = 0; j < sortedGrid[i].length; j++) {
      console.log("CURRENT: ", sortedGrid[i][j]);
      sortedGrid[i + 1] && console.log("NEXT IN COL: ", sortedGrid[i + 1][j]);
      if (sortedGrid[i + 1] && sortedGrid[i][j] > sortedGrid[i + 1][j]) {
        console.log("NO");
        return "NO";
      }
    }
  }

  console.log("YES");
  return "YES";
}

const testGrid = ["adrs", "efho", "zyaj"];
const testGrid2 = ["mpxz", "abcd", "wlmf"];
gridChallenge(testGrid2);
