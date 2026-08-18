"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { withBase } from "@/lib/basePath";

function HeaderVideo() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0, duration: 1 },
      "-=0.5",
    );
    tl.fromTo(
      ".header .header-logo",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.5",
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="header main-header valign position-re overflow-hidden" style={{ minHeight: '100vh' }}>
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
          <source src={withBase("/assets/videos/herosection.mp4")} type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div 
          className="absolute-full" 
          style={{ background: 'rgba(10, 22, 40, 0.6)' }}
        />
      </div>

      <div className="container ontop" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Logo Column */}
          <div className="col-lg-4 col-md-11 col-sm-12">
            <div className="header-logo">
              <img src={withBase("/assets/imgs/nexora-logo.svg")} alt="Nexora Digital logo" />
            </div>
          </div>

          {/* Text Content Column */}
          <div
            className="col-lg-7 col-md-11 col-sm-12"
            style={{ textAlign: "left" }}
          >
            <style>
              {`
                @media (max-width: 1000px) {
                  .col-lg-7.col-md-11.col-sm-12 {
                    text-align: center !important;
                  }
                  .col-lg-7.col-md-11.col-sm-12 .d-flex {
                    justify-content: center !important;
                  }
                  .header-logo {
                    text-align: center;
                    margin-bottom: 30px;
                  }
                  .header-logo img {
                    max-width: 150px;
                    margin: 0 auto;
                    display: block;
                  }
                  .caption h1 {
                    font-size: 2.2rem;
                    line-height: 1.2;
                  }
                  .caption .subtext p {
                    font-size: 1rem;
                  }
                }
              `}
            </style>

            <div className="caption">
              <h1 className="fz-60 fw-700 text-white mb-10">Best way to build </h1>
              <div className="d-flex align-items-end mb-20">
                <h1 className="fz-60 fw-700 text-white">
                  <span className="main-color">smart</span> scalable software.
                </h1>
              </div>
              <div className="subtext">
                <p className="fz-18 text-white opacity-8 mb-40">
                  At Nexora Digital, we design and develop powerful digital
                  solutions — from apps to enterprise systems — helping
                  businesses in Dubai, the UAE, and worldwide grow faster, smarter, and
                  stronger.
                </p>
                <div className="d-flex align-items-center mt-60">
                  <a
                    href={withBase("/page-contact")}
                    className="butn butn-md butn-light radius-30 bg-white text-dark"
                  >
                    <span className="text fw-600">Contact Us</span>
                  </a>
                  <div className="icon-img-60 ml-20">
                    <img
                      src={withBase("/assets/imgs/icon-img/arrow-down-big.png")}
                      alt=""
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderVideo;
