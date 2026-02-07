import React from 'react'
import { Link } from 'react-router-dom'
import { socialRoute } from '../constants/socialRoute'

const Hero = ({ theme }) => {
    return (
        <section className="u-bg-primary u-transition" id="hero-section">
            <div className="row px-5">
                <div className="col-lg-7">
                    <h3 className={`${theme && 'u-text-primary'}`}>Hello I'm</h3>
                    <h2 className={`${theme && 'u-text-primary'}`}>Le Lenh Nguyen</h2>
                    <h3 className={`${theme && 'u-text-primary'}`}>
                        <span className="u-accent-text">Java Developer</span>
                    </h3>
                    <div className={`${theme && 'u-text-primary'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere eros justo, sed hendrerit lacus molestie id. In varius risus eget lacus laoreet placerat.
                    </div>
                    <div className="hero-socials my-4 d-flex align-items-center gap-5">
                        {
                            socialRoute
                                .filter(social => social.showInHero)
                                .map((social, index) => (
                                    <Link key={index}
                                        to={social.link}
                                        className="hero-socials__link p-2 d-inline-flex justify-content-center fs-4">
                                        {social.icon}
                                    </Link>
                                ))
                        }
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="hero-image">
                        <img src="/571361953_1855927581946580_4327564853001614830_n.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
