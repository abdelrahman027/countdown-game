import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // const [timerExpired, setTimerisExpired] = useState(false);
    // const [timeStarted, setTimeStarted] = useState(false);
    if (timeRemaining <= 0)
    {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000)

    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10)
        }, 10)
    };

    const handleStop = () => {
        clearInterval(timer.current)
        dialog.current.showModal();
    }

    return (

        <>
            <ResultModal ref={dialog} onReset={handleReset} targetTime={targetTime} timeRemaining={timeRemaining} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 && 's'}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? 'Time is running...' : 'timer inactive'}
                </p>

            </section >
        </>

    )
}

export default TimerChallenge