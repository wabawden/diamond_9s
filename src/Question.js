import { useState } from 'react';

import { initialQuestion } from './initialState';


function Question() {
    
    const [question, setQuestion] = useState(initialQuestion);
    
    return (
        <>
        <div className="question-user">{question.user} asks..</div>
        <div className="question">{question.question}</div>
        <div className="instructions">
            <p><strong>Instructions:</strong><br />Order the tiles from {question.highLabel.toLowerCase()} to {question.lowLabel.toLowerCase()}. Add notes to the tiles to explain your reasoning.</p>
            <p>When you are finished, fill in your name(s) and press 'send'.</p>
        </div>
        </>
    );
}

export default Question