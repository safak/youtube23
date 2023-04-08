import React from 'react';
import "./Featured.scss"
const Featured = () => {
    return (
        <div className='featured'>
            <div className='container'>
                <div className='left'>
         <h1>find the perfect freelancer in <i>tigray adigrat</i></h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt=""/>
                            <input type="text" placeholder='building mobile app'/>
                        </div>
                        <button>Search</button>
                    </div>

                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Word Press</button>
                        <button>Logo Design</button>
                        <button>Ai Services</button>
                    </div>
                </div>
                <div className='right'>
                    <img src="./img/man.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Featured;
