'use client';
import React from 'react';

function ProjectBody({ project }) {
  if (!project) return null;

  const descriptionText = Array.isArray(project.description)
    ? project.description
        .map((block) => block.children?.map((child) => child.text).join('') || '')
        .join('\n\n')
    : project.description || '';

  return (
    <section className="project-details-content section-padding main-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            {/* Main Info Card */}
            <div 
              className="item-box radius-30 p-60 mb-40 position-re overflow-hidden" 
              style={{ background: '#1a2436', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="row align-items-center">
                <div className="col-lg-7" style={{ padding:"40px" }}>
                  <h6 className="sub-title main-color mb-20 text-u">Project Overview</h6>
                  <h2 className="fz-50 fw-700 mb-30 text-white">{project.title}</h2>
                  <div className="text mb-40">
                    <p className="mb-20 text-white opacity-8 fz-18 line-height-1-6">
                      {descriptionText}
                    </p>
                    {project.description2 && (
                      <p className="text-white opacity-8 fz-18 line-height-1-6 mt-20">{project.description2}</p>
                    )}
                  </div>
                  
                  {/* Features List */}
                  {project.features?.length > 0 && (
                    <div className="row">
                      {project.features.map((feat, index) => (
                        <div className="col-md-6 mb-20" key={index}>
                          <div className="d-flex align-items-center">
                            <div className="icon-mr-15">
                              <i className="fas fa-check-circle main-color fz-18"></i>
                            </div>
                            <h6 className="fz-16 fw-500 text-white mb-0">{feat}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-lg-4 ml-auto">
                  <div className="img radius-20 overflow-hidden shadow-lg">
                    <img src={project.images?.main || '/assets/imgs/intro/2.jpg'} alt="" className="w-100" />
                  </div>
                  
                  {/* Project Meta Info */}
                  <div className="mt-40 p-30 radius-20" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding:"20px" }}>
                    {project.client && (
                      <div className="mb-20">
                        <span className="fz-13 opacity-7 text-u text-white mb-5 d-block">Client</span>
                        <h6 className="fz-16 text-white">{project.client}</h6>
                      </div>
                    )}
                    {project.category && (
                      <div className="mb-20">
                        <span className="fz-13 opacity-7 text-u text-white mb-5 d-block">Category</span>
                        <h6 className="fz-16 text-white">{project.category}</h6>
                      </div>
                    )}
                    {project.projectDate && (
                      <div className="mb-20">
                        <span className="fz-13 opacity-7 text-u text-white mb-5 d-block">Date</span>
                        <h6 className="fz-16 text-white">{project.projectDate}</h6>
                      </div>
                    )}
                    {project.designer && (
                      <div>
                        <span className="fz-13 opacity-7 text-u text-white mb-5 d-block">Designer</span>
                        <h6 className="fz-16 text-white">{project.designer}</h6>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-40">
              {/* Stats & Success Card */}
              <div className="col-lg-4 md-mb30">
                <div 
                  className="item-box radius-30 p-60 h-100 d-flex flex-column justify-content-center" 
                  style={{ background: '#1a2436', border: '1px solid rgba(255,255,255,0.05)', padding:"20px" }}
                >
                  <h6 className="sub-title main-color mb-30 text-u">Results</h6>
                  <div className="d-flex align-items-center mb-30">
                    <h3 className="fz-40 fw-700 main-color mb-0 mr-20">{project.stats?.value1 || "100%"}</h3>
                    <p className="fz-11 text-u opacity-7 text-white mb-0 uppercase">{project.stats?.label1 || "Satisfaction"}</p>
                  </div>
                  <div className="d-flex align-items-center mb-30">
                    <h3 className="fz-40 fw-700 main-color mb-0 mr-20">{project.stats?.value2 || "3 Months"}</h3>
                    <p className="fz-11 text-u opacity-7 text-white mb-0 uppercase">{project.stats?.label2 || "Timeline"}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="fz-40 fw-700 main-color mb-0 mr-20">{project.stats?.value3 || "2x Growth"}</h3>
                    <p className="fz-11 text-u opacity-7 text-white mb-0 uppercase">{project.stats?.label3 || "Impact"}</p>
                  </div>
                </div>
              </div>

              {/* Strategy/Process Card */}
              <div className="col-lg-8">
                <div 
                  className="item-box radius-30 p-60 h-100" 
                  style={{ background: '#fff', padding:"20px" }}
                >
                  <h6 className="sub-title main-color mb-40 text-u">Project Process</h6>
                  <div className="row">
                    {(project.process?.length > 0 ? project.process : [
                      { title: "Research", description: "In-depth analysis of project requirements and target audience." },
                      { title: "Design", description: "Creating visual concepts and user interface architectures." },
                      { title: "Development", description: "Executing the technical implementation with precision." },
                      { title: "Launch", description: "Final testing, optimization, and deployment." }
                    ]).map((step, index) => (
                      <div className="col-md-6 mb-40" key={index}>
                        <div className="d-flex align-items-start">
                          <div className="mr-25">
                            <span className="fz-16 fw-800 main-color opacity-3">{step.step || `0${index + 1}`}</span>
                          </div>
                          <div>
                            <h6 className="fz-20 fw-700 text-dark mb-10" style={{ color: '#0a1628' }}>
                              {step.title}
                            </h6>
                            <p className="fz-15 opacity-8 text-dark" style={{ color: '#0a1628', lineHeight: '1.6' }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            {project.gallery?.length > 0 && (
              <div className="gallery mt-100">
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-10 text-u">Visuals</h6>
                  <h3 className="fz-45 fw-700 text-white">Project Gallery</h3>
                </div>
                <div className="row">
                  {project.gallery.map((img, index) => (
                    <div className={index % 3 === 0 ? "col-lg-12 mb-30" : "col-lg-6 mb-30"} key={index}>
                      <div className="img radius-20 overflow-hidden">
                        <img src={img} alt="" className="w-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectBody;
