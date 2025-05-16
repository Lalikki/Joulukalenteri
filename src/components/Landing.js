import React from 'react';
import { Link } from 'react-router-dom';
import santaImg from '../images/santa.jpg';

const Landing = () => {
    return (
        <div className="about-wrapper landing-bg d-flex align-items-center justify-content-center">
            <div className="container text-center py-5 landing-container">
                <img src={santaImg} alt="Santa Claus" className="landing-santa-img" />
                <div className="landing-emoji">🎄✨</div>
                <h1 className="landing-title mb-3">Welcome to the Christmas Calendar!</h1>
                <h4 className="landing-subtitle mb-4">Count down the days to Christmas with daily surprises! 🎁</h4>
                <p className="landing-desc mb-4">
                    Open a new door every day and discover festive content, fun facts, and holiday cheer. Start your magical countdown now!
                </p>
                <Link to="/calendar" className="btn btn-lg btn-danger shadow">
                    Open Calendar <span role="img" aria-label="calendar">📅</span>
                </Link>
                <div className="landing-icons mt-5">
                    <span role="img" aria-label="snow">❄️</span> <span role="img" aria-label="gift">🎁</span> <span role="img" aria-label="santa">🎅</span> <span role="img" aria-label="tree">🎄</span>
                </div>
            </div>
        </div>
    );
}

export default Landing;