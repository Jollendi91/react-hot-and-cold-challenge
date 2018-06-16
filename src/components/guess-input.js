import React from 'react';

import './guess-input.css';

export default function GuessInput(props) {

    let guessInput;

    return (
        <form onSubmit={event => {event.preventDefault(); props.onSubmit(guessInput.value); guessInput.value = ''}}>
            <input placeholder="Enter your Guess" type='number' min={props.min} max={props.max} ref={input => guessInput = input} required/>
            <button className={props.newGame}>Guess</button>
        </form>
    )
}

GuessInput.defaultProps = {
    min: 1,
    max: 100
}