
import Owner from '../../assets/Owner.jpg';

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About <span className="ehub-color">eHub</span></h1>
        <p className="about-text">
          eHub is a modern education & career guidance platform that helps students and job seekers
          discover the right schools, colleges, universities, and job opportunities.
          Our goal is to make learning and career planning simple, accessible, and powerful for everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-grid">
        <div className="about-card">
          <h2 className="about-subtitle">🎯 Our Mission</h2>
          <p className="about-text">
            To empower students with reliable information, career tools, and verified education resources
            so they can make the best decisions for their future.
          </p>
        </div>
        <div className="about-card">
          <h2 className="about-subtitle">💡 Our Vision</h2>
          <p className="about-text">
            To become the most trusted digital hub for education & career development across the world.
          </p>
        </div>
      </section>

      {/* What we provide */}
      <section className="about-provide-section">
        <h2 className="about-subtitle center">What We Provide</h2>
        <ul className="about-list">
          <li>✅ Schools, colleges & universities search</li>
          <li>✅ Verified job listings & career support</li>
          <li>✅ Guidance for students & job seekers</li>
          <li>✅ Future career tools & community support</li>
        </ul>
      </section>

      {/* Owner / Founder Section */}
      <section className="about-owner">
        <img
          src={Owner}
          alt="Founder"
          className="owner-img"
        />
        <h2 className="about-subtitle">Founder & Owner</h2>
        <p className="owner-name ">Muhammad Tayyab</p>
        <p className="about-text">
          I created eHub to help students and job seekers find the right education & career paths.
          Technology and knowledge can change lives — and eHub is built to bring these opportunities
          closer to everyone.
        </p>
      </section>
    </div>
  );
}
