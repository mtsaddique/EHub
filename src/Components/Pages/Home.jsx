import React from 'react';
import { FaSchool } from 'react-icons/fa';
import uniImg from '../../assets/University.jpg';
import stuImg from '../../assets/stu.png';
import schoolImg from '../../assets/school3.jpg';

function Home() {
    let cardData = [
        {
            img: schoolImg,
            title: "Explore Schools Near You",
            desc: "Find top-rated schools with details on facilities, teachers, and admission info."
        },
        {
            img: uniImg,
            title: "Top Universities Worldwide",
            desc: "Discover leading universities, their courses, and admission requirements."
        }
    ];

    return (
        <>
            <div className="main-home-section">
                <div className="child-home-element">
                    <div className="text-element-heroSection">
                        <h1>Your Digital Hub for Everything</h1>
                        <p>Explore jobs, education, and more — all in one place.</p>
                        <button className="hero-btn primary">🚀 Get Started</button>
                        <button className="hero-btn secondary">🔍 Explore Categories</button>
                    </div>

                    <div className="image-element-heroSection">
                        <img src={stuImg} alt="Hero Illustration" />
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="main-category-element">
                <div className="titleCategory">
                    <h1 style={{ textAlign: "center" }}>Explore Categories</h1>
                </div>
                <div className="childcategory-flex">
                    <div className="childCardcategory">
                        {cardData.map((card, index) => (
                            <CardObject
                                key={index}
                                img={card.img}
                                title={card.title}
                                description={card.desc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

export function CardObject({ img, title, description }) {
    return (
        <div className="cardCategory">
            <div className="textCategory-element">
                <div className="imgtext-cat">
                    <img src={img} alt={title} width="200px" />
                </div>
                <div className="textContent">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href="#" className="Explore_b">Explore--</a>
                </div>
            </div>
        </div>
    );
}
