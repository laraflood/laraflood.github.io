import React from 'react';
import './Moons.css';
import moonImg from '../assets/destination/image-moon.png';
import {withRouter} from 'react-router';

class Moon extends React.Component{
    render() {
        return (
            <div className="moon-page">
                <div className='pickDestination'>01  Pick your destination</div>
                <div>
                    <img className='moons' src={moonImg} alt="moon"/>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>Moon</li>
                            <li>Mars</li>
                            <li>Europa</li>
                            <li>Titan</li>
                        </ul>
                    </nav>
                    <h1><span>Moon</span></h1>
                
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. 
                        While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div>
                        <div className='rectangle'></div>
                    </div>
                    <div className='stats'>
                        <h2 className='distance'>avg. distance</h2>
                        <div className='distanceStat'>384,400 km</div> 
                        <h2 className='travelTime'>est. travel time</h2>
                        <div className='travelTimeStat'>3 days</div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Moon;
