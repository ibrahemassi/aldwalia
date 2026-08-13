import React from 'react';

function ServiceProcess({ service }) {
  return (
    <section className="feat">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                How It <span className="fw-200">Works</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <a href="#0" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Our approach</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          {service.process.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="item-box radius-15 md-mb50">
                <div className="icon-img-70 mb-40 opacity-3">
                  <img src={`/assets/imgs/serv-icons/${index + 3}.png`} alt="" />
                </div>
                <span className="mb-30 p-color">{step.step} .</span>
                <h6 className="mb-20">{step.title}</h6>
                <p>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;

