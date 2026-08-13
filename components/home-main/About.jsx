'use client';
import React from 'react';
import { withBase } from '@/lib/basePath';

function About() {
  return (
    <section className="about-custom section-padding main-bg">
      <div className="container">
        {/* Top Header Section */}
        <div className="row mb-80 align-items-start">
          <div className="col-lg-6">
            <div className="sec-head">
              <h2 className="fz-60 fw-700 line-height-1 mb-30">
                What is <br /> Aldwalya?
              </h2>
              <a href={withBase('/page-about')} className="butn butn-md butn-light radius-30 bg-white text-dark">
                <span className="fz-14 fw-600">Explore now</span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 ml-auto">
            <div className="text">
              <p className="fz-20 line-height-1-6 opacity-8">
                Aldwalya for Software is a leading technology partner that helps your business 
                grow through innovative digital solutions while staying ahead of the global 
                software market trends.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row">
          {/* Large Card */}
          <div className="col-lg-6 md-mb30">
            <div 
              className="item-box radius-30 p-60 d-flex flex-column justify-content-between  position-re overflow-hidden"
              style={{ minHeight: '350px', padding: '20px' }}
            >
              {/* Background Video */}
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
                {/* Dark Overlay for text readability */}
                <div 
                  className="absolute-full" 
                  style={{ background: 'rgba(0,0,0,0.4)' }}
                />
              </div>

              <div className="relative" style={{ zIndex: 2 }}>
                <h4 className="text-white fw-600 mb-20">Innovation that scales</h4>
                <p className="text-white opacity-8 fz-16 w-100">
                  We build custom software architectures that grow with your user base, 
                  ensuring seamless performance from day one to global scale.
                </p>
              </div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="col-lg-3 col-md-6 sm-mb30">
            <div 
              className="item-box radius-30 p-60 h-100 d-flex flex-column justify-content-between"
              style={{ background: '#1a2436', border: '1px solid rgba(255,255,255,0.05)', minHeight: '350px', padding: '20px' }}
            >
              <div>
                <h5 className="text-white fw-600 mb-20">Always secure, always reliable</h5>
              </div>
              <div>
                <p className="fz-14 text-white opacity-6">
                  Enterprise-grade security protocols integrated into every line of code we write.
                </p>
              </div>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="col-lg-3 col-md-6 ">
            <div 
              className="item-box radius-30 p-60 h-100 d-flex flex-column justify-content-between"
              style={{ background: '#1a2436', border: '1px solid rgba(255,255,255,0.05)', minHeight: '350px', padding: '20px' }}
            >
              <div>
                <h5 className="text-white fw-600 mb-20">100% Client-focused</h5>
              </div>
              <div>
                <p className="fz-14 text-white opacity-6">
                  Our agile methodology ensures your feedback is the core of our development cycle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners/Logos Section */}
        <div className="row mt-80 align-items-center opacity-5">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <p className="fz-12 text-u mb-0">Trusted by industry leaders and visionaries.</p>
              <div className="logos d-flex align-items-center">
                <img src={withBase('/assets/imgs/clients/01.png')} alt="" className="mr-30" style={{ height: '20px', filter: 'grayscale(1) invert(1)' }} />
                <img src={withBase('/assets/imgs/clients/02.png')} alt="" className="mr-30" style={{ height: '20px', filter: 'grayscale(1) invert(1)' }} />
                <img src={withBase('/assets/imgs/clients/03.png')} alt="" className="mr-30" style={{ height: '20px', filter: 'grayscale(1) invert(1)' }} />
                <img src={withBase('/assets/imgs/clients/04.png')} alt="" className="mr-30" style={{ height: '20px', filter: 'grayscale(1) invert(1)' }} />
                <img src={withBase('/assets/imgs/clients/05.png')} alt="" className="mr-30" style={{ height: '20px', filter: 'grayscale(1) invert(1)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-custom .item-box {
          transition: all .4s ease;
        }
        .about-custom .item-box:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}

export default About;
