import React, { useState, useRef } from 'react';
import './Contacts.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Contacts = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_vmh6s3s', 'template_lpztatm', form.current, 'oZBXP-0GQ20f9tUPL')
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
          form.current.reset(); // Reset the form fields
          setTimeout(() => {
            setDone(false); // Hide the thank you message after 3 seconds
            window.location.reload(); // Refresh the page after hiding the message
          }, 5000); // Adjust the time as needed (3000ms = 3 seconds)
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className='contact-form'>
      <div className="w-left">
        <div className="awesome">
          <span style={{color:darkMode?'white':''}}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' className='user' placeholder='Name' required />
          <input type='email' name='user_email' className='user' placeholder='Email' required />
          <textarea name="message" className='user' placeholder='Message' required />
          <input type='submit' value="Send" className='button' />
          <span>{done && "Thanks for contacting me!"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
