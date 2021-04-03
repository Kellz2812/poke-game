import React, { Component } from 'react';
import "./styles/pokecard.css";

export class Pokemon extends Component {

    render() {

        return (
            <div>
                <div className="Pokecard-heading">
                    {this.props.poke.name}
                </div>
                <img src={this.props.poke.pokeIMG} alt="pokemon-pic"></img>
                <div className="Pokecard-stats">
                    <p>Type: {this.props.poke.type}</p>
                    <p>Weakness: {this.props.poke.weakness}</p>
                    <p>Speed: {this.props.poke.speed}  Strength: {this.props.poke.strength}</p>
                </div>
            </div>
        );
    }
}

export default Pokemon;
