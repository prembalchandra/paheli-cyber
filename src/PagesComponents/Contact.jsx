import React from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import ContactDetails from '../Components/Contact/ContactDetails'
import ContactForm from '../Components/Contact/ContactForm'

function Contact() {
  return (
    <React.Fragment>
      <HeroBanner />
      <ContactDetails />
      <ContactForm />
      <section className=''>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28018.719767507253!2d77.3455872!3d28.6195712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737292149715!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>     </section>
    </React.Fragment>
  )
}

export default Contact
