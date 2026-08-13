import React from 'react';
import dataFallback from '@/data/services.json';

function Services({ Services: servicesProp }) {
  const data = (servicesProp || dataFallback).slice(0, 3);
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="item sub-bg md-mb30">
                <div className="icon-img-60 opacity-5 mb-40">
                  <img src={item.img || `/assets/imgs/serv-icons/${i + 3}.png`} alt="" />
                </div>
                <h5>{item.name}</h5>
                <div className="text mt-40">
                  <div className="mb-10">
                    <span className="tag">{item.desc?.split(' ')[0]}</span>
                    <span className="tag">Development</span>
                  </div>
                  <p>
                    {item.desc}
                  </p>
                </div>
                <a href={`/page-services/${item.slug || item.id}`} className="mt-40">
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
