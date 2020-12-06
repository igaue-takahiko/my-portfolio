import React from 'react'
import { PrimaryButton } from './UI-kit';

import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="/video/video-1.mp4" autoPlay loop muted />
            <h1 data-aos="fade-up">Takahiko's portfolio</h1>
            <p data-aos="fade-up">I'm Web Developer</p>
            <div className="module-spacer--medium" />
            <PrimaryButton
                label="Contact" dataAos="fade-up"
            />
        </div>
    )
}

export default HeroSection
