import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" style={{ width: '200px', height: '200px' }} />
      </Link>
      <header>
        <h2 style={{ fontSize: '24px' }}>HAOFEI WANG</h2>
        <p>
          <a href="mailto:hfwang@email.unc.edu" style={{ fontSize: '16px' }}>hfwang@email.unc.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2 style={{ fontSize: '20px' }}>About</h2>
      <p style={{ fontSize: '16px' }}>
        Hi, I&apos;m Haofei. I am a <a href="https://www.med.unc.edu/pathology/directory/haofei-wang-phd/">Research Assistant Professor</a> at the University of North Carolina at Chapel Hill.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button" style={{ fontSize: '12px' }}>
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button" style={{ fontSize: '12px' }}>
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright" style={{ fontSize: '14px' }}>
        &copy; HAOFEI WANG <Link to="/">Haofeiwang.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
