import React from 'react';

const ContactPage = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form>
        <label>
          Full Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message:
          <textarea placeholder="Your message"></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactPage;
