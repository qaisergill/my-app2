import React from 'react'
import Layout from '../../layout'
import bannerimage from "../../images/homeimg/banner/bannerimage.svg"
import afterimages from "../../images/homeimg/after-banner-imgages/24by7.svg"
import dollarimg from "../../images/homeimg/after-banner-imgages/dollar.svg"
import team from "../../images/homeimg/after-banner-imgages/experience-team.svg"
import "./style.css"
import { Form } from 'react-router-dom'

const HomePage = () => {
    return (
        <Layout>
            <section className='banner_section'>
                <div className='page-width '>
                    <div className='banner_grid'>
                        <div className='banner-left'>
                            <h4>Best in Europe</h4>
                            <h2>Welcome To</h2>
                            <h1>Home<span>Comfort</span> </h1>
                            <p>Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
                            </p>
                            <div className='btn_banner'>
                                <a href='contact-us'>Contact Us</a>
                                <a href='learn-more'>Learn More</a>
                            </div>
                        </div>
                        <div className='banner-right'>
                            <div className='banner_img'>
                                <img src={bannerimage} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='page-width section_margin'>
                    <div className='after_banner_grid'>
                        <div className='after_banner_inner'>
                            <div className='after_banner_img'>
                                <img src={afterimages} alt='' />
                            </div>
                            <h2>24/7 Service</h2>
                        </div>
                        <div className='after_banner_inner'>
                            <div className='after_banner_img'>
                                <img src={dollarimg} alt='' />
                            </div>
                            <h2>Reasonable rates</h2>
                        </div>
                        <div className='after_banner_inner'>
                            <div className='after_banner_img'>
                                <img src={team} alt='' />
                            </div>
                            <h3>Experience Team</h3>
                        </div>
                    </div>



                </div>
            </section>
        </Layout>
    )
}

export default HomePage
