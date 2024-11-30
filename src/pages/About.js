// src/Pages/About.js
import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-content">
        <section className="bio">
          <h2>Our Story</h2>
          <p>
          Welcome to Tasty Toast, your go-to destination for freshly made, delightful treats that bring a taste of joy to every bite. At Tasty Toast, we believe in using quality ingredients and our unique recipes to create food that’s not just delicious but also unforgettable. From warm, crispy toasts to a variety of snacks and specialty cakes, our menu is designed to cater to all your cravings.

We are committed to delivering freshness and flavor with every item, making each visit a satisfying experience. Whether you’re here to grab a quick bite or enjoy a leisurely snack, Tasty Toast is here to add a touch of comfort and warmth to your day. Join us and taste the difference that passion and quality make!
          </p>
        </section>
        
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to place an order, feel free to reach out to us!</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>

      <footer>
        <div className="socials">
          <a href="https://www.facebook.com/yourbakery" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/yourbakery" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>© 2024 Cakes and Bakes - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
