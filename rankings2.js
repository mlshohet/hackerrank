const getRankings = (ranked, player) => {
  const dedupedRankings = [...new Set(ranked)];

  const result = [];
  let dedupedRankingsCounter = dedupedRankings.length - 1;

  for (let i = 0; i < player.length; i++) {
    while (player[i] > dedupedRankings[dedupedRankingsCounter]) {
      dedupedRankingsCounter = dedupedRankingsCounter - 1;
      console.log(player[i]);
    }
    if (player[i] === dedupedRankings[dedupedRankingsCounter]) {
      result.push(dedupedRankingsCounter + 1);
    } else {
      result.push(dedupedRankingsCounter + 2);
    }

    console.log('RESULT:', result);
  }

  return result;
};

const oldScores = [100, 100, 50, 40, 40, 20, 10]; // [100, 50, 40, 20, 10]
const newScores = [5, 25, 50, 120]; // 6 4 2 1
const result = getRankings(oldScores, newScores);
console.log('RESULT: ', result);
