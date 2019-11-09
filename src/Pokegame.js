import React, { Component } from 'react';
import pokemonList from './seedPokemon.js';
import {Pokemon} from "./Pokemon";
import "../src/styles/pokegame.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export class Pokegame extends Component {
    
    constructor(props) {
        super(props);
        this.state = { player1: pokemonList[0], player2: pokemonList[1], winner: 0, index: 0, openDialog: false};
        this.generatePlayer1=this.generatePlayer1.bind(this);
        this.generatePlayer2=this.generatePlayer2.bind(this);
        this.generateWinner=this.generateWinner.bind(this);
        this.previousPokemonPlayer1=this.previousPokemonPlayer1.bind(this);
        this.previousPokemonPlayer2=this.previousPokemonPlayer2.bind(this);
      };

      generatePlayer1 = () => {
         let i = this.state.index < pokemonList.length ? this.state.index += 1 : 0;
        this.setState({index: i});
        pokemonList.slice(0, this.state.index).map(v => {
            this.setState({player1: v});
        });
      };

      generatePlayer2 = () => {
         let i = this.state.index < pokemonList.length ? this.state.index += 1 : 0;
        this.setState({index: i});
        pokemonList.slice(0, this.state.index).map(v => {
            this.setState({player2: v});
        });
      }
      previousPokemonPlayer1 = () =>{
        let i = this.state.index < pokemonList.length ? this.state.index -=1 : 0;
        this.setState({index: i});
        pokemonList.slice(0, this.state.index).map(v => {
            this.setState({player1: v});
        });
      }

      previousPokemonPlayer2 = () =>{
        let i = this.state.index < pokemonList.length ? this.state.index -=1 :  0;
        this.setState({index: i});
        pokemonList.slice(0, this.state.index).map(v => {
            this.setState({player2: v});
        });
      }
    
    
      generateWinner = () => {
        let fighters = [this.state.player1, this.state.player2];
        let rand = Math.random();
        let result1;
        if (rand < 0.5) {
            result1 = 0;
        } else {
            result1 = 1;
        };        
        this.setState({ winner: fighters[result1], openDialog: true});

      };
      
    render() {
        
        const handleClose = () => {
            this.setState({openDialog: false});
          };
    
        return (
            <div>
                <h1>Pokegame!</h1>
                <p>Choose your Pokemon!</p>                
                
                <div className="player-display">
                    <div className="player1">
                        <div className="player1-card">
                        <Pokemon poke={this.state.player1}/>
                        </div>
                    
                        <div className="player1-buttons">
                        <button 
                        onClick={this.generatePlayer1}
                        >New Pokemon!
                        </button>

                        <button 
                        className="backButton"                        
                        onClick={this.previousPokemonPlayer1}
                        >Previous Pokemon!
                        </button>   
                        </div>
                    </div>
                    
                    <div className="player2">
                        <div className="player2-card"> 
                            <Pokemon poke={this.state.player2}/>
                        </div>
                        
                        <button                          
                        onClick={this.generatePlayer2}
                        >New Pokemon!
                        </button>   

                        <button               
                        className="backButton"           
                        onClick={this.previousPokemonPlayer2}
                        >Previous Pokemon!
                        </button>                    
                    </div>
                </div>
                <div>
                    <button
                    className = "winner"
                    onClick={this.generateWinner}
                    >Click to fight!!!</button>
                </div>
                <div className="alertDialog">
                        <Dialog
                        open={this.state.openDialog}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"The Winner is..."}</DialogTitle>
                        <DialogContent>
                         <Pokemon poke={this.state.winner}/>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Play again!
                        </Button>
                        </DialogActions>
                    </Dialog>
                    </div>
            </div>
        );
    }
}

export default Pokegame;
