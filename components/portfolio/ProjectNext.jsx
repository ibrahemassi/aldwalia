import React from 'react';
import Link from 'next/link';

function ProjectNext({ project, relatedProjects }) {
  return (
    <section className="next section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Next Projects</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Related <span className="fw-200">Projects</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <Link href="/portfolio" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </Link>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {relatedProjects.map((relatedProject) => (
            <div key={relatedProject.id} className="col-lg-4 col-md-6">
              <div className="item mb-30">
                <div className="img">
                  <img src={relatedProject.images.main} alt={relatedProject.title} className="radius-15" />
                  <div className="info">
                    <div className="cont">
                      <h6 className="sub-title main-color mb-10">{relatedProject.category}</h6>
                      <h5>{relatedProject.title}</h5>
                      <p className="mt-10">{relatedProject.shortDescription}</p>
                    </div>
                    <Link href={relatedProject.link} className="link">
                      <span className="ti-arrow-top-right"></span>
                    </Link>
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

export default ProjectNext;












