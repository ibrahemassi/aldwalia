'use client';
import React, { useEffect, useState } from 'react';
import { withBase } from '@/lib/basePath';
import { BRAND } from '@/lib/brand';

function Navbar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const updateNav = () => {
      const heroLogo = document.querySelector('.hero-logo');
      const hero = document.querySelector('.hero-luma');

      if (heroLogo) {
        setShowLogo(heroLogo.getBoundingClientRect().bottom < 72);
      } else if (hero) {
        setShowLogo(hero.getBoundingClientRect().bottom < 80);
      } else {
        setShowLogo(true);
      }
    };

    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    return () => {
      window.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, []);

  function handleToggleNav() {
    const menu = document.querySelector('.navbar .navbar-collapse');
    if (!menu) return;
    menu.classList.toggle('show');
  }

  return (
    <nav className="navbar navbar-expand-lg bord blur nexora-navbar">
      <div className="container o-hidden">
        <a
          className={`logo nexora-nav-logo${showLogo ? ' is-visible' : ''}`}
          href={withBase('/')}
        >
          <img
            className="logo-full"
            src={withBase(BRAND.logo)}
            alt={BRAND.name}
          />
        </a>
        <style>{`
          .navbar.nexora-navbar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            transform: none !important;
            -webkit-transform: none !important;
            z-index: 999;
            background: transparent !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          .navbar.nexora-navbar.nav-scroll {
            top: 0 !important;
            transform: none !important;
            -webkit-transform: none !important;
            background: transparent !important;
          }
          .navbar.nexora-navbar .container {
            display: grid;
            grid-template-columns: 200px 1fr auto;
            align-items: center;
            position: relative;
          }
          .nexora-nav-logo {
            display: flex;
            align-items: center;
            width: 200px !important;
            max-width: 200px !important;
            min-width: 200px;
            margin: 0 !important;
            padding: 0;
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
            transition: opacity 0.25s ease, visibility 0.25s ease;
          }
          .nexora-nav-logo.is-visible {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
          }
          .nexora-nav-logo .logo-full {
            height: 44px;
            width: auto;
            max-width: none;
          }
          .navbar.nexora-navbar .navbar-collapse {
            justify-content: center !important;
          }
          .navbar .navbar-toggler {
            display: none;
          }
          @media (max-width: 991px) {
            .navbar.nexora-navbar .container {
              grid-template-columns: 160px 1fr auto;
            }
            .navbar .navbar-toggler {
              width: 46px;
              height: 46px;
              border-radius: 50%;
              border: 1px solid rgba(255,255,255,0.35) !important;
              background: rgba(255,255,255,0.08);
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 18px 0 auto;
              grid-column: 3;
              justify-self: end;
            }
            .navbar .navbar-toggler .icon-bar {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .nexora-nav-logo,
            .navbar .logo.nexora-nav-logo {
              width: 160px !important;
              max-width: 160px !important;
              min-width: 160px;
              margin: 0 0 0 18px !important;
            }
            .nexora-nav-logo .logo-full {
              height: 36px;
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
