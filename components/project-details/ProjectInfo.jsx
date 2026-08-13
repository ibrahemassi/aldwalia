import React from 'react';

function ProjectInfo({ project }) {
  // Format date if available
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateString;
    }
  };

  const hasInfo = project.category || project.client || project.projectDate || project.designer;

  if (!hasInfo) {
    return null;
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            {project.category && (
              <div className="col-md-6 col-lg-3">
                <div className="item mb-30">
                  <span className="opacity-8 mb-5">Category :</span>
                  <h6>{project.category}</h6>
                </div>
              </div>
            )}
            {project.client && (
              <div className="col-md-6 col-lg-3">
                <div className="item mb-30">
                  <span className="opacity-8 mb-5">Client :</span>
                  <h6>{project.client}</h6>
                </div>
              </div>
            )}
            {project.projectDate && (
              <div className="col-md-6 col-lg-3">
                <div className="item mb-30">
                  <span className="opacity-8 mb-5">Project Date :</span>
                  <h6>{formatDate(project.projectDate)}</h6>
                </div>
              </div>
            )}
            {project.designer && (
              <div className="col-md-6 col-lg-3">
                <div className="item">
                  <span className="opacity-8 mb-5">Designer :</span>
                  <h6>{project.designer}</h6>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
