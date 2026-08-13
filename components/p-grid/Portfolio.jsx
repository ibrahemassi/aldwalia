'use client';
import initIsotope from '@/common/initIsotope';
import React, { useEffect, useLayoutEffect } from 'react';

function Portfolio({ portfolios }) {
  useEffect(() => {
    initIsotope();
  }, [portfolios]);

  // Get unique categories from portfolios
  const categories = ['All', ...new Set(portfolios.map(p => p.category).filter(Boolean))];
  
  // Count projects per category
  const getCategoryCount = (category) => {
    if (category === 'All') return portfolios.length;
    return portfolios.filter(p => p.category === category).length;
  };

  // Convert category name to filter class
  const getFilterClass = (category) => {
    if (category === 'All') return '*';
    return category.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">DISCOVER OUR CASES</h6>
              <h3>Latest Projects</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                {categories.map((category, index) => (
                  <span
                    key={category}
                    data-filter={getFilterClass(category)}
                    className={index === 0 ? 'active' : ''}
                    data-count={getCategoryCount(category).toString().padStart(2, '0')}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gallery row md-marg">
          {portfolios.map((project, index) => {
            const filterClass = project.category 
              ? project.category.toLowerCase().replace(/\s+/g, '-')
              : 'uncategorized';
            return (
              <div key={project.id || index} className={`col-lg-4 col-md-6 items ${filterClass}`}>
                <div className="item mb-50">
                  <div className="img">
                    <img src={project.images.main} alt={project.title} />
                  </div>
                  <div className="cont d-flex align-items-end mt-30">
                    <div>
                      <span className="p-color mb-5 sub-title">{project.category || 'Uncategorized'}</span>
                      <h6>{project.title}</h6>
                    </div>
                    <div className="ml-auto">
                      <a href={`/portfolio-grid/${project.slug || project.id}`}>
                        <span className="ti-arrow-top-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
