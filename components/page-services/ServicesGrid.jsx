'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import {
  Web,
  Smartphone,
  Receipt,
  Cloud,
  SmartToy,
  Search,
  Campaign,
  AccountTree,
  DesignServices,
} from '@mui/icons-material';

export default function ServicesGrid({ services = [] }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const iconMap = {
    Web: Web,
    Smartphone: Smartphone,
    Receipt: Receipt,
    Cloud: Cloud,
    SmartToy: SmartToy,
    Search: Search,
    Campaign: Campaign,
    AccountTree: AccountTree,
    DesignServices: DesignServices,
  };

  // Resolve icon: support exact match, common aliases, and fallback
  const getIcon = (iconName) => {
    if (!iconName) return DesignServices;
    const key = iconName.trim();
    if (iconMap[key]) return iconMap[key];
    const aliases = {
      Mobile: Smartphone,
      mobile: Smartphone,
      Phone: Smartphone,
      phone: Smartphone,
      'Mobile App': Smartphone,
      Website: Web,
      web: Web,
      POS: Receipt,
      pos: Receipt,
      Marketing: Campaign,
      SEO: Search,
      seo: Search,
    };
    return aliases[key] || iconMap[key] || DesignServices;
  };

  if (!services?.length) return null;

  return (
    <section 
      className="section-padding bg-img valign"
      data-background="/assets/imgs/background/bg4.jpg"
      data-overlay-dark="8"
      style={{ backgroundPosition: 'center 30%' }}
    >
      <div className="container">
        <div className="sec-head text-center mb-80">
          <span className="sub-title main-color mb-5">What we offer</span>
          <h2 className="fw-600 fz-50 text-u text-white">
            Our <span className="fw-200">Services</span>
          </h2>
        </div>
        <div className="row">
          {services.map((service, i) => {
            const IconComponent = getIcon(service.icon);
            return (
              <div
                key={service.slug || service.id || i}
                className="col-lg-4 col-md-6 mb-4"
              >
                <div 
                  className="item radius-30 overflow-hidden h-100 position-re"
                  style={{ minHeight: '500px', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {/* Background Image */}
                  <div className="img-bg absolute-full">
                    <img
                      src={service.img || '/assets/imgs/works/1/1.jpg'}
                      alt={service.name}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Content Overlay with Smooth Fade and Blur */}
                  <Link 
                    href={`/page-services/${service.slug || service.id}`}
                    className="cont absolute-full d-flex flex-column justify-content-end p-50"
                    style={{ textDecoration: 'none' }}
                  >
                    {/* The Glass/Blur Layer - positioned behind the text */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '80%',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(15px)',
                        background: 'linear-gradient(to top, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.4) 60%, transparent 100%)',
                        maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                        zIndex: 1
                      }}
                    />

                    {/* Text Layer - explicitly higher z-index to stay sharp */}
                    <div className="relative" style={{ zIndex: 2, padding: '20px' }}>
                      <div className="mb-15" style={{ color: '#fff', opacity: 0.8 }}>
                        <IconComponent sx={{ fontSize: 32 }} />
                      </div>
                      <h4 className="fw-600 text-white text-u mb-10">{service.name}</h4>
                      
                      <p className="fz-14 mb-15 text-white opacity-9 fw-500">
                        {service.desc}
                      </p>

                      {service.features && (
                        <ul className="mb-30" style={{ paddingLeft: '0', listStyle: 'none' }}>
                          {service.features.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="fz-12 text-white opacity-7 d-flex align-items-center mb-10">
                              <span className="dot mr-10" style={{ width: '4px', height: '4px', background: '#fff', borderRadius: '50%', flexShrink: 0 }}></span>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      <div className="d-flex align-items-center justify-content-between mt-20">
                        <div className="stats d-flex align-items-center">
                          {service.stats?.satisfaction && (
                            <div className="mr-30">
                              <h6 className="fz-14 fw-700 text-white mb-0">{service.stats.satisfaction}</h6>
                              <p className="fz-10 text-white opacity-7 text-u">Satisfaction</p>
                            </div>
                          )}
                          {service.stats?.projects && (
                            <div>
                              <h6 className="fz-14 fw-700 text-white mb-0">{service.stats.projects}</h6>
                              <p className="fz-10 text-white opacity-7 text-u">Projects</p>
                            </div>
                          )}
                        </div>

                        <div
                          className="butn butn-md butn-light radius-30"
                          style={{ padding: '12px 30px', background: '#fff', color: '#000' }}
                        >
                          <span className="fz-14 fw-600 text-black">View Service</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
