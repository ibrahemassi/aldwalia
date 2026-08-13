'use client';
import React, { useState } from 'react';
import { urlFor } from '@/sanity/lib/image';

function ExpandableProjects({ projects = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects.length) return null;

  // Helper function to convert Sanity block content to plain text
  const toPlainText = (blocks = []) => {
    if (!blocks) return '';
    if (!Array.isArray(blocks)) return blocks;
    return blocks
      .map(block => {
        if (block._type !== 'block' || !block.children) return '';
        return block.children.map(child => child.text).join('');
      })
      .join('\n\n');
  };

  return (
    <div className="expandable-projects-container mt-100 mb-100">
      <div className="sec-head mb-50">
        <h6 className="sub-title main-color mb-10 text-u">Case Studies</h6>
        <h3 className="fz-45 fw-700 text-white text-center">Related Projects</h3>
      </div>

      <div className="flex-container d-flex">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          const projectImg =
            typeof project.mainImage === 'string'
              ? project.mainImage
              : project.mainImage
                ? urlFor(project.mainImage).url()
                : project.images?.main || '';
          const plainDesc = toPlainText(project.description);

          return (
            <div
              key={project._id}
              className={`project-item radius-30 overflow-hidden ${isActive ? 'active shadow-lg' : ''}`}
              onClick={() => setActiveIndex(index)}
              style={{
                flex: isActive ? '5' : '1.2',
                height: '600px',
                margin: '0 8px',
                cursor: 'pointer',
                transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                position: 'relative',
                background: '#1a2436',
                border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {isActive ? (
                // EXPANDED VIEW
                <div className="expanded-content d-flex align-items-center h-100 p-50 animate-fade">
                  <div className="row w-100 align-items-center">
                    <div className="col-lg-5">
                      <div className="img radius-20 overflow-hidden" style={{ height: '500px' }}>
                        <img src={projectImg} alt={project.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                    <div className="col-lg-7 pl-50">
                      <div className="cont h-100 d-flex flex-column justify-content-center">
                        <div className="d-flex justify-content-end mb-40">
                          <div className="icon-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <span className="fz-14 fw-700 text-white">0{index + 1}</span>
                          </div>
                        </div>
                        <h2 className="fz-45 fw-700 text-white mb-20">{project.title}</h2>
                        <p className="fz-16 text-white opacity-7 line-height-1-6 mb-40">
                          {plainDesc.length > 200 ? plainDesc.substring(0, 200) + '...' : plainDesc}
                        </p>
                        <div className="d-flex align-items-center justify-content-between pt-30 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                          <a href={`/portfolio-grid/${project.slug?.current || project._id}`} className="text-white fw-600 fz-14 text-u">
                            More about Case Study
                          </a>
                          <a href={`/portfolio-grid/${project.slug?.current || project._id}`} className="icon-btn bg-white text-dark d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', borderRadius: '50%' }}>
                            <i className="ti-arrow-right fz-18"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // COLLAPSED VIEW
                <div className="collapsed-content h-100 position-re overflow-hidden">
                  <div className="img-bg absolute-full opacity-4">
                    <img src={projectImg} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="absolute-full" style={{ background: 'linear-gradient(to top, rgba(10, 22, 40, 0.8) 0%, transparent 100%)' }}></div>
                  <div className="text-horizontal position-ab" style={{ bottom: '30px', left: '20px', right: '20px', textAlign: 'center' }}>
                    <h4 className="text-white fz-14 fw-600 text-u mb-0">
                      {project.title}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .flex-container {
          min-height: 650px;
          width: 100%;
        }
        .project-item.active {
          cursor: default;
        }
        .animate-fade {
          animation: fadeIn 1s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .project-item:not(.active):hover .img-bg {
          opacity: 0.8;
          transform: scale(1.1);
          transition: all 0.8s ease;
        }
        .project-item:not(.active) .text-horizontal {
          opacity: 0.6;
          transition: all 0.5s ease;
        }
        .project-item:not(.active):hover .text-horizontal {
          opacity: 1;
        }

        @media screen and (max-width: 991px) {
          .flex-container {
            flex-direction: column;
            height: auto;
            min-height: auto;
          }
          .project-item {
            flex: none !important;
            width: 100% !important;
            height: auto !important;
            margin: 10px 0 !important;
          }
          .collapsed-content {
            display: none;
          }
          .project-item {
            display: block !important;
          }
          .expanded-content {
            padding: 30px !important;
          }
          .expanded-content .row {
            flex-direction: column;
          }
          .expanded-content .col-lg-5, .expanded-content .col-lg-7 {
            width: 100%;
            padding: 0 !important;
          }
          .expanded-content .img {
            height: 300px !important;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default ExpandableProjects;
