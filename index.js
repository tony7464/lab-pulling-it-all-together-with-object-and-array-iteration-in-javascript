function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function findPlayer(playerName) {
    const game = gameObject();
    return game.home.players[playerName] || game.away.players[playerName];
}

function findTeam(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) return game.home;
    if (game.away.teamName === teamName) return game.away;
}

function allPlayers() {
    const game = gameObject();
    const homePlayers = Object.entries(game.home.players).map(function (entry) {
        const name = entry[0];
        const stats = entry[1];
        return Object.assign({ name: name }, stats);
    });
    const awayPlayers = Object.entries(game.away.players).map(function (entry) {
        const name = entry[0];
        const stats = entry[1];
        return Object.assign({ name: name }, stats);
    });
    return homePlayers.concat(awayPlayers);
}

function numPointsScored(playerName) {
    return findPlayer(playerName).points;
}

function shoeSize(playerName) {
    return findPlayer(playerName).shoe;
}

function teamColors(teamName) {
    return findTeam(teamName).colors;
}

function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
}

function playerNumbers(teamName) {
    return Object.values(findTeam(teamName).players).map(player => player.number);
}

function playerStats(playerName) {
    return findPlayer(playerName);
}

function bigShoeRebounds() {
    const playerWithBiggestShoe = allPlayers().reduce((best, player) =>
        player.shoe > best.shoe ? player : best
    );
    return playerWithBiggestShoe.rebounds;
}

function mostPointsScored() {
    return allPlayers().reduce((best, player) =>
        player.points > best.points ? player : best
    ).name;
}

function winningTeam() {
    const game = gameObject();
    const homePoints = Object.values(game.home.players).reduce(
        (sum, player) => sum + player.points,
        0
    );
    const awayPoints = Object.values(game.away.players).reduce(
        (sum, player) => sum + player.points,
        0
    );
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    return allPlayers().reduce((best, player) =>
        player.name.length > best.name.length ? player : best
    ).name;
}

function doesLongNameStealATon() {
    const players = allPlayers();
    const longest = players.reduce((best, player) =>
        player.name.length > best.name.length ? player : best
    );
    const mostSteals = Math.max(...players.map(player => player.steals));
    return longest.steals === mostSteals;
}

console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Alan Anderson"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Jeff Adrien"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
