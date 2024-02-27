const getRankings = (ranked, player) => {
  const dedupedRankings = [...new Set(ranked)];

  const rankings = [];
  for (let i=0; i<player.length; i++) {
    const sameScoreIndex = dedupedRankings.findIndex(
      (score) => score === player[i]
    );

    if (sameScoreIndex !== -1) {
      rankings.push(sameScoreIndex + 1);
    } else {
      const nextRankIndex = dedupedRankings.findIndex(
        (score) => player[i] > score
      );
      if (nextRankIndex !== -1) {
        rankings.push(nextRankIndex + 1);
      } else {
        rankings.push(dedupedRankings.length + 1);
      }
    }
  }

  return rankings;
};


const oldScores = [100, 100, 50, 40, 40, 20, 10];
const newScores = [5, 25, 50, 120]; // 6 4 2 1
const result = getRankings(oldScores, newScores);
console.log('RESULT: ', result);
