'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function ProjectHeader({ project }) {
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
  }, [project]);

  useEffect(() => {
    loadBackgroudImages();
  }, [project]);

  return (
    <div
      className="header header-project bg-img d-flex align-items-end"
      data-background={project.images.main}
      data-overlay-dark="9"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="caption">
              <h1>{project.subtitle}</h1>
              <p className="mt-20 fz-18 opacity-7">{project.description}</p>
              <div className="tags mt-30">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag mr-10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;

