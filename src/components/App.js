import React from "react";
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import "../app.css";


class App extends React.Component {
  state = {
    players: [
      {
        id: 1,
        score: 0,
        name: "Kevin",
      },
      {
        id: 2,
        score: 0,
        name: "Moises",
      },
      {
        id: 3,
        score: 0,
        name: "Ashley",
      },
      {
        id: 4,
        score: 0,
        name: "Abi",
      }
    ]
  };

  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Player List */}
        {this.state.players.map((player, index) =>
          <Player
            id={player.id}
            name={player.name}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />

        )}

        <AddPlayerForm
          AddPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App