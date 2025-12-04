import React from 'react';
import { d } from '../../CommonFunction/Data.js';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaCheck, FaTimes, FaGlobe, FaPhone, FaMapMarkerAlt, FaSchool, FaGraduationCap, FaHome, FaBus } from 'react-icons/fa';

export default function ViewDetail() {
  const { type, id } = useParams();
  const dataList = d[type] || [];
  const item = dataList.find((item) => item.id.toString() === id);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };


  if (!item) {
    return (
      <div className="error-container">
        <h2>Item not found</h2>
        <p>The requested item could not be found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="viewdetail-container">
        <button onClick={handleGoBack} className="back-btn">
          <FaArrowLeft /> Back
        </button>
        {/* Hero Section */}
        <div className="detail-hero">
          <div className="hero-image">
            <img src={item.image} alt={item.name} />
            <div className="image-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="badge-type">
              {type === 'School' && <FaSchool className="type-icon" />}
              {type === 'University' && <FaGraduationCap className="type-icon" />}
              {type === 'FreelancePlatforms' && <FaGlobe className="type-icon" />}
              {type}
            </div>
            <h1 className="institute-name">{item.name}</h1>
            <div className="location-info">
              <FaMapMarkerAlt className="location-icon" />
              <span>{item.location}</span>
              {item.city && <span>, {item.city}</span>}
              {item.country && <span>, {item.country}</span>}
            </div>
            <div className="rating-badge">
              <FaStar className="star-icon" />
              <span>{item.rating}</span>
              <span className="verified-tag">
                {item.verified ? '✓ Verified' : 'Unverified'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="detail-main">
          <div className="detail-grid">
            {/* Left Column - Basic Info */}
            <div className="info-section">
              <div className="info-card">
                <h3>About</h3>
                <p className="description">{item.description}</p>
              </div>

              {/* Courses/Subjects */}
              {item.courses && item.courses.length > 0 && (
                <div className="info-card">
                  <h3>{type === 'FreelancePlatforms' ? 'Services' : 'Courses Offered'}</h3>
                  <div className="courses-list">
                    {item.courses.map((course, index) => (
                      <span key={index} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-info">
                  {item.website && (
                    <div className="contact-item">
                      <FaGlobe className="contact-icon" />
                      <a href={item.website} target="_blank" rel="noopener noreferrer">
                        {item.website.replace('https://', '')}
                      </a>
                    </div>
                  )}
                  {item.contact && (
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <span>{item.contact}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Features & Fee */}
            <div className="features-section">
              {/* Fee Information */}
              {item.fee && (
                <div className="feature-card highlight">
                  <h3>Annual Fee</h3>
                  <div className="fee-amount">
                    ${item.fee.toLocaleString()}
                  </div>
                  <small>Per academic year</small>
                </div>
              )}

              {/* Facilities */}
              <div className="feature-card">
                <h3>Facilities & Services</h3>
                <div className="facilities-list">
                  {item.scholarships !== undefined && (
                    <div className="facility-item">
                      {item.scholarships ? <FaCheck className="available" /> : <FaTimes className="not-available" />}
                      <span>Scholarships Available</span>
                    </div>
                  )}
                  {item.hostel !== undefined && (
                    <div className="facility-item">
                      {item.hostel ? <FaCheck className="available" /> : <FaTimes className="not-available" />}
                      <span>Hostel Facility</span>
                    </div>
                  )}
                  {item.transport !== undefined && (
                    <div className="facility-item">
                      {item.transport ? <FaCheck className="available" /> : <FaTimes className="not-available" />}
                      <span>Transport Service</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="action-card">
                <button className="btn-primary">
                  Contact Now
                </button>
                <button className="btn-secondary">
                  Visit Website
                </button>
                <button className="btn-outline">
                  Save to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .back-btn {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  .back-btn:hover {
    transform: translateX(-3px);
  }
        .viewdetail-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          margin-top: 78px;
        }

        /* Hero Section */
        .detail-hero {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .hero-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(106, 17, 203, 0.8) 0%, rgba(37, 117, 252, 0.8) 100%);
        }

        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px;
          color: white;
        }

        .badge-type {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.2);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
          backdrop-filter: blur(10px);
        }

        .type-icon {
          font-size: 16px;
        }

        .institute-name {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.1rem;
          margin-bottom: 15px;
          opacity: 0.9;
        }

        .location-icon {
          font-size: 18px;
        }

        .rating-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .star-icon {
          color: #FFD700;
        }

        .verified-tag {
          background: rgba(34, 197, 94, 0.9);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          margin-left: 10px;
        }

        /* Main Content */
        .detail-main {
          padding: 20px 0;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 30px;
        }

        /* Info Cards */
        .info-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        .info-card h3 {
          color: #6a11cb;
          margin: 0 0 15px 0;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .description {
          line-height: 1.6;
          color: #666;
          font-size: 1rem;
        }

        /* Courses List */
        .courses-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .course-tag {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
        }

        .contact-icon {
          color: #6a11cb;
          font-size: 18px;
        }

        .contact-item a {
          color: #2575fc;
          text-decoration: none;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        /* Features Section */
        .feature-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        .feature-card.highlight {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
        }

        .feature-card.highlight h3 {
          color: white;
        }

        .fee-amount {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 10px 0;
        }

        .facilities-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .facility-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .available {
          color: #22c55e;
        }

        .not-available {
          color: #ef4444;
        }

        /* Action Buttons */
        .action-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          border: none;
          padding: 15px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: #f8fafc;
          color: #6a11cb;
          border: 2px solid #6a11cb;
          padding: 15px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #6a11cb;
          color: white;
        }

        .btn-outline {
          background: transparent;
          color: #64748b;
          border: 2px solid #e2e8f0;
          padding: 15px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-outline:hover {
          border-color: #6a11cb;
          color: #6a11cb;
        }

        /* Error State */
        .error-container {
          text-align: center;
          padding: 60px 20px;
          color: #666;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
          
          .institute-name {
            font-size: 2rem;
          }
          
          .hero-content {
            padding: 20px;
          }
        }

        @media (max-width: 768px) {
          .viewdetail-container {
            padding: 0 15px;
          }
          
          .hero-image {
            height: 250px;
          }
          
          .institute-name {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}