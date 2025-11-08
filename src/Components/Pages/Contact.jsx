import React from "react";


export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>
          Contact <span className="highlight">Us</span>
        </h1>
        <p>Have questions or suggestions? We’d love to hear from you.</p>
      </div>

      <div className="contact-grid">
        {/* Left Side */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Office Location</h3>
            <p>Lahore, Pakistan</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+92 300 1234567</p>
          </div>
          <div className="info-card">
            <h3>📧 Email</h3>
            <a href="mailto:mtsaddique2@gmail.com">mtsaddique2@gmail.com</a>
          </div>

          <div className="map-container">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.585708588435!2d74.3151914!3d31.5203702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dfcea65ea7%3A0xbaa7ddfb5bebf38b!2sLahore!5e0!3m2!1sen!2s!4v1703500000000"
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side — Form */}
        <form className="contact-form">
          <h2>Send us a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." required rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
