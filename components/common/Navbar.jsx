'use client';
import React, { useEffect } from 'react';
import { withBase } from '@/lib/basePath';
import { BRAND } from '@/lib/brand';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo nexora-nav-logo" href={withBase('/')}>
          <img
            className="logo-full"
            src={withBase(BRAND.logo)}
            alt={BRAND.name}
          />
          <img
            className="logo-mark"
            src={withBase(BRAND.logoMark)}
            alt={BRAND.name}
          />
        </a>
        <style>{`
          .nexora-nav-logo {
            display: flex;
            align-items: center;
            max-width: none !important;
          }
          .nexora-nav-logo .logo-full {
            height: 44px;
            width: auto;
            max-width: none;
          }
          .nexora-nav-logo .logo-mark {
            display: none;
          }
          @media (max-width: 991px) {
            .navbar .logo.nexora-nav-logo {
              max-width: none !important;
              margin-left: 20px;
            }
            .nexora-nav-logo .logo-full {
              display: none;
            }
            .nexora-nav-logo .logo-mark {
              display: block;
              width: 56px;
              height: 56px;
            }
          }
        `}</style>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/page-about">
                <span className="rolling-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio-grid">
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-services">
                <span className="rolling-text">Services</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/page-team">
                <span className="rolling-text">Our Team</span>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/blog-classic">
                <span className="rolling-text">Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s go</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
