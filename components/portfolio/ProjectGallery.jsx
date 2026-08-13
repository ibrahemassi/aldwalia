import React from 'react';

function ProjectGallery({ project }) {
  return (
    <section className="works section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Gallery</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Project <span className="fw-200">Gallery</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {project.images.gallery.map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="item mb-30">
                <div className="img">
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} className="radius-15" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;












