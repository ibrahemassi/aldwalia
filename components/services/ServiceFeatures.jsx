import React from 'react';

function ServiceFeatures({ service }) {
  return (
    <section className="feat">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Our <span className="fw-200">Features</span>
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
            <span>What we offer</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          {service.features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="item-box radius-15 md-mb50">
                <div className="icon-img-70 mb-40 opacity-3">
                  <img src={`/assets/imgs/serv-icons/${index + 1}.png`} alt="" />
                </div>
                <span className="mb-30 p-color">{(index + 1).toString().padStart(2, '0')} .</span>
                <h6 className="mb-20">{feature}</h6>
                <p>
                  We provide comprehensive {feature.toLowerCase()} solutions tailored to your specific business needs and requirements.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceFeatures;

