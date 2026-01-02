import React from 'react'

const ProjectSection = () => {
  return (
    <section className="project_section">
          <div className="container">
            <div className="project_details_area">
              <div className="project_heading">
                <h2>Amazing Live Projects we <br /><span className="heading_red_st">designed & built</span></h2>
              </div>
              <div className="project_portfolio">
                <div className="project_details_row project_1">
                  <div className="project_content_area">
                    <img className="company_logo" src="images/pickled_logo.svg" />
                    <h3>UIUX | Responsive ui</h3>
                    <p>A modern marketing website designed and developed to showcase services, engage visitors, and generate leads.</p>
                    <a className="outline_btn" href="/">View Project</a>
                  </div>
                  <div className="project_feature_img">
                    <img src="images/pickled_img.png" />
                  </div>
                </div>
                <div className="project_details_row project_2">
                  <div className="project_feature_img">
                    <img src="images/supplement-md-img.png" />
                  </div>
                  <div className="project_content_area">
                    <img className="company_logo" src="images/pickled_logo.svg" />
                    <h3>UIUX | Responsive ui</h3>
                    <p>A modern marketing website designed and developed to showcase services, engage visitors, and generate leads.</p>
                    <a className="outline_btn" href="/">View Project</a>
                  </div>

                </div>
                <div className="project_details_row project_3">
                  <div className="project_content_area">
                    <img className="company_logo" src="images/pickled_logo.svg" />
                    <h3>UIUX | Responsive ui</h3>
                    <p>A modern marketing website designed and developed to showcase services, engage visitors, and generate leads.</p>
                    <a className="outline_btn" href="/">View Project</a>
                  </div>
                  <div className="project_feature_img">
                    <img src="images/silversand-services-img.png" />
                  </div>
                </div>
                <div className="project_button">
                  <div className="button_box">
                    <div className="project_btn_col">
                      <a className="primary_btn" href="/">View All Project</a>
                    </div>
                  </div>
                  <div className="trusted_box">
                    <h4>1k<span>+</span></h4>
                    <p>Trusted Companies</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ProjectSection