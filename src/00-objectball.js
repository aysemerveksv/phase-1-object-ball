// Define your gameObject function here
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
        "Reggie Evans": {
          // Define Reggie Evans' stats here
        },
        // Define other home team players here
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          // Define Jeff Adrien's stats here
        },
        "Bismak Biyombo": {
          // Define Bismak Biyombo's stats here
        },
        // Define other away team players here
      },
    },
  };
}

// Define numPointsScored function here
function numPointsScored(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
  return null; // Return null if the player is not found
}

// Define shoeSize function here
function shoeSize(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null; // Return null if the player is not found
}

// Define teamColors function here
function teamColors(teamName) {
  const game = gameObject();
  for (const teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
  return null; // Return null if the team is not found
}

// Define teamNames function here
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// Define playerNumbers function here
function playerNumbers(teamName) {
  const game = gameObject();
  const players = game.home.teamName === teamName ? game.home.players : game.away.players;
  return Object.values(players).map((player) => player.number);
}

// Define playerStats function here
function playerStats(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null; // Return null if the player is not found
}

// Define bigShoeRebounds function here
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;
  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      const player = players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = playerName;
      }
    }
  }
  return playerWithLargestShoe ? game.home.players[playerWithLargestShoe].rebounds : null;
}

// Define mostPointsScored function here
function mostPointsScored() {
  const game = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints = null;
  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      const player = players[playerName];
      if (player.points > mostPoints) {
        mostPoints = player.points;
        playerWithMostPoints = playerName;
      }
    }
  }
  return playerWithMostPoints;
}

// Define winningTeam function here
function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      const player = players[playerName];
      if (teamKey === 'home') {
        homePoints += player.points;
      } else {
        awayPoints += player.points;
      }
    }
  }
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Define playerWithLongestName function here
function playerWithLongestName() {
  const game = gameObject();
  let longestName = '';
  let playerWithLongestName = null;
  for (const teamKey in game) {
    const players = game[teamKey].players;
    for (const playerName in players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
      }
    }
  }
  return playerWithLongestName;
}

// Define doesLongNameStealATon function here (Super Bonus)
function doesLongNameStealATon() {
  const game = gameObject();
  const playerWithLongestName = playerWithLongestName();
  const playerStats = playerStats(playerWithLongestName);
  return playerStats.steals > 10; // You can adjust the threshold as needed
}