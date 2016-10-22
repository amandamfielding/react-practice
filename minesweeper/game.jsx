import React from 'react';
import * as Components from './minesweeper_logic';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Components.Board(10,10)};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame} />
      </div>
    );
  }
}

export default Game;
