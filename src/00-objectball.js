function gameobject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 11,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
        }
    }
    }
}

function numPointsScored(playerName) {
  const game = gameobject()
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points
    }
  }
}

function shoeSize(playerName) {
  const game = gameobject()
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].shoe
    }
  }
}

function teamColors(teamName) {
  const game = gameobject()
  for (const team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors
    }
  }
}

function teamNames() {
  const game = gameobject()
  return [game.home.teamName, game.away.teamName]
}

function playerNumbers(teamName) {
  const game = gameobject()
  const team = teamName === game.home.teamName ? game.home : game.away
  return Object.values(team.players).map(player => player.number)
}

function playerStats(playerName) {
  const game = gameobject()
  for (const team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName]
    }
  }
}

function bigShoeRebounds() {
  const game = gameobject()
  let player = null
  let maxShoeSize = 0
  for (const team in game) {
    for (const playerName in game[team].players) {
      const playerShoeSize = game[team].players[playerName].shoe
      if (playerShoeSize > maxShoeSize) {
        maxShoeSize = playerShoeSize
        player = game[team].players[playerName]
      }
    }
  }
  return player.rebounds
}

function mostPointsScored() {
  const game = gameobject()
  let player = null
  let maxPoints = 0
  for (const team in game) {
    for (const playerName in game[team].players) {
      const playerPoints = game[team].players[playerName].points
      if (playerPoints > maxPoints) {
        maxPoints = playerPoints
        player = playerName
      }
    }
  }
  return player
}

function winningTeam() {
  const game = gameobject()
  let homePoints = 0
  let awayPoints = 0
  for (const team in game) {
    for (const playerName in game[team].players) {
      const playerPoints = game[team].players[playerName].points
      if (team === 'home') {
        homePoints += playerPoints
      } else {
        awayPoints += playerPoints
      }
    }
  }
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName
}

function playerWithLongestName() {
  const game = gameobject()
  let player = null
  let longestName = ''
  for (const team in game) {
    for (const playerName in game[team].players) {
      if (playerName.length > longestName.length) {
        longestName = playerName
        player = playerName
      }
    }
  }
  return player
}

function doesLongNameStealATon() {
  const game = gameobject()
  let player = null
  let mostSteals = 0
  for (const team in game) {
    for (const playerName in game[team].players) {
      const playerSteals = game[team].players[playerName].steals
      if (playerSteals > mostSteals) {
        mostSteals = playerSteals
        player = playerName
      }
    }
  }
  return player === playerWithLongestName()
}

