'use client';
import React, { useEffect } from 'react';
import { urlFor } from '@/sanity/lib/image';
import portfolioDataFallback from '../../data/portfolios/portfolio1.json';

function Portfolio1({ projects }) {
  const data = projects?.length > 0 ? projects : portfolioDataFallback;

  // Helper function to convert Sanity block content to plain text
  const toPlainText = (blocks = []) => {
    if (!blocks) return '';
    if (!Array.isArray(blocks)) return blocks; // already a string
    return blocks
      .map(block => {
        if (block._type !== 'block' || !block.children) return '';
        return block.children.map(child => child.text).join('');
      })
      .join('\n\n');
  };

  function Playing() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    if (cards.length === 0) return;
    
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }

  useEffect(() => {
    Playing();
    return () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach((instance) => instance.kill());
      }
    };
  }, [data]);

  return (
    <section 
      className="work-card section-padding pb-0 bord-top-grd position-re"
      style={{
        background: 'linear-gradient(to right, transparent 0%, rgba(255, 204, 0, 0.05) 30%, rgba(255, 204, 0, 0.1) 50%, rgba(255, 204, 0, 0.05) 70%, transparent 100%)',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="sec-head mb-40" style={{ position: 'relative', zIndex: 2 }}>
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards" style={{ position: 'relative', zIndex: 3 }}>
          {data.map((item, index) => {
            const imageUrl =
              typeof item.mainImage === 'string'
                ? item.mainImage
                : item.mainImage
                  ? urlFor(item.mainImage).url()
                  : item.image || item.images?.main || '';
            const serviceName = item.service?.name || (item.tags ? item.tags[0] : 'Project');
            const slug = item.slug?.current || item.id;

            return (
              <div 
                key={item._id || item.id} 
                className="card-item radius-30 overflow-hidden position-re"
                style={{ 
                  height: '500px', 
                  marginBottom: '40px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  zIndex: 4
                }}
              >
                {/* Full Clickable Link */}
                <a 
                  href={`/portfolio-grid/${slug}`} 
                  className="absolute-full" 
                  style={{ zIndex: 10 }}
                ></a>

                {/* Background Image */}
                <div className="img-bg absolute-full">
                  <img 
                    src={imageUrl} 
                    alt={item.title} 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Top Right Service Tag */}
                <div 
                  className="position-ab" 
                  style={{ top: '30px', right: '30px', zIndex: 5 }}
                >
                  <div 
                    className="bg-white text-dark radius-30 px-20 py-5 fw-600 fz-12 text-u d-flex align-items-center shadow"
                  >
                    <span className="mr-5">×</span> {serviceName}
                  </div>
                </div>

                {/* Content Overlay with Blur */}
                <div 
                  className="cont absolute-full d-flex flex-column justify-content-end p-60"
                  style={{ zIndex: 2 }}
                >
                  {/* Glass Blur Layer */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '70%',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      background: 'linear-gradient(to top, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.6) 60%, transparent 100%)',
                      maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                      zIndex: -1,
                      
                    }}
                  />
                  

                  <div className="relative" style={{padding:"20px"}}>
                    <div 
                      className="bg-white-opacity-10 radius-30 d-inline-block mb-15"
                      style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)' , padding:'10px' }}
                    >
                      <span className="fz-12 text-white opacity-8">
                        {item.projectDate || '2024'}
                        
                      </span>
                    </div>
                    <h2 className="text-white fw-700 fz-40 mb-10">{item.title}</h2>
                    
                    {/* Description */}
                    {item.description && (
                      <p className="text-white opacity-7 fz-14 mb-20 line-height-1-5 w-75">
                        {(() => {
                          const plainDesc = toPlainText(item.description);
                          return plainDesc.length > 120 ? plainDesc.substring(0, 120) + '...' : plainDesc;
                        })()}
                      </p>
                    )}

                    {/* Project Metadata Grid */}
                    <div className="d-flex align-items-center flex-wrap mt-20 pt-20 bord-thin-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                      {item.category?.title && (
                        <div className="mr-30 mb-10">
                          <p className="fz-10 text-u opacity-5 mb-0 text-white">Category</p>
                          <h6 className="fz-13 text-white fw-500">{item.category.title}</h6>
                        </div>
                      )}
                      {item.client && (
                        <div className="mr-30 mb-10">
                          <p className="fz-10 text-u opacity-5 mb-0 text-white">Client</p>
                          <h6 className="fz-13 text-white fw-500">{item.client}</h6>
                        </div>
                      )}
                      {item.designer && (
                        <div className="mr-30 mb-10">
                          <p className="fz-10 text-u opacity-5 mb-0 text-white">Designer</p>
                          <h6 className="fz-13 text-white fw-500">{item.designer}</h6>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio1;
