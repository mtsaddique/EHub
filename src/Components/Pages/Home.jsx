import React from 'react';
import { FaSchool } from 'react-icons/fa';
import uniImg from '../../assets/University.webp';
import stuImg from '../../assets/stu.webp';
import schoolImg from '../../assets/school3.webp';
import college from '../../assets/college.webp';
import jobs from '../../assets/jobs.webp';

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
        },
        {
            img: college,
            title: "Discover Colleges Near You",
            desc: "Explore colleges offering diverse programs and campus life."
        }, {
            img: jobs,
            title: "Find Your Dream Job",
            desc: "Search full-time and part-time opportunities from trusted companies."
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
            <div className="logoHome">
                <div className="logoName" aria-hidden="true">
                    <img src="src\assets\Fastlogos.webp" alt="no show" />
                    <img src="src\assets\Nust.png" alt="no show" />
                    
                    <img src="src\assets\KipsCollege.webp" alt="no show" />
                    <img src="src\assets\pgc.webp" alt="no show" />
                    <img src="src\assets\OxfordColorLogo.webp" alt="no show" />
                    <img src="src\assets\columbia.webp" alt="no show" />
                    <img src="src\assets\Stanford.webp" alt="no show" />

                </div>
            </div>

            {/* <div className="ReasonSection">
                <div className="headingreason">
                    <h3>Why Choose eHub?</h3>
                </div>
                <div className="reasonAns">

                </div>
            </div> */}

            {/* Categories */}
            <div className="main-category-element">
                <div className="titleCategory">
                    <h1 className='textCatAni' >Explore Categories</h1>
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
                    <img src={img} alt={title} width="200px" height="130px" loading='lazy' />
                </div>
                <div className="textContent">
                    <h4>{title}</h4>
                    <div className="descCat">
                        <p>{description}</p>
                    </div>
                    <div className="btnCat">
                        <a href="#" className="Explore_b">Explore--</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
