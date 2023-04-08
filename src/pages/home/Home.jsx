import React from 'react';
import "./Home.scss"
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import {cards, projects} from "../../data";
import CartCard from "../../components/catCard/CartCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
    return (
        <div className='home'>
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                    <CartCard key={card.id} item={card}/>
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>A whole world of freelancers talent </h1>

                        <div className="title">
                            <img src="./img/check.png" alt=""/>
                            the best for every budgets
                        </div>
                        <p>find the heights quality of products service at every price.no hourly price </p>

                        <div className="title">
                            <img src="./img/check.png" alt=""/>
                            the best for every budgets
                        </div>
                        <p>find the heights quality of products service at every price.no hourly price </p>

                        <div className="title">
                            <img src="./img/check.png" alt=""/>
                            the best for every budgets
                        </div>
                        <p>find the heights quality of products service at every price.no hourly price </p>
                        <div className="title">
                            <img src="./img/check.png" alt=""/>
                            the best for every budgets
                        </div>
                        <p>find the heights quality of products service at every price.no hourly price </p>


                    </div>
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>A Fiverr business </h1>
                        <h1>A business solutions designed for teams </h1>
                        <p>Upgrade to curated experience packed with tools and benefits, dedicated to business</p>
                        <div className="title">
                            <img src="./img/check.png" alt=""/>
                            connect to freelancers with proven business experience
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt=""/>
                            connect to freelancers with proven business experience
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt=""/>
                            connect to freelancers with proven business experience
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="item">
                        <img
                            src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
                            alt=""/>
                    </div>
                </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map(card => (
                    <ProjectCard key={card.id} item={card}/>
                ))}
            </Slide>
        </div>
    );
};

export default Home;
