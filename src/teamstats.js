const team = {
  _players: [
    {firstName:"Karly",
    lastName:"Catoua",
    age:3},
    {firstName:"Jamie",
    lastName:"Dundaroo",
    age:4},
    {firstName:"Rox",
    lastName:"Botham",
    age:2},
  ],
  get players () {
    return this._players;
  },
  _games: [
    {opponent: "The Mighty Douchebags",
     teamPoints: 4,
     opponentPoints: 7},
    {opponent: "The Righty Fucks",
     teamPoints:34,
     opponentPoints:54},
    {opponent: "The Bronton Rednecks",
     teamPoints: 33,
     opponentPoints: 43},
  ],
  get games () {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
     let player = {
       firstName: firstName,
       lastName: lastName,
       age: age
     };
     this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  },
};



team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs','Bunny', 76);

team.addGame('dotty birds', 34, 3);
team.addGame('darty darty doos', 54, 54);
team.addGame('chobby dobsters', 32, 12);

console.log(team.players);
console.log(team.games);
