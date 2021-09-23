import React, { useState } from 'react';
import { calendarContent } from '../utils/CalendarContent';

const Calendar = () => {

    // const [selectedCard, setSelectedCard] = useState(calendarContent[0]);

    // function swapImage(e) {
    //     e.target.setAttribute('src', calendarContent.contentImage)
    // }

    return (
        <div className="calendar-wrapper">
            <div className="container">
                <h1>Joulunkalenteri</h1>

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