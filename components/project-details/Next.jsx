'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Next({ prevProject, nextProject }) {
  useEffect(() => {
    loadBackgroudImages();
  }, [prevProject, nextProject]);
  
  return (
    <>
      <style jsx global>{`
        .project-nav-box {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          min-height: 300px;
        }
        .project-nav-box:after {
          display: none !important;
        }
        .project-nav-bg {
          position: absolute !important;
          top: 20px !important;
          left: 20px !important;
          right: 20px !important;
          bottom: 20px !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 0.7 !important;
          transition: opacity 0.3s ease !important;
          z-index: 1 !important;
          display: block !important;
          visibility: visible !important;
        }
        .project-nav-box:hover .project-nav-bg {
          opacity: 0.5 !important;
        }
        .project-nav-box:hover:after {
          display: none !important;
        }
        .project-nav-box .cont {
          position: relative;
          z-index: 2;
        }
      `}</style>
      <section className="next-project sub-bg">
        <div className="container-fluid rest">
          <div className="row">
            {prevProject && (
              <div className="col-md-6 rest">
                <Link href={`/portfolio-grid/${prevProject.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div 
                    className="text-left box project-nav-box" 
                    style={{ 
                      position: 'relative',
                    }}
                  >
                    {prevProject.image && (
                      <div 
                        className="project-nav-bg"
                        style={{
                          backgroundImage: `url("${prevProject.image}")`
                        }}
                      />
                    )}
                    <div className="cont d-flex align-items-center" style={{ position: 'relative', zIndex: 2, padding: '2rem', minHeight: '300px' }}>
                      <div>
                        <span className="mr-30 fz-30 ti-arrow-left"></span>
                      </div>
                      <div>
                        <h6 className="sub-title fz-16 mb-5">Prev Project</h6>
                        <span className="fz-40 fw-600 stroke">
                          {prevProject.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            {nextProject && (
              <div className={`col-md-6 rest ${!prevProject ? 'offset-md-6' : ''}`}>
                <Link href={`/portfolio-grid/${nextProject.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div 
                    className="text-right d-flex box project-nav-box" 
                    style={{ 
                      position: 'relative',
                    }}
                  >
                    {nextProject.image && (
                      <div 
                        className="project-nav-bg"
                        style={{
                          backgroundImage: `url("${nextProject.image}")`
                        }}
                      />
                    )}
                    <div className="ml-auto">
                      <div className="cont d-flex align-items-center" style={{ position: 'relative', zIndex: 2, padding: '2rem', minHeight: '300px' }}>
                        <div>
                          <h6 className="sub-title fz-16 mb-5">Next Project</h6>
                          <span className="fz-40 fw-600 stroke">
                            {nextProject.title}
                          </span>
                        </div>
                        <div>
                          <span className="ml-30 fz-30 ti-arrow-right"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <Link href="/portfolio-grid" className="all-works-butn text-center">
            <span className="ti-view-grid fz-24 mb-10"></span>
            <span className="d-block fz-12 text-u ls1">all Projects</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Next;
