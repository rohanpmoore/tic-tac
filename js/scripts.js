function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

function Square() {
  this.full = false;
  this.symbol = " ";
}

function Board(name1, name2) {
  var playerOne = new Player(name1, "X");
  var playerTwo = new Player(name2, "O");
  var line1 = [new Square(), new Square(), new Square()];
  var line2 = [new Square(), new Square(), new Square()];
  var line3 = [new Square(), new Square(), new Square()];
  var board = [line1, line2, line3];
}
