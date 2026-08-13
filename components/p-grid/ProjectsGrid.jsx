'use client';
import React, { useEffect } from 'react';
import { urlFor } from '@/sanity/lib/image';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function ProjectsGrid({ projects }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

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

  return (
    <section 
      className="section-padding bg-img valign position-re"
      data-background="/assets/imgs/background/bg4.jpg"
      data-overlay-dark="8"
      style={{ backgroundPosition: 'center 30%' }}
    >
      <div className="container">
        <div className="sec-head text-center mb-80">
          <span className="sub-title main-color mb-5">Our Works</span>
          <h2 className="fw-600 fz-50 text-u text-white">
            Our <span className="fw-200">Portfolio</span>
          </h2>
        </div>
        <div className="row">
          {projects.map((item) => {
            const imageUrl =
              typeof item.mainImage === 'string'
                ? item.mainImage
                : item.mainImage
                  ? urlFor(item.mainImage).url()
                  : item.image || item.images?.main || '';
            const serviceName = item.service?.name || (item.category?.title || 'Project');
            const slug = item.slug?.current || item.id;

            return (
              <div key={item._id || item.id} className="col-lg-4 col-md-6 mb-40 ">
                <div 
                  className="item-box radius-30 overflow-hidden position-re"
                  style={{ 
                    height: '500px', 
                    border: '1px solid rgba(255,255,255,0.1)'
                    
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
                    className="cont absolute-full d-flex flex-column justify-content-end p-50"
                    style={{ zIndex: 2, padding:"20px" }}
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
                        zIndex: -1
                      }}
                    />

                    <div className="relative">
                      <div 
                        className="bg-white-opacity-10 radius-30 d-inline-block mb-15"
                        style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)', padding:"10px" }}
                      >
                        <span className="fz-12 text-white opacity-8">
                          {item.projectDate || '2024'}
                        </span>
                      </div>
                      <h2 className="text-white fw-700 fz-30 mb-10">{item.title}</h2>
                      
                      {/* Description */}
                      {item.description && (
                        <p className="text-white opacity-7 fz-14 mb-20 line-height-1-5">
                          {(() => {
                            const plainDesc = toPlainText(item.description);
                            return plainDesc.length > 100 ? plainDesc.substring(0, 100) + '...' : plainDesc;
                          })()}
                        </p>
                      )}

                      {/* Project Metadata Grid */}
                      <div className="d-flex align-items-center flex-wrap mt-20 pt-20 bord-thin-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                        {item.client && (
                          <div className="mr-20 mb-10">
                            <p className="fz-10 text-u opacity-5 mb-0 text-white">Client</p>
                            <h6 className="fz-12 text-white fw-500">{item.client}</h6>
                          </div>
                        )}
                        {item.designer && (
                          <div className="mb-10">
                            <p className="fz-10 text-u opacity-5 mb-0 text-white">Designer</p>
                            <h6 className="fz-12 text-white fw-500">{item.designer}</h6>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid;
