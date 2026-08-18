"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0",
    );
    tl.fromTo(
      ".header .header-logo",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 },
      "-=0.5",
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="header main-header bg-img valign"
      data-background="/assets/imgs/background/bg5.jpg"
      data-overlay-dark="7"
    >
      <div className="container ontop">
        <div className="row align-items-center">
          {/* Logo Column */}
          <div className="col-lg-4 col-md-11 col-sm-12">
            <div className="header-logo">
              <img src="/assets/imgs/nexora-logo.svg" alt="Nexora Digital logo" />
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
                  /* Center text */
                  .col-lg-7.col-md-11.col-sm-12 {
                    text-align: center !important;
                  }
                  .col-lg-7.col-md-11.col-sm-12 .d-flex {
                    justify-content: center !important;
                  }

                  /* Center logo */
                  .header-logo {
                    text-align: center;
                  }
                  .header-logo img {
                    max-width: 150px;
                    margin: 0 auto;
                    display: block;
                  }

                  /* Scale down headings */
                  .caption h1 {
                    font-size: 1.6rem;
                    line-height: 1.3;
                  }

                  /* Subtext paragraph smaller */
                  .caption .subtext p {
                    font-size: 0.9rem;
                  }

                  /* Adjust button size */
                  .caption .butn {
                    padding: 8px 16px;
                    font-size: 0.85rem;
                  }
                }
              `}
            </style>

            <div className="caption">
              <h1>Best way to build </h1>
              <div className="d-flex align-items-end">
                <div>
                  <h1>
                    <span className="main-color">smart</span> scalable software.
                  </h1>
                </div>
              </div>
              <div className="subtext">
                <p>
                  At Nexora Digital, we design and develop powerful digital
                  solutions — from apps to enterprise systems — helping
                  businesses in Dubai, the UAE, and worldwide grow faster, smarter, and
                  stronger.
                </p>
                <div className="d-flex align-items-center mt-60">
                  <a
                    href="/page-contact"
                    className="butn butn-md butn-bord radius-30"
                  >
                    <span className="text">Contact Me</span>
                  </a>
                  <div className="icon-img-60 ml-20">
                    <img
                      src="/assets/imgs/icon-img/arrow-down-big.png"
                      alt=""
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

export default Header;
