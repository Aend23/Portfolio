import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./styles/contact.css"

const Contact = () => {
  // Hooks
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    console.log(form.current);
    e.preventDefault();
    emailjs
      .sendForm('service_hxp7qqp', 'template_h012e1x', form.current, 'hTq_3bSSFAoYsPdK_')
      .then(
        (result) => {
            console.log(result)
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Title">Contact</div>
        <div className="Desc">Feel free to reach out to me for any questions or opportunities!</div>
        <form ref={form} onSubmit={handleSubmit} className="ContactForm">
          <div className="ContactTitle">Email Me 🚀</div>
          <input placeholder="Your Email" name="from_email" className="ContactInput" />
          <input placeholder="Your Name" name="from_name" className="ContactInput" />
          <input placeholder="Subject" name="subject" className="ContactInput" />
          <textarea placeholder="Message" rows="4" name="message" className="ContactInputMessage"></textarea>
          <input type="submit" value="Send" className="ContactButton" />
        </form>
        {open && (
          <div className="Snackbar" onClick={() => setOpen(false)}>
            <div>Email sent successfully!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
