import React from 'react';
import pokemonList from './seedPokemon.js';
import { Pokemon } from "./Pokemon";
import "../src/styles/pokegame.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Pokegame() {

    const [player1, setPlayer1] = React.useState(pokemonList[0]);
    const [player2, setPlayer2] = React.useState(pokemonList[1]);
    const [winner, setWinner] = React.useState(0);
    const [index, setIndex] = React.useState(0);
    const [openDialog, setOpenDialog] = React.useState(false);

    const generatePlayer1 = () => {
        if (index >= 0 && index < pokemonList.length) {
            setIndex(index + 1);
            setPlayer1(pokemonList[index])
        }
        else {
            setIndex(0);
        }
    };

    const generatePlayer2 = () => {
        if (index >= 0 && index < pokemonList.length) {
            setIndex(index + 1);
            setPlayer2(pokemonList[index])
        }
        else {
            setIndex(0);
        }
    };

    const previousPokemonPlayer1 = () => {
        if (index >= 0 && index < pokemonList.length) {
            setIndex(index - 1);
            setPlayer1(pokemonList[index])
        }
        else {
            setIndex(pokemonList.length -1);
        }
    }

    const previousPokemonPlayer2 = () => {

        if (index >= 0 && index < pokemonList.length) {
            setIndex(index - 1);
            setPlayer2(pokemonList[index])
        }
        else {
            setIndex(pokemonList.length -1);
        }
    }


    const generateWinner = () => {
        let fighters = [player1, player2];
        // let rand = Math.random();
        let result1;
        // let player1newstat;
        // let player2newstat;
        // if (player1.type === player2.weakness) {
        //     player2newstat = player2.strength -1;
        // } else if (player2.type === player1.weakness){
        //     player1newstat = player1.strength -1;
        // } else {
        //     player1newstat = player1.strength;
        //     player2newstat = player2.strength;
        // };

        if (player1.strength > player2.strength) {
            result1 = 0;
        } else if (player1.speed > player2.speed) {
            result1 = 0;
        } else if (player1.speed > player2.speed) {
            result1 = 1;
        } else {
            result1 = 1;
        };
        setWinner(fighters[result1]);
        setOpenDialog(true);

    };


    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <h1>Pokegame!</h1>
            <p>Choose your Pokemon!</p>

            <div className="player-display">
                <div className="player1">
                    <div className="player1-card">
                        <Pokemon poke={player1} />
                    </div>

                    <div className="player1-buttons">
                        <button
                            onClick={generatePlayer1}
                        >New
                        </button>

                        <button
                            className="backButton"
                            onClick={previousPokemonPlayer1}
                        >Back
                        </button>
                    </div>
                </div>

                <div className="player2">
                    <div className="player2-card">
                        <Pokemon poke={player2} />
                    </div>

                    <button
                        onClick={generatePlayer2}
                    >New
                        </button>

                    <button
                        className="backButton"
                        onClick={previousPokemonPlayer2}
                    >Back
                        </button>
                </div>
            </div>
            <div>
                <button
                    className="winner"
                    onClick={generateWinner}
                >Click to fight!!!</button>
            </div>
            <div className="alertDialog">
                <Dialog
                    open={openDialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"The Winner is..."}</DialogTitle>
                    <DialogContent >
                        <Pokemon poke={winner} />
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


