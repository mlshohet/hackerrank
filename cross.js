function twoCrosses(grid) {
    let area = 0;
    console.log(grid)
    for (let i=0; i< grid.length; i++)
        for (let j=0; j<grid[i].length; j++) {
            if (
                grid[i][j] === 'G' &&
                grid[i][j-1] === 'G' &&
                grid[i][j+1] === 'G' &&
                grid[i-1] && grid[i-1][j] === 'G' &&
                grid[i+1] && grid[i+1][j] === 'G'
            ) {
                console.log(grid[i][j]);
                if (grid[i-1]) {
                   console.log("Letter above: ", grid[i-1][j]); 
                }

                if (grid[i+1]) {
                    console.log("Letter below: ", grid[i+1][j]);
                }
                
                console.log("True cross");
            }
        }

    return area;
}

const grid = [
    'GGGGGG',
    'GGBBGB',
    'GGGGGG',
    'GGBBGB',
    'GGGGGG'
];

twoCrosses(grid);