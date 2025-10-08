import React from 'react';
import uniImg from '../../assets/University.webp';
import stuImg from '../../assets/stu.webp';
import schoolImg from '../../assets/school3.webp';
import college from '../../assets/college.webp';
import jobs from '../../assets/jobs.webp';

import fastLogo from '../../assets/Fastlogos.webp';
import nust from '../../assets/Nust.webp';
import kips from '../../assets/KipsCollege.webp';
import pgc from '../../assets/pgc.webp';
import oxford from '../../assets/OxfordColorLogo.webp';
import columbia from '../../assets/columbia.webp';
import stanford from '../../assets/Stanford.webp';

function Home() {
  const cardData = [
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
    },
    {
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
            <h3>Explore jobs, education, and more — all in one place.</h3>
            <button className="hero-btn primary">🚀 Get Started</button>
            <button className="hero-btn secondary">🔍 Explore Categories</button>
          </div>

          <div className="image-element-heroSection">
            <img src={stuImg} alt="Hero Illustration" />
          </div>
        </div>
      </div>

      {/* Logo Slider Section */}
      <div className="logoHome">
        <div className="logoName" aria-hidden="true">
          <img src={fastLogo} alt="FAST" />
          <img src={nust} alt="NUST" />
          <img src={kips} alt="KIPS" />
          <img src={pgc} alt="PGC" />
          <img src={oxford} alt="Oxford" />
          <img src={columbia} alt="Columbia" />
          <img src={stanford} alt="Stanford" />
        </div>
      </div>

      {/* Categories */}
      <div className="main-category-element">
        <div className="titleCategory">
          <h1 className="textCatAni">Explore Categories</h1>
          <p>A single hub for jobs, freelancing, and education opportunities.</p>
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
          <img src={img} alt={title} width="200px" height="130px" loading="lazy" />
        </div>
        <div className="textContent">
          <h4>{title}</h4>
          <div className="descCat">
            <p>{description}</p>
          </div>
          <div className="btnCat">
            <a href="#" className="Explore_b">Explore →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
