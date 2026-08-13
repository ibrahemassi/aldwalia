import React from 'react';

function ProjectSolution({ project }) {
  return (
    <section className="intro section-padding sub-bg">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8">
            <div className="row lg-marg">
              <div className="col-md-6">
                <div>
                  <h6 className="sub-title main-color mb-15">The Solution</h6>
                  <h3 className="mb-30">
                    Our <span className="fw-300">approach</span> and <span className="fw-300">implementation.</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <p className="mb-15">
                    {project.solution}
                  </p>
                  <div className="mt-30">
                    <h6 className="mb-20">Technologies Used:</h6>
                    <div className="tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tag mr-10 mb-10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src={project.images.gallery[1]} alt={project.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSolution;












