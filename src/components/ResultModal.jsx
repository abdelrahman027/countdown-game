import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ onReset, targetTime, timeRemaining }, ref) {

    const userLost = timeRemaining <= 0;

    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)
    return createPortal(
        <dialog onClose={onReset} ref={ref} className='result-modal'>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>
                The Target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You Stopped the timer with <strong>{(timeRemaining / 1000).toFixed(2)} seconds left.</strong>
            </p>
            <form method='dialog'>
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>, document.getElementById('modal')
    )
})

export default ResultModal;



