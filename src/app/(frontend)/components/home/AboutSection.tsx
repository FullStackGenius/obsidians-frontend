import React from 'react'

const AboutSection = () => {
  return (
    <section className="about_section">
          <div className="container">
            <div className="row">
              <div className="col-6-3">
                <div className="about_content_area">
                  <h2>Smart tech, built for <br /><span className="heading_red_st">bold brands</span></h2>
                  <div className="flex_item">
                    <img src="images/about-img1.jpg" />
                    <div className="about_content">
                      <p>At The Obsidians, we help businesses navigate digital complexity, grow faster, and turn ideas into measurable results. We focus on the size of your vision, not your business, delivering solutions that drive efficiency
                        and lasting digital experiences through collaboration and creativity.</p>
                      <div className="about_btn_area">
                        <a href="#">About Us <img src="./images/arrow-tp-red.svg" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="review_about_section">
                    <div className="flex_item v_align_center">
                      <div className="review_img_list">
                        <img src="images/review_img-1.png" />
                        <img className="m_left" src="images/review_img-2.png" />
                        <img className="m_left" src="images/review_img-3.png" />
                        <div className="plus_text">+</div>
                      </div>
                      <span>4.8 Star Reviews on</span>
                      <img src="images/up_work_img.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3-7">
                <div className="about_left_img">
                  <img src="images/about-img2.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutSection