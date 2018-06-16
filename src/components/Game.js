import React from 'react';

import './Game.css';
import GuessInput from './guess-input';
import Feedback from './feedback';
import GuessHistory from './guess-history';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: Math.floor(Math.random() * 99) + 1,
            currentGuess: '',
            guessLog: [],
            feedback: 'Make your Guess!',
            feedbackOption: {
                correct: 'You Won! Click new game to play again',
                freezing: "Freezing",
                cold: "Cold",
                warm: "Warm",
                hot: "Hot",
                burning: "Burning up!"

            },
            newGame: ''
        }
    }



    onSubmit(currentGuess) {
        let feedback;
        let diff = Math.abs(this.state.currentNumber - currentGuess);

        if(diff === 0){
            feedback = this.state.feedbackOption.correct;
            this.setState({newGame: 'end-game'});
        }
        else if (diff <= 3) {
            feedback = this.state.feedbackOption.burning;
        }
        else if(diff <= 5) {
            feedback = this.state.feedbackOption.hot;
        }
        else if(diff <= 10) {
            feedback = this.state.feedbackOption.warm;
        }
        else if (diff <= 15) {
            feedback = this.state.feedbackOption.cold;
        }
        else {
            feedback = this.state.feedbackOption.freezing;
        }


        this.setState({
            currentGuess,
            guessLog: [...this.state.guessLog, currentGuess],
            feedback
        });
    }

    resetGame(event) {
        event.preventDefault();
        this.setState({
            currentNumber: Math.floor(Math.random() * 99) + 1,
            currentGuess: '',
            guessLog: [],
            feedback: 'Make your Guess!',
            newGame: ''
        });
    }

    render() {

        return (
            <section className='game-wrapper'>
                <button type='button' className='new-game' onClick={(e) => this.resetGame(e)}>Start New Game</button>
                <header>
                    <h1>HOT or COLD</h1>
                </header>
                <section className='game-container'>
                    <Feedback feedback={this.state.feedback} />
                    <GuessInput onSubmit={guess => this.onSubmit(guess)} newGame={this.state.newGame} />
                    <GuessHistory guessLog={this.state.guessLog} />
                </section>
            </section>
        )
    }
}