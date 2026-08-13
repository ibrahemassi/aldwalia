'use client';

import React, { useEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import AboutMapAndGraph from './AboutMapAndGraph';

// All images from public/assets/imgs/works only
const WORKS = '/assets/imgs/works/1';

export default function AboutPageContent() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <>
      {/* 1. Hero Section - full-width image, left content, stats cards, right floating card */}
      <section className="about-hero position-re overflow-hidden" style={{ minHeight: '90vh', background: '#0a1628' }}>
        <div
          className="bg-img absolute-full"
          data-background={`${WORKS}/1.jpg`}
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute-full" style={{ background: 'linear-gradient(90deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.4) 60%, transparent 100%)' }} />
        <div className="container position-re" style={{ zIndex: 2 }}>
          <div className="row align-items-end" style={{ paddingTop: 120, paddingBottom: 80 }}>
            <div className="col-lg-7">
              <h1 className="fz-52 fw-700 text-white ls1" style={{ lineHeight: '1.2', marginBottom: 30 }}>
                One of the leading studios creating digital experiences and products.
              </h1>
              <p className="fz-18 text-white opacity-8 line-height-1-7" style={{ marginBottom: 40 }}>
                We help businesses grow with strategy, design, and development. From concept to launch, we deliver solutions that meet international standards and drive results.
              </p>
              <div className="d-flex flex-wrap align-items-center" style={{ gap: 12, marginBottom: 50 }}>
                <a href="/page-contact" className="butn butn-md butn-light radius-30">
                  <span>Contact us</span>
                  <i className="ti-arrow-right" style={{ marginLeft: 10 }}></i>
                </a>
                <a href="/portfolio-grid" className="butn butn-bord radius-30 butn-light">
                  <span>Our works</span>
                </a>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', padding: 30 }}>
                    <h3 className="fz-36 fw-700 main-color" style={{ marginBottom: 5 }}>100%</h3>
                    <p className="fz-13 text-white opacity-8" style={{ marginBottom: 0 }}>Client satisfaction</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', padding: 30 }}>
                    <h3 className="fz-36 fw-700 main-color" style={{ marginBottom: 5 }}>50+</h3>
                    <p className="fz-13 text-white opacity-8" style={{ marginBottom: 0 }}>Projects delivered</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', padding: 30 }}>
                    <h3 className="fz-36 fw-700 main-color" style={{ marginBottom: 5 }}>10+</h3>
                    <p className="fz-13 text-white opacity-8" style={{ marginBottom: 0 }}>Years experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-end">
              <div className="radius-20 overflow-hidden position-re shadow-lg" style={{ width: '100%', maxWidth: '380px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={`${WORKS}/3.jpg`} alt="" className="w-100" style={{ height: '320px', objectFit: 'cover' }} />
                <div className="position-abs" style={{ bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.95), transparent)', padding: 20 }}>
                  <h6 className="text-white fw-600" style={{ marginBottom: 0 }}>Featured work</h6>
                  <p className="fz-13 text-white opacity-7" style={{ marginBottom: 0 }}>See our portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our development path - light cream background */}
      <section style={{ background: '#FCF8F0', paddingTop: 140, paddingBottom: 140 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4" style={{ marginBottom: 24 }}>
              <div className="radius-20 overflow-hidden">
                <img src={`${WORKS}/5.jpg`} alt="Development" className="w-100" style={{ height: '400px', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <span className="sub-title main-color d-block text-u" style={{ marginBottom: 10 }}>About us</span>
              <h2 className="fz-42 fw-700" style={{ color: '#0a1628', marginBottom: 30 }}>
                Our development path: from foundation to leadership
              </h2>
              <p className="fz-16 line-height-1-7" style={{ color: '#0a1628', opacity: 0.85, marginBottom: 20 }}>
                We started with a clear vision: to build digital products that matter. Over the years we have grown into a full-service studio, combining strategy, design, and development.
              </p>
              <p className="fz-16 line-height-1-7" style={{ color: '#0a1628', opacity: 0.85, marginBottom: 0 }}>
                Today we work with clients across industries, delivering <strong>custom web and mobile applications</strong>, <strong>brand identities</strong>, and <strong>scalable platforms</strong> that meet international standards.
              </p>
            </div>
            <div className="col-lg-4 d-none d-lg-block text-right">
              <div className="radius-20 overflow-hidden d-inline-block">
                <img src={`${WORKS}/6.jpg`} alt="Path" className="w-100" style={{ width: '200px', height: '260px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dark section - data / stats */}
      <section className="position-re" style={{ background: '#1a2436', paddingTop: 140, paddingBottom: 140 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ marginBottom: 30 }}>
              <h2 className="fz-38 fw-700 text-white" style={{ marginBottom: 40 }}>Our reach and impact</h2>
              <AboutMapAndGraph />
            </div>
            <div className="col-lg-6">
              <div className="radius-20 h-100" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: 40 }}>
                <h3 className="fz-28 fw-700 text-white" style={{ marginBottom: 20 }}>Analysis and expertise</h3>
                <p className="fz-15 text-white opacity-8" style={{ marginBottom: 30 }}>We combine data-driven decisions with creative execution to deliver solutions that perform.</p>
                <div className="d-flex flex-wrap" style={{ gap: 12, marginBottom: 30 }}>
                  <span className="radius-30 fz-13 text-white" style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px' }}>Web</span>
                  <span className="radius-30 fz-13 text-white" style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px' }}>Mobile</span>
                  <span className="radius-30 fz-13 text-white" style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px' }}>Branding</span>
                  <span className="radius-30 fz-13 text-white" style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px' }}>Consulting</span>
                </div>
                <a href="/page-contact" className="butn butn-md butn-light radius-30">
                  <span>Contact us</span>
                  <i className="ti-arrow-right" style={{ marginLeft: 10 }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full-width image section - farmer / team */}
      <section className="position-re overflow-hidden">
        <div className="absolute-full">
          <img src={`${WORKS}/1.jpg`} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
        </div>
        <div className="absolute-full" style={{ background: 'linear-gradient(90deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.3) 70%, transparent 100%)' }} />
        <div className="container position-re" style={{ zIndex: 2, paddingTop: 100, paddingBottom: 100 }}>
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fz-42 fw-700 text-white" style={{ lineHeight: '1.25', marginBottom: 30 }}>
                We ensure high quality, on-time delivery, and compliance with international standards.
              </h2>
              <div className="d-flex" style={{ gap: 16, marginTop: 40 }}>
                <div className="radius-50 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px', border: '2px solid rgba(255,255,255,0.3)' }}>
                  <i className="ti-cup text-white fz-24"></i>
                </div>
                <div className="radius-50 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px', border: '2px solid rgba(255,255,255,0.3)' }}>
                  <i className="ti-check text-white fz-24"></i>
                </div>
                <div className="radius-50 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px', border: '2px solid rgba(255,255,255,0.3)' }}>
                  <i className="ti-world text-white fz-24"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1" style={{ marginTop: 20 }}>
              <div className="row">
                <div className="col-12" style={{ marginBottom: 20 }}>
                  <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)', padding: 30 }}>
                    <h4 className="fz-28 fw-700 main-color" style={{ marginBottom: 5 }}>100%</h4>
                    <p className="fz-13 text-white opacity-8" style={{ marginBottom: 0 }}>Quality assurance</p>
                  </div>
                </div>
                <div className="col-12" style={{ marginBottom: 20 }}>
                  <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)', padding: 30 }}>
                    <h4 className="fz-28 fw-700 main-color" style={{ marginBottom: 5 }}>On time</h4>
                    <p className="fz-13 text-white opacity-8" style={{ marginBottom: 0 }}>Delivery commitment</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)', padding: 30 }}>
                    <h4 className="fz-28 fw-700 main-color" style={{ marginBottom: 5 }}>Global</h4>
                    <p className="fz-13 text-white opacity-8" style={{ marginBottom: 0 }}>Standards compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. We create high-quality - light cream */}
      <section style={{ background: '#FCF8F0', paddingTop: 140, paddingBottom: 140 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4" style={{ marginBottom: 24 }}>
              <div className="radius-20 overflow-hidden">
                <img src={`${WORKS}/3.jpg`} alt="Quality" className="w-100" style={{ height: '380px', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <span className="sub-title main-color d-block text-u" style={{ marginBottom: 10 }}>What we do</span>
              <h2 className="fz-42 fw-700" style={{ color: '#0a1628', marginBottom: 30 }}>
                We create high-quality digital products using modern technologies
              </h2>
              <p className="fz-16 line-height-1-7" style={{ color: '#0a1628', opacity: 0.85, marginBottom: 20 }}>
                From web and mobile applications to branding and strategy, we focus on user experience, performance, and scalability. Every project is built to last and grow with your business.
              </p>
              <a href="/page-services" className="butn butn-md butn-dark radius-30">
                <span>Our services</span>
                <i className="ti-arrow-right" style={{ marginLeft: 10 }}></i>
              </a>
            </div>
            <div className="col-lg-4 d-none d-lg-block text-right">
              <div className="radius-20 overflow-hidden d-inline-block">
                <img src={`${WORKS}/6.jpg`} alt="Quality" className="w-100" style={{ width: '220px', height: '280px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our values - three cards */}
      <section style={{ background: '#FCF8F0', paddingTop: 140, paddingBottom: 140 }}>
        <div className="container">
          <div className="row" style={{ marginBottom: 60 }}>
            <div className="col-lg-6">
              <h2 className="fz-42 fw-700" style={{ color: '#0a1628', marginBottom: 20 }}>Our values</h2>
              <a href="/portfolio-grid" className="fz-20 fw-600 main-color text-u d-inline-flex align-items-center">
                Visit our works <i className="ti-arrow-top-right" style={{ marginLeft: 10 }}></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" style={{ marginBottom: 24 }}>
              <div className="radius-20 h-100" style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.08)', boxShadow: '0 4px 24px rgba(10,22,40,0.06)', padding: 40 }}>
                <div style={{ marginBottom: 25 }}>
                  <i className="ti-leaf main-color fz-36"></i>
                </div>
                <h3 className="fz-22 fw-700" style={{ color: '#0a1628', marginBottom: 20 }}>Sustainable approach</h3>
                <div className="d-flex flex-wrap" style={{ gap: 8, marginBottom: 20 }}>
                  <span className="radius-30 fz-12" style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628', padding: '8px 15px' }}>Quality</span>
                  <span className="radius-30 fz-12" style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628', padding: '8px 15px' }}>Best practices</span>
                  <span className="radius-30 fz-12" style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628', padding: '8px 15px' }}>Long-term</span>
                </div>
                <p className="fz-15 line-height-1-6" style={{ color: '#0a1628', opacity: 0.8, marginBottom: 0 }}>
                  We build solutions that scale and maintain clean, documented code so your product stays robust over time.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" style={{ marginBottom: 24 }}>
              <div className="radius-20 h-100" style={{ background: '#1a2436', border: '1px solid rgba(255,255,255,0.08)', padding: 40 }}>
                <div style={{ marginBottom: 25 }}>
                  <i className="ti-link text-white fz-36"></i>
                </div>
                <h3 className="fz-22 fw-700 text-white" style={{ marginBottom: 20 }}>Direct collaboration</h3>
                <div className="d-flex flex-wrap" style={{ gap: 8, marginBottom: 20 }}>
                  <span className="radius-30 fz-12 text-white" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 15px' }}>Agile</span>
                  <span className="radius-30 fz-12 text-white" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 15px' }}>Transparent</span>
                  <span className="radius-30 fz-12 text-white" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 15px' }}>Partnership</span>
                </div>
                <p className="fz-15 line-height-1-6 text-white opacity-8" style={{ marginBottom: 0 }}>
                  We work closely with you from discovery to launch, keeping communication clear and priorities aligned.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" style={{ marginBottom: 24 }}>
              <div className="radius-20 h-100" style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.08)', boxShadow: '0 4px 24px rgba(10,22,40,0.06)', padding: 40 }}>
                <div style={{ marginBottom: 25 }}>
                  <i className="ti-medall main-color fz-36"></i>
                </div>
                <h3 className="fz-22 fw-700" style={{ color: '#0a1628', marginBottom: 20 }}>Certified quality</h3>
                <div className="d-flex flex-wrap" style={{ gap: 8, marginBottom: 20 }}>
                  <span className="radius-30 fz-12" style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628', padding: '8px 15px' }}>Tested</span>
                  <span className="radius-30 fz-12" style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628', padding: '8px 15px' }}>Secure</span>
                  <span className="radius-30 fz-12" style={{ background: 'rgba(10,22,40,0.06)', color: '#0a1628', padding: '8px 15px' }}>Reliable</span>
                </div>
                <p className="fz-15 line-height-1-6" style={{ color: '#0a1628', opacity: 0.8, marginBottom: 0 }}>
                  We follow industry standards and best practices to deliver secure, performant, and maintainable products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
