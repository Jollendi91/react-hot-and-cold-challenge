import React from 'react';

import './feedback.css';

export default function Feedback(props) {
    return (
        <h2 className="feedback">{props.feedback}</h2>
    )
}