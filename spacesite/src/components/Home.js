import React from 'react';
import './Home.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <h1>So, you want to travel to <span>Space</span></h1>
                
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                
                <button>Explore</button>
            </div>
        );
    }
}

export default HomePage;