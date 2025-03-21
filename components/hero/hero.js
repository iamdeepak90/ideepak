import React from "react";
import NavLink from 'next/link'
import himg from '/public/images/slider/avatar.webp'
import { Link } from 'react-scroll'
import Image from "next/image";

const Hero =() => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>Expert Full Stack Web-Developer</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>DEEPAK MISHRA</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><NavLink href="/">Facebook</NavLink></li>
                    <li><NavLink href="/">Twitter</NavLink></li>
                    <li><NavLink href="/">Instagram</NavLink></li>
                </ul>
            </div>
            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;