import React, { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Aos from 'aos';

import { PrimaryButton } from './UI-kit';
import HeroSectionVideo from '../assets/video/video-1.mp4';
import "./HeroSection.css"

const HeroSection = () => {

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
            anchorPlacement: "center-center",
        })
    },[])

    return (
        <div className="hero-container">
            <video src={HeroSectionVideo} autoPlay loop muted />
            <h1 data-aos="fade-up">Takahiko's portfolio</h1>
            <p data-aos="fade-up">I'm Web Developer</p>
            <div className="module-spacer--medium" />
            <AnchorLink style={{ textDecoration: "none" }} href="#contact" offset="50">
                <PrimaryButton
                    label="Contact" dataAos="fade-up"
                />
            </AnchorLink>
        </div>
    )
}

export default HeroSection
