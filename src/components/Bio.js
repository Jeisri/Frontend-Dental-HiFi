import React from 'react';
import './Bio.css';

function Bio() {
    return (
        <div className="parent-container">
        <div className="bio-container">
            <div className="left-part">
                <div className="dr-image"></div>
                <div className="dr-name">Dr.Sachin Bansal</div>
                <div className="c">Dentist Implantologist</div>
                <div className="dr-experience">11 Years of Experience</div>
                <div className="education">Education: BDS, MBBS</div>
                <div className='dr-services'>Services: Dental Bonding, Dental Crowns, Bridge Works, Cosnetic Fillings, Invisalign</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quidem! Lorem
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quidem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quidem!</div>
            </div>
            <div className="right-part">
                <div className='images'>
                    <div className='image-1'>
                        <img src="https://cdn.pixabay.com/photo/2021/08/10/13/43/orthodontics-6536026_1280.jpg" alt="Dr. Sachin Bansal"></img>
                    </div>  
                    <div className='image-2'>
                        <img src="https://cdn.pixabay.com/photo/2017/07/23/10/42/dentist-2530983_960_720.jpg" alt="Dr. Sachin Bansal"></img>
                    </div>
                </div>
            </div>
        </div></div>
    );
}

export default Bio;
