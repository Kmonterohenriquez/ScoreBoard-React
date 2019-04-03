import React, {Component} from "react";
import Header from './Header';
import Player from './Player';
import "../app.css";


export default class App extends Component {
  state ={
    players: [
      {
        id: 1,
        name: "Kevin",
      },
      {
        id: 2,
        name: "Moises",
      },
      {
        id: 3,
        name: "Ashley",
      },
      {
        id: 4,
        name: "Abi",
      }
    ]
  };

  handleRemovePlayer = (id) =>{
    this.setState( prevState =>{
      return{
      players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
    <div className="scoreboard">
      <Header 
      title="Scoreboard" 
      totalPlayers={this.state.players.length} 
    />
    {/* Player List */}
    {this.state.players.map(player =>
        <Player 
        id = {player.id}
        name = {player.name} 
        key = {player.id.toString}
        removePlayer = {this.handleRemovePlayer}
        /> 
    )}
    </div>
    );
  }
}
