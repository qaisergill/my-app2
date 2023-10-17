import React from 'react';
import serviceimage from "../../../images/homeimg/banner/AC2.jpg";
import duct from "../../../images/homeimg/banner/duct_cleaning.jpg";
import handy from "../../../images/homeimg/banner/handyman.jpg";
import plumber from "../../../images/homeimg/banner/plumbing.jpg";
import electrical from "../../../images/homeimg/banner/electrical.jpg";

const Explore = () => {
    return (
        <div className='explore_components'>
            <div className='page-width'>
                <div className='header'>
                    <h2>
                        Explore Our <span>Services</span>
                    </h2>
                </div>
                <div className='explore_services'>
                    <div className='service_card'>
                        <img src={serviceimage} alt='' />
                        <div className='overlay'>
                            <h2>Ac Services</h2>
                            <button>
                                Book now
                            </button>
                        </div>
                    </div>
                    <div className='service_card '>
                        <img src={duct} alt='' />
                        <div className='overlay'>
                            <h2>Duct cleaning</h2>
                            <button>
                                Book now
                            </button>
                        </div>
                    </div>
                    <div className='service_card'>
                        <img src={handy} alt='' />
                        <div className='overlay'>
                            <h2>Handyman</h2>
                            <button>
                                Book now
                            </button>
                        </div>
                    </div>
                    <div className='service_card'>
                        <img src={plumber} alt='' />
                        <div className='overlay'>
                            <h2>Plumbing</h2>
                            <button>
                                Book now
                            </button>
                        </div>
                    </div>
                    <div className='service_card'>
                        <img src={electrical} alt='' />
                        <div className='overlay'>
                            <h2>Electrical</h2>
                            <button>
                                Book now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Explore;
