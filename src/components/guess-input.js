import React from 'react';

export default function guessInput(props) {
    return (
        <form>
                <div className="feedback">
                    {props.feedback}
                </div>
                <input type='number' min={props.min} max={props.max}/>
                <button>Guess</button>
        </form>
    )
}