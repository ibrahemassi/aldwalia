'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function ServiceHeader({ service }) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, [service]);

  useEffect(() => {
    loadBackgroudImages();
  }, [service]);

  return (
    <div
      className="header page-header bg-img section-padding valign"
      data-background={service.img}
      data-overlay-dark="8"
    >
      <div className="container pt-80">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-u ls1 fz-80">
                {service.name.split(' ')[0]} <span className="fw-200">{service.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="mt-30 fz-18 opacity-7">{service.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeader;

