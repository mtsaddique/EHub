export default function Contact() {
  return (
    <div className="contact-container">

      {/* Page Heading */}
      <h1 className="contact-title">Contact <span className="ehub-color">Us</span></h1>
      <p className="contact-text">
        Have questions, suggestions, or need support? We are here to help!
      </p>

      {/* Contact Details */}
      <div className="contact-info">
        <div>
          <h3>📍 Office Location</h3>
          <p>Lahore, Pakistan</p>
        </div>
        <div>
          <h3>📞 Phone</h3>
          <p>+92 300 1234567</p>
        </div>
        <div>
          <h3>📧 Email</h3>
          <p><a href="mailto:mtsaddique2@gmail.com">mtsaddique2@gmail.com</a></p>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.585708588435!2d74.3151914!3d31.5203702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dfcea65ea7%3A0xbaa7ddfb5bebf38b!2sLahore!5e0!3m2!1sen!2s!4v1703500000000"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <h2>Send us a Message</h2>

        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message..." required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
