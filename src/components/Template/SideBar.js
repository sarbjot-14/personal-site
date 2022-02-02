import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sarbjot Singh</h2>
        <p>
          <a href="mailto:sarbjot_14@hotmail.com.com">sarbjot_14@hotmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Sarbjot. I am a{' '}
        <a href="https://www.sfu.ca/computing.html">
          Simon Fraser University Computer Science{' '}
        </a>
        graduate. I love to discover new music Play various sports such as
        tennis, badminton, soccer, basketball, ball hockey, and basketball.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sarbjot Singh.</p>
    </section>
  </section>
);

export default SideBar;
