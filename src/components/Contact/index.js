// import React, { useState } from 'react';

// import { validateEmail } from '../../utils/helpers';

// import emailjs from '@emailjs/browser';

// function ContactForm() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <div className="flex">
//       <section className="contact-form">
//         <h1 data-testid="h1tag">Contact me</h1>
//         <form id="contact-form" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//           </div>
//           <div>
//             <label htmlFor="email">Email address:</label>
//             <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//           </div>
//           {errorMessage && (
//             <div>
//               <p className="error-text">{errorMessage}</p>
//             </div>
//           )}
//           <button data-testid="button" type="submit">Submit</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default ContactForm;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`service_1ad61pe`, `template_gs6jwp9`, form.current, `r537M8D2Laoxd3FCq`)
      .then((result) => {
          console.log(result.text);
          alert("Message successfully sent. Thank you.");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <h2 className='text-center'>Use this form and I will get back to you as soon as possible, thank you.</h2>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;