import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'; 

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleOnClick = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
    <h2 className='head-text'>Take a Coffee & <span>Chat with me</span></h2>
    
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:talhaiqbal7272@gmail.com" className='p-text'>talhaiqbal7272@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href="tel: +92 308-6150819" className='p-text'>+92 308-6150819</a>
      </div>
    </div>
    
    {!isFormSubmitted ? (
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input type="text" className='p-text' placeholder='Your Name' name='name' value={username} onChange={handleOnClick}/>
      </div>
      <div className="app__flex">
        <input type="email" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleOnClick}/>
      </div>
      <div>
        <textarea className='p-text' name="message" value={message} placeholder="Type Your Message" onChange={handleOnClick} cols="30" rows="10"/>
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}>{!loading ? 'Send Message':'Sending...'}</button>
    </div> ) : ( 
      <div>
        <h3 className='head-text'>
          Thanks for contacting me. I will get back to you soon.
        </h3>
      </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact');
