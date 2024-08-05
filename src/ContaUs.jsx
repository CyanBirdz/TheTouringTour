import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContaUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mhblrvt', 'template_dp6su6l', form.current, 'flkIJMq5whfnkSsyW')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="StudentFirstName" />
      <label>Email</label>
      <input type="email" name="Email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContaUs;
