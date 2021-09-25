import React from 'react';
import { useTimer } from 'react-timer-hook';


function Timer({ expiryTimestamp }) {
    const {
        hours,
        days,
        start,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{ textAlign: 'center' }}>

            <div style={{ fontSize: '30px' }}>
                <span>{days} days</span> <span>{hours} hours</span>
            </div>
            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
            <button onClick={start}>Start</button>
            {/* <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button> */}
            {/* <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 300);
                restart(time)
            }}>Restart</button> */}
        </div>
    );
}

export default Timer;
