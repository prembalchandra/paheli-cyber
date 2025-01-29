import React from 'react';
import './Contact.css'
const DetailCard = ({ iconClass, title, description }) => (
  <div className="col-lg-4 col-md-4">
    <div className="contcat_detail-card">
      <div className="contcat_detail_icon">
        <span className={`fa ${iconClass}`} aria-hidden="true"></span>
      </div>
      <div className='contact_detail_text'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const ContactDetails = () => {
  const details = [
    { iconClass: 'fa-map-marker', title: 'Our Address:', description: '521684 Majadra Street Victoria Road, New York.' },
    { iconClass: 'fa-phone', title: 'Contact Us:', description: '(+1) 123-456-7890' },
    { iconClass: 'fa-envelope', title: 'Email Us:', description: 'contact@company.com' },
  ];

  return (
    <section className="contact_detail_section">
      <div className="srcn_container">
        <div className="contcat_detail_arae">
          <div className="row">
            {details.map((detail, index) => (
              <DetailCard key={index} {...detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
