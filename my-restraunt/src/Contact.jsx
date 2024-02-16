import React, { useState } from 'react';
import './index.css';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

    const emailAddress = 'truphenaokenye@gmail.com';
   const phoneNumber = '+254799784529';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form data submitted:', formData);
    // You can add your form submission logic here, such as making an API request or sending an email.
  };

  return (
    <>
    <div className="contact">
   

 <div className="image">
        <img src='https://media.istockphoto.com/id/1159992039/photo/cozy-restaurant-for-gathering-with-friends.jpg?b=1&s=612x612&w=0&k=20&c=TUKJQhGkJ0AZrt_2PLydrrCoTpByCbt50sHR1Kf-dxA='/>
    </div>
 <div className="form">
    <h3>CALL US</h3>
     <a href={`tel:${phoneNumber}`} >+254799784529 </a>
    <h3>EMAIL US</h3>
     <a href={`mailto:${emailAddress}`}>truphenaokenye@gmail.com</a>
    
      <h2>Say hi, Don’t be shy!</h2>
      <form onSubmit={handleSubmit}>
      
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        
        
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        
        
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
      
        
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>

    </div>
     <div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.059131819077!2d37.00635197415231!3d-1.117745098871533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f465a193ee57b%3A0x814a130f89ad8320!2sJuja%20City%20Mall!5e0!3m2!1sen!2ske!4v1697515898320!5m2!1sen!2ske" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
    </div>
    </>
    
  );
}

export default ContactForm;
