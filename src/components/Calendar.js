import React, { useEffect, useState } from 'react';
import { calendarContent } from '../utils/CalendarContent';
import CalendarDayCard from './CalendarDayCard';

const SNOWFLAKES = 50;

const getHelsinkiNow = () => {
    // Get the current time in Europe/Helsinki timezone
    return new Date(
        new Date().toLocaleString('en-US', { timeZone: 'Europe/Helsinki' })
    );
};

const Calendar = () => {
    const calculateTimeLeft = () => {
        let now = getHelsinkiNow();
        let year = now.getFullYear();
        // Target: start of December 24th, 00:00, in Helsinki time (UTC+2 for winter)
        let target = new Date(`${year}-12-24T00:00:00+02:00`);
        let difference = +target - +now;
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const formatCountdown = (time) => {
        if (!time.days && !time.hours && !time.minutes && !time.seconds) return '0 days, 0 hours, 0 minutes and 0 seconds';
        return `${time.days} days, ${time.hours} hours, ${time.minutes} minutes and ${time.seconds} seconds`;
    };

    // Only use the first 24 days for the 6x4 grid
    const days = calendarContent.slice(0, 24);

    return (
        <div className="calendar-wrapper calendar-house-bg">
            <div className="calendar-bg-snow">
                {Array.from({ length: SNOWFLAKES }).map((_, i) => (
                    <div key={i} className="calendar-snowflake">❄️</div>
                ))}
            </div>
            <div className="container calendar-center-content">
                <h1>Konklaavin joulukalenteri 2025</h1>
                <h4>{formatCountdown(timeLeft)}</h4>
                <div className="calendar-grid-6x4">
                    {days.map((day) => (
                        <CalendarDayCard key={day.id} day={day} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;