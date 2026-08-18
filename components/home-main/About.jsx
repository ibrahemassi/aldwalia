'use client';
import React from 'react';
import { withBase } from '@/lib/basePath';

function About() {
  return (
    <section className="about-custom section-padding main-bg">
      <div className="container">
        <div className="about-header-row mb-80">
          <div className="about-header-left">
            <div className="sec-head">
              <h2 className="about-title fw-700 line-height-1 mb-30">
                What is <br /> Nexora?
              </h2>
              <a
                href={withBase('/page-about')}
                className="butn butn-md butn-light radius-30 bg-white text-dark"
              >
                <span className="about-btn-text fw-600">Explore now</span>
              </a>
            </div>
          </div>
          <div className="about-header-right">
            <p className="about-lead line-height-1-6 opacity-8">
              Nexora Digital is a Dubai-based technology partner that helps your
              business grow through innovative digital solutions while staying
              ahead of the global software market trends.
            </p>
          </div>
        </div>

        <div className="about-cards-grid">
          <div className="about-card about-card-large">
            <div className="item-box radius-30 d-flex flex-column justify-content-between position-re overflow-hidden">
              <div className="video-bg absolute-full" style={{ zIndex: 0 }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                >
                  <source
                    src={withBase('/assets/videos/about-card.mp4')}
                    type="video/mp4"
                  />
                </video>
                <div
                  className="absolute-full"
                  style={{ background: 'rgba(0,0,0,0.4)' }}
                />
              </div>

              <div className="relative" style={{ zIndex: 2 }}>
                <h4 className="about-card-title text-white fw-600 mb-20">
                  Innovation that scales
                </h4>
                <p className="about-card-text text-white opacity-8">
                  We build custom software architectures that grow with your user
                  base, ensuring seamless performance from day one to global scale.
                </p>
              </div>
            </div>
          </div>

          <div className="about-card about-card-small">
            <div
              className="item-box radius-30 h-100 d-flex flex-column justify-content-between"
              style={{
                background: '#1a2436',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <h5 className="about-card-title-sm text-white fw-600 mb-20">
                Always secure, always reliable
              </h5>
              <p className="about-card-text-sm text-white opacity-6">
                Enterprise-grade security protocols integrated into every line of
                code we write.
              </p>
            </div>
          </div>

          <div className="about-card about-card-small">
            <div
              className="item-box radius-30 h-100 d-flex flex-column justify-content-between"
              style={{
                background: '#1a2436',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <h5 className="about-card-title-sm text-white fw-600 mb-20">
                100% Client-focused
              </h5>
              <p className="about-card-text-sm text-white opacity-6">
                Our agile methodology ensures your feedback is the core of our
                development cycle.
              </p>
            </div>
          </div>
        </div>

        <div className="about-partners mt-80">
          <p className="about-partners-label fz-12 text-u mb-0">
            Trusted by industry leaders and visionaries.
          </p>
          <div className="about-partners-logos">
            <img
              src={withBase('/assets/imgs/clients/01.png')}
              alt=""
              style={{ filter: 'grayscale(1) invert(1)' }}
            />
            <img
              src={withBase('/assets/imgs/clients/02.png')}
              alt=""
              style={{ filter: 'grayscale(1) invert(1)' }}
            />
            <img
              src={withBase('/assets/imgs/clients/03.png')}
              alt=""
              style={{ filter: 'grayscale(1) invert(1)' }}
            />
            <img
              src={withBase('/assets/imgs/clients/04.png')}
              alt=""
              style={{ filter: 'grayscale(1) invert(1)' }}
            />
            <img
              src={withBase('/assets/imgs/clients/05.png')}
              alt=""
              style={{ filter: 'grayscale(1) invert(1)' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-custom .item-box {
          transition: all 0.4s ease;
        }
        .about-custom .item-box:hover {
          transform: translateY(-5px);
        }

        .about-header-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(16px, 4vw, 48px);
          align-items: start;
        }
        .about-header-right {
          justify-self: end;
          max-width: 100%;
        }
        .about-title {
          font-size: clamp(28px, 5vw, 60px);
        }
        .about-lead {
          font-size: clamp(13px, 2.2vw, 20px);
        }
        .about-btn-text {
          font-size: clamp(12px, 1.6vw, 14px);
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: clamp(8px, 1.8vw, 24px);
          align-items: stretch;
        }
        .about-card .item-box {
          min-height: clamp(160px, 28vw, 350px);
          padding: clamp(14px, 2.8vw, 60px);
          height: 100%;
        }
        .about-card-title {
          font-size: clamp(14px, 2.4vw, 24px);
          margin-bottom: clamp(8px, 1.5vw, 20px);
        }
        .about-card-text {
          font-size: clamp(11px, 1.6vw, 16px);
          line-height: 1.5;
          margin: 0;
        }
        .about-card-title-sm {
          font-size: clamp(12px, 2vw, 20px);
          margin-bottom: clamp(8px, 1.2vw, 20px);
        }
        .about-card-text-sm {
          font-size: clamp(10px, 1.4vw, 14px);
          line-height: 1.45;
          margin: 0;
        }

        .about-partners {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 3vw, 32px);
          flex-wrap: wrap;
          opacity: 0.5;
        }
        .about-partners-logos {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: clamp(10px, 2.5vw, 30px);
        }
        .about-partners-logos img {
          height: clamp(12px, 2vw, 20px);
          width: auto;
        }

        @media (min-width: 992px) {
          .about-header-row {
            grid-template-columns: 1.2fr 1fr;
          }
          .about-header-right {
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
