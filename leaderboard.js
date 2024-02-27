function climbingLeaderboard(ranked, player) {
    for (let i = 0; i< ranked.length; i++) {
        console.log("RANKED: ", ranked[i]);
    }

    for (let j = 0; j< player.length; j++) {
        console.log("PLAYER: ", player[j])
    }
}

const testRanked = [100, 90, 90, 80];
const testPlayer = [105, 80, 75];

climbingLeaderboard(testRanked, testPlayer);