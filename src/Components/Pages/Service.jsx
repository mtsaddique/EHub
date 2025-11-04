export default function Service() {
  return (
    <div className="services-container">
      {/* Header Section */}
      <section className="services-hero">
        <h1 className="services-title">Our <span className="ehub-color">Services</span></h1>
        <p className="services-text">
          At eHub, we provide student-focused career and education assistance to help you build a successful future.
          Our services are designed to guide students, job seekers, and learners toward the right opportunities.
        </p>
      </section>

      {/* Services Grid */}
      <div className="services-grid">
        
        <div className="service-card">
          <h3>🎓 Educational Guidance</h3>
          <p>
            We help students find verified schools, colleges, and universities suited to their goals and location.
          </p>
        </div>

        <div className="service-card">
          <h3>💼 Career Support</h3>
          <p>
            Job listings, resume tips, interview guidance & skill-building resources to support your professional journey.
          </p>
        </div>

        <div className="service-card">
          <h3>📊 Career Tools & Resources</h3>
          <p>
            Access career path guidance, learning suggestions, and future tools designed for student growth.
          </p>
        </div>

        <div className="service-card">
          <h3>🌍 Community & Mentorship</h3>
          <p>
            Join our learning community to connect with mentors, experts, and career professionals.
          </p>
        </div>

      </div>
    </div>
  );
}
