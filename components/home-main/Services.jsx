'use client';
import React from 'react';
import dataFallback from '@/data/services.json';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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

function Services({ Services: servicesProp }) {
  const data = servicesProp || dataFallback;
  const swiperOptions = {
    modules: [Navigation],
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.services .swiper-button-next',
      prevEl: '.services .swiper-button-prev',
    },
  };

  // Icon mapping object
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

  return (
    <section className="services pt-50 pb-50">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="serv-swiper"
          data-carousel="swiper"
          data-loop="true"
          data-space="40"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-serv"
            className="swiper-container"
            data-swiper="container"
          >
            {data.map((item, i) => {
              const IconComponent = iconMap[item.icon];
              return (
                <SwiperSlide key={i}>
                  <div 
                    className="item-box radius-30 overflow-hidden position-re"
                    style={{ minHeight: '400px', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {/* Background Image */}
                    <div className="img-bg absolute-full">
                      <img
                        src={item.img}
                        alt={item.slug}
                        className="w-100 h-100 "
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    {/* Content Overlay with Smooth Fade and Blur */}
                    <a 
                      href={`/page-services/${item.slug || item.id}`}
                      className="cont absolute-full d-flex flex-column justify-content-end p-40"
                      style={{ textDecoration: 'none', boxSizing: 'border-box' }}
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
                          zIndex: 1,
                          
                        }}
                      />

                      <div className="relative" style={{ zIndex: 2, padding: '20px' }}>
                        <div className="d-flex align-items-center mb-15">
                          {IconComponent && (
                            <div className="mb-0 mr-15" style={{ color: '#fff', opacity: 0.8 }}>
                              <IconComponent sx={{ fontSize: 28 }} />
                            </div>
                          )}
                          <h5 className="text-white text-u mb-0">{item.name}</h5>
                        </div>
                        <p className="fz-14 mb-20 text-white opacity-9 fw-500">{item.desc}</p>
                        
                        <div className="d-flex align-items-center justify-content-between mt-20">
                          <div className="stats d-flex align-items-center">
                            {item.stats?.satisfaction && (
                              <div className="mr-20">
                                <h6 className="fz-14 fw-700 text-white mb-0">{item.stats.satisfaction}</h6>
                                <p className="fz-10 text-white opacity-7 text-u">Satisfaction</p>
                              </div>
                            )}
                            {item.stats?.projects && (
                              <div>
                                <h6 className="fz-14 fw-700 text-white mb-0">{item.stats.projects}</h6>
                                <p className="fz-10 text-white opacity-7 text-u">Projects</p>
                              </div>
                            )}
                          </div>

                          <div 
                            className="butn butn-md butn-light radius-30 d-inline-block"
                            style={{ padding: '10px 25px', background: '#fff', color: '#000', width: 'fit-content' }}
                          >
                            <span className="fz-14 fw-600">Read More</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
