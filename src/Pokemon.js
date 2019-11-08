import React, { Component } from 'react';

export class Pokemon extends Component {
    
    
    render() {

            return (
            <div className="Pokecard-image">
                {this.props.poke.name}
            </div>
        );
    }
}

export default Pokemon;
