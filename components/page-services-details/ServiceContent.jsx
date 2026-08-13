import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import ExpandableProjects from './ExpandableProjects';

function ServiceContent({ service, projects = [] }) {
  if (!service) return null;

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
    <section className="service-details-content section-padding main-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            {/* Main Info Card */}
            <div 
              className="item-box radius-30 p-60 mb-40 position-re overflow-hidden" 
              style={{ background: '#1a2436', border: '1px solid rgba(255,255,255,0.05)', padding:"20px" }}
            >
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h6 className="sub-title main-color mb-20 text-u">The Service</h6>
                  <h2 className="fz-50 fw-700 mb-30 text-white">{service.name}</h2>
                  <div className="text opacity-8 fz-18 line-height-1-6 text-white mb-40">
                    <p className="mb-20">{service.description1 || service.desc}</p>
                    {service.description2 && <p>{service.description2}</p>}
                  </div>
                  
                  {/* Features List */}
                  <div className="row">
                    {service.features?.map((feat, index) => (
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
                </div>
                <div className="col-lg-4 ml-auto">
                  <div className="img radius-20 overflow-hidden shadow-lg">
                    <img src={service.img || '/assets/imgs/intro/2.jpg'} alt="" className="w-100" />
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
                    <h3 className="fz-40 fw-700 main-color mb-0 mr-20">{service.stats?.satisfaction || "100%"}</h3>
                    <p className="fz-11 text-u opacity-7 text-white mb-0 uppercase">Satisfaction</p>
                  </div>
                  <div className="d-flex align-items-center mb-30">
                    <h3 className="fz-40 fw-700 main-color mb-0 mr-20">{service.stats?.projects || "50+"}</h3>
                    <p className="fz-11 text-u opacity-7 text-white mb-0 uppercase">Projects</p>
                  </div>
                  {service.stats?.clients && (
                    <div className="d-flex align-items-center">
                      <h3 className="fz-40 fw-700 main-color mb-0 mr-20">{service.stats.clients}</h3>
                      <p className="fz-11 text-u opacity-7 text-white mb-0 uppercase">Happy Clients</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Strategy/Process Card */}
              <div className="col-lg-8">
                <div 
                  className="item-box radius-30 p-60 h-100" 
                  style={{ background: '#fff' ,padding:"20px"}}
                >
                  <h6 className="sub-title main-color mb-40 text-u">Our Strategy</h6>
                  <div className="row">
                    {(service.process?.length > 0 ? service.process : [
                      { title: "Consultation", description: "We start by understanding your unique business needs and goals." },
                      { title: "Planning", description: "Mapping out the technical architecture and user experience." },
                      { title: "Development", description: "Building your solution with high-quality, scalable code." },
                      { title: "Delivery", description: "Testing and deploying your product to the world." }
                    ]).map((step, index) => (
                      <div className="col-md-6 mb-40" key={index}>
                        <div className="d-flex align-items-start">
                          <div className="mr-25">
                            <span className="fz-16 fw-800 main-color opacity-3">0{index + 1}</span>
                          </div>
                          <div>
                            <h6 className="fz-20 fw-700 text-dark mb-10" style={{ color: '#0a1628 !important' }}>
                              {step.title || step.name}
                            </h6>
                            <p className="fz-15 opacity-8 text-dark" style={{ color: '#0a1628', lineHeight: '1.6' }}>
                              {step.description || step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects Section */}
            {projects.length > 0 && <ExpandableProjects projects={projects} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceContent;
