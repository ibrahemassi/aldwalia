import React from 'react';

function ProjectChallenge({ project }) {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8">
            <div className="row lg-marg">
              <div className="col-md-6">
                <div>
                  <h6 className="sub-title main-color mb-15">The Challenge</h6>
                  <h3 className="mb-30">
                    Understanding the <span className="fw-300">problem</span> and <span className="fw-300">requirements.</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <p className="mb-15">
                    {project.challenge}
                  </p>
                  <div className="mt-30">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="item mb-30">
                          <h6 className="mb-10">Duration</h6>
                          <p className="fz-14">{project.duration}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item mb-30">
                          <h6 className="mb-10">Team Size</h6>
                          <p className="fz-14">{project.team}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item mb-30">
                          <h6 className="mb-10">Category</h6>
                          <p className="fz-14">{project.category}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item mb-30">
                          <h6 className="mb-10">Technologies</h6>
                          <p className="fz-14">{project.technologies.slice(0, 3).join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src={project.images.main} alt={project.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectChallenge;





