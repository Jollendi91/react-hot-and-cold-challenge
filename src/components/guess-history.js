import React from 'react';

import './guess-history.css';

export default function GuessHistory(props) {

    const guesses = props.guessLog.map((guess, index) => (
        <li key={index}>
            <p>{guess}</p>
        </li>
    ));

    return (
        <div>
            <h2>Guess #<span className="guess-number">{props.guessLog.length}</span></h2>
            <ul className="guesses">
                {guesses}
            </ul>
        </div>
    )
}


