"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { withBase } from "@/lib/basePath";

const STATS = [
  { value: "100%", label: "Client satisfaction" },
  { value: "50+", label: "Projects delivered" },
  { value: "10+", label: "Years experience" },
  { value: "24/7", label: "Support coverage" },
  { value: "UAE", label: "Based in Dubai" },
  { value: "30+", label: "Enterprise clients" },
];

function HeaderVideo() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(
      ".hero-copy",
      { opacity: 0, translateY: 32 },
      { opacity: 1, translateY: 0, duration: 0.9 },
      "-=0.4",
    );
    tl.fromTo(
      ".hero-stats",
      { opacity: 0, translateY: 24 },
      { opacity: 1, translateY: 0, duration: 0.8 },
      "-=0.4",
    );
    return () => tl.kill();
  }, []);

  return (
    <div className="header main-header hero-luma valign position-re overflow-hidden">
      <div className="video-bg absolute-full" style={{ zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src={withBase("/assets/videos/herosection.mp4")} type="video/mp4" />
        </video>
        <div
          className="absolute-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,14,28,0.35) 0%, rgba(8,14,28,0.55) 45%, rgba(8,14,28,0.82) 100%)",
          }}
        />
      </div>

      <style>{`
        .hero-luma {
          min-height: 100vh;
          padding: 110px 0 28px;
        }
        .hero-luma .hero-inner {
          position: relative;
          z-index: 2;
          min-height: calc(100vh - 138px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .hero-luma .hero-logo {
          width: min(240px, 72vw);
          height: auto;
          margin-bottom: 28px;
          display: block;
        }
        .hero-luma .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px 6px 6px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.28);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          margin-bottom: 22px;
        }
        .hero-luma .hero-badge-dot {
          min-width: 42px;
          height: 28px;
          border-radius: 999px;
          background: #fff;
          color: #0a1628;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-luma .hero-badge span {
          color: #fff;
          font-size: 13px;
          opacity: 0.9;
        }
        .hero-luma .hero-title {
          color: #fff;
          font-weight: 700;
          font-size: clamp(36px, 7vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          max-width: 720px;
          margin-bottom: 18px;
        }
        .hero-luma .hero-title em {
          font-style: normal;
          color: #ffd54a;
        }
        .hero-luma .hero-text {
          color: rgba(255,255,255,0.82);
          font-size: 16px;
          line-height: 1.7;
          max-width: 540px;
          margin-bottom: 28px;
        }
        .hero-luma .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .hero-luma .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 999px;
          padding: 14px 26px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .hero-luma .hero-btn:hover {
          transform: translateY(-2px);
        }
        .hero-luma .hero-btn-solid {
          background: #fff;
          color: #0a1628;
        }
        .hero-luma .hero-btn-glass {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .hero-luma .hero-stats {
          margin-top: 40px;
          border-radius: 28px;
          padding: 22px 16px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }
        .hero-luma .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px 10px;
        }
        .hero-luma .hero-stat {
          text-align: center;
          padding: 4px 8px;
        }
        .hero-luma .hero-stat h4 {
          color: #fff;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: -0.03em;
        }
        .hero-luma .hero-stat p {
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          line-height: 1.35;
          margin: 0;
        }
        @media (min-width: 768px) {
          .hero-luma .hero-stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .hero-luma .hero-stats {
            padding: 28px 20px;
          }
        }
        @media (min-width: 992px) {
          .hero-luma {
            padding: 130px 0 40px;
          }
          .hero-luma .hero-logo {
            width: 280px;
          }
          .hero-luma .hero-text {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="container hero-inner">
        <div className="hero-copy">
          <img
            className="hero-logo"
            src={withBase("/assets/imgs/nexora-logo.svg")}
            alt="Nexora Digital"
          />
          <div className="hero-badge">
            <div className="hero-badge-dot">50+</div>
            <span>Over 50 projects shipped from Dubai</span>
          </div>
          <h1 className="hero-title">
            Smart software
            <br />
            built to <em>scale</em>.
          </h1>
          <p className="hero-text">
            Nexora Digital designs and develops apps, platforms, and enterprise
            systems — helping businesses in Dubai, the UAE, and worldwide grow
            faster, smarter, and stronger.
          </p>
          <div className="hero-actions">
            <a href={withBase("/page-contact")} className="hero-btn hero-btn-solid">
              Contact Us
            </a>
            <a href={withBase("/portfolio-grid")} className="hero-btn hero-btn-glass">
              View Work
              <i className="fas fa-play" style={{ fontSize: 11 }}></i>
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stats-grid">
            {STATS.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderVideo;
