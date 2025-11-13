import React from "react";

export default function Service() {
  return (
    <div className="ehub-page">
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
export const smoothScroll = (e, targetId) => {
  e.preventDefault();
  const section = document.getElementById(targetId);
  if (section) {
    const yOffset = -80;
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};


// 🔹 Hero Section
function Hero() {
  // Smooth scroll function
  

  return (
    <header className="hero">
      <div className="hero-inner">
        <h1>eHub — Your Education & Career Partner</h1>
        <p>
          Explore schools, colleges, and universities. Find jobs, calculate
          merit, and manage documentation — all in one place.
        </p>
        <div className="hero-btns">
          <a
            href="#services"
            onClick={(e) => smoothScroll(e, "services")}
            className="btn primary"
          >
            Explore Services
          </a>

          <a
            href="#cta"
            onClick={(e) => smoothScroll(e, "cta")}
            className="btn"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

// 🔹 Services Section
function Services() {
  const data = [
    {
      icon: "🏫",
      title: "Institution Finder",
      desc: "Find schools, colleges, and universities based on your preferences.",
    },
    {
      icon: "💼",
      title: "Job & Internship Search",
      desc: "Explore jobs and internships for students and fresh graduates.",
    },
    {
      icon: "📁",
      title: "Documentation",
      desc: "Upload and manage important admission or job documents.",
    },
    {
      icon: "🧮",
      title: "Merit Calculator",
      desc: "Calculate academic merit and generate your percentage instantly.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <p className="subtitle">
        Everything you need for education and career growth.
      </p>

      <div className="grid">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 🔹 Features Section
function Features() {
  const points = [
    "Smart filters for institutions",
    "Verified and updated listings",
    "Real-time job updates",
    "Simple merit calculator",
    "Secure document storage",
  ];

  return (
    <section className="features">
      <h2>Why Choose eHub?</h2>
      <ul>
        {points.map((p, i) => (
          <li key={i}>✅ {p}</li>
        ))}
      </ul>
    </section>
  );
}

// 🔹 Testimonials
function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Users Say</h2>
      <div className="test-grid">
        <blockquote>
          “eHub made it easy for me to compare universities and apply in one
          place.” <br /> <span>- Sara, Student</span>
        </blockquote>
        <blockquote>
          “A single platform for students and institutions. Loved the merit
          tool!” <br /> <span>- Ahmed, College Admin</span>
        </blockquote>
      </div>
    </section>
  );
}

// 🔹 Call To Action
function CTA() {
  return (
    <section id="cta" className="cta">
      <h2>Join eHub Today</h2>
      <p className="p_space">Start your educational journey or post your institution for free.</p>
      <a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("services");
          if (section) {
            const yOffset = -80;
            const y =
              section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
        className="btn primary btn_space"
      >
        Explore Services
      </a>
    </section>
  );
}
