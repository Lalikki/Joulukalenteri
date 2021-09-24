import React, { useEffect, useState } from 'react';
import { calendarContent } from '../utils/CalendarContent';

const Calendar = () => {


    // function swapImage(e) {
    //     e.target.setAttribute('src', calendarContent.contentImage)
    // }

    const calculateTimeLeft = () => {

        let year = new Date().getFullYear();
        let difference = +new Date(`12/24/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
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
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="calendar-wrapper">
            <div className="container">
                <h1>Joulunkalenteri</h1>

                <h4>Päivää jouluun: {timerComponents.length ? timerComponents : <span>Time's up!</span>}</h4>

                {/* Cards */}

                <div className="row">
                    {calendarContent.map(({ idd, title, description, image, contentImage }, index) => (

                        <div key={index} className="col-sm-3 mb-3">

                            <div id="content-card" className="card d-flex">
                                <img src={image} onClick={(e) => {
                                    e.target.setAttribute('src', contentImage)
                                }} id="content-image" className="card-img-top" />

                                <div className="card-body d-flex justify-content-center">
                                    <h5 className="card-title">{title}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <p className="card-text content-paragraph">{description}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="card-text content-paragraph">Timer tähän?</p>
                                    </li>
                                </ul>

                                {/* <div className="card-body d-flex justify-content-center">
                                    <a href="#" onClick={() => {
                                        // document.getElementById('content-image').src = selectedCard.contentImage
                                    }} className="btn btn-primary">Open</a>
                                </div> */}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar;