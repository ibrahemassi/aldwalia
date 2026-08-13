import React from 'react';
import dataFallback from '@/data/services.json';

function Services({ Services: servicesProp }) {
  const data = (servicesProp || dataFallback).slice(0, 4);
  return (
    <section className="services-inline section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15">Our Services</h6>
              <h2>The Best Solution For Your Business</h2>
              <a
                href="/page-services"
                className="butn-crev d-flex align-items-center mt-30"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </span>
                <span className="text">Learn more</span>
              </a>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            {data.map((item, i) => (
              <div key={i} className="item d-flex align-items-center">
                <span className="num">{i < 9 ? `0${i + 1}` : i + 1}</span>
                <div>
                  <span className="sub-title main-color mb-10">{item.desc?.slice(0, 20)}</span>
                  <h2>
                    {item.name}
                  </h2>
                </div>
                <div className="ml-auto">
                  <a href={`/page-services/${item.slug || item.id}`}>
                    Learn more <span className="ti-arrow-top-right ml-10"></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Services;
