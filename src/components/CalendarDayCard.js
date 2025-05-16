import React, { useState } from 'react';
import presentImg from '../images/present.jpg';

const CalendarDayCard = ({ day }) => {
    const [opened, setOpened] = useState(false);
    // const [showLocked, setShowLocked] = useState(false);

    // Get today's date in Helsinki time
    // const getHelsinkiToday = () => {
    //     const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Helsinki' }));
    //     return { month: now.getMonth() + 1, day: now.getDate() };
    // };
    // const today = getHelsinkiToday();
    // const isUnlocked = today.month > 12 || (today.month === 12 && today.day >= day.id);

    const handleOpen = () => {
        // if (isUnlocked) {
        setOpened(true);
        // } else {
        //     setShowLocked(true);
        //     setTimeout(() => setShowLocked(false), 1200);
        // }
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setOpened(false);
    };

    return (
        <div className={`card d-flex calendar-day-card position-relative calendar-flip-card${opened ? ' open' : ''}`}>
            <div className="calendar-day-badge">{day.id}</div>
            {!opened && <div className="calendar-door-handle"></div>}
            <div className="calendar-flip-inner">
                <button
                    className="card-img-btn calendar-flip-front"
                    onClick={handleOpen}
                    disabled={opened}
                    aria-label={opened ? `${day.title} opened` : `Open ${day.title}`}
                    style={{ width: '100%', height: '100%', background: 'none', border: 'none', padding: 0 }}
                >
                    {/* Door front (no image, just the door background) */}
                    {/* {showLocked && <div className="calendar-locked-tooltip">🔒 Not yet!</div>} */}
                </button>
                <div className="calendar-flip-back" onClick={handleClose} style={{ cursor: 'pointer' }}>
                    <img src={presentImg} alt="Present" className="calendar-surprise-img" />
                </div>
            </div>
        </div>
    );
};

export default CalendarDayCard; 