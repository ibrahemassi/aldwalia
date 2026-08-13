import React from 'react';

function ProjectWorks({ project }) {
  return (
    <section className="works section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Results</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Project <span className="fw-200">Results</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {project.results.map((result, index) => (
            <div key={index} className="col-lg-6">
              <div className="item mb-50">
                <div className="row">
                  <div className="col-md-2">
                    <div className="num">
                      <span className="main-color fz-60 fw-600">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="text">
                      <p className="fz-18">{result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectWorks;












