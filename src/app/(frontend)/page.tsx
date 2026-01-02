import BlogSection from "./components/BlogSection";
import Header from "./components/Header";
import OurClientSection from "./components/OurClientSection";
import SmartSolutionSection from "./components/SmartSolutionSection";
import "./frontend.css"

const page = () => {


  return (
    <>
      <Header />
      <main>
        <section className="banner_section">
          <div className="border_left"></div>
          <div className="container">
            <div className="banner_content_area">
              <div className="banner_content_rt">
                <h4>Welcome to <span className="red_text">The Obsidians</span></h4>
                <h1>We Provide Services and Solutions <span className="heading_red_st">To Enterprise</span></h1>
                <div className="banne_description_area">
                  <div className="play_video_btn">
                    <img className="rolling_text" src="./images/video-frame.png" />
                    <a href="#"><img src="images/play_icon.svg" /></a>
                  </div>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</p>
                </div>
                <a className="primary_btn" href="/">Get A Quote</a>
              </div>
              <div className="banner_content_lt">
                <div className="banner_lt_inner_content">
                  <div className="dropdown_area item_1">
                    <div className="dropdown_hover_window">
                      <div className="hover_window_content">
                        <h5>Experts</h5>
                        <p>And here's some amazing content. It's very engaging. Right?</p>
                      </div>
                    </div>
                    <div className="dropdown_hover_content">
                      <img src="./images/ic_round-plus.svg" />
                      <h6>Dedicated Team</h6>
                    </div>
                  </div>
                  <div className="dropdown_area item_2">
                    <div className="dropdown_hover_window">
                      <div className="hover_window_content">
                        <h5>Experts</h5>
                        <p>And here's some amazing content. It's very engaging. Right?</p>
                      </div>
                    </div>
                    <div className="dropdown_hover_content">
                      <img src="./images/ic_round-plus.svg" />
                      <h6>Developers</h6>
                    </div>
                  </div>
                  <div className="dropdown_area item_3">
                    <div className="dropdown_hover_window">
                      <div className="hover_window_content">
                        <h5>Experts</h5>
                        <p>And here's some amazing content. It's very engaging. Right?</p>
                      </div>
                    </div>
                    <div className="dropdown_hover_content">
                      <img src="./images/ic_round-plus.svg" />
                      <h6>Designers</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border_right"></div>
          <div className="banner_scroll_btn">
            <div className="border_bt"></div>
            <a href="#">Scroll down</a>
          </div>
        </section>

        <section className="logo_slider_section">
          <div className="logo_slide">
            <img src="./images/logo-1.png" />
            <img src="./images/logo-2.png" />
            <img src="./images/logo-3.png" />
            <img src="./images/logo-4.png" />
            <img src="./images/logo-5.png" />
            <img src="./images/logo-1.png" />
            <img src="./images/logo-2.png" />
            <img src="./images/logo-3.png" />
            <img src="./images/logo-4.png" />
            <img src="./images/logo-5.png" />
          </div>
        </section>

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

        <section className="solving_it">
          <div className="container">
            <div className="solving_it_challenges">
              <div className="project_heading">

                <h2>Solving IT Challenges in <br /><span className="heading_red_st">Every Industry</span></h2>
              </div>
              <div className="Industry_list">
                <ul>
                  <li>
                    <a href="#"><img src="images/Industry-1.png" alt="indestry" title="indestry" />Agribusiness</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-2.png" alt="indestry" title="indestry" />Advanced Manufacturing</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-1.png" alt="indestry" title="indestry" />Automotive & Mobility</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-2.png" alt="indestry" title="indestry" />Financial Services</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-1.png" alt="indestry" title="indestry" />Healthcare & Life Sciences</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-2.png" alt="indestry" title="indestry" />Energy & Natural Resources</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-1.png" alt="indestry" title="indestry" />Media & Entertainment</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-2.png" alt="indestry" title="indestry" />Telecommunications</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-1.png" alt="indestry" title="indestry" />Technology Services</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-2.png" alt="indestry" title="indestry" />Social & Public Sector</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/Industry-1.png" alt="indestry" title="indestry" />Forest Products</a>
                  </li>
                  <li>
                    <a href="#"><img src="images/three_dots.png" alt="indestry" title="indestry" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <div className="Obsidians_section">
          <div className="th_obsidians marquee">
            <ul className="marquee-track">
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>


              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
              <li><span><img src="images/logo_icon.png" />The Obsidians</span></li>
            </ul>
          </div>
        </div>

        <SmartSolutionSection />



        <section className="trusted_system">
          <div className="container">
            <div className="trusted_system_items">
              <div className="trusted_heading">
                <h2>A Trusted System <span className="heading_red_st">for Growth</span></h2>
                <p>By combining strategy, execution, and accountability, our process ensures measurable impact and sustained business performance.</p>

              </div>
              <div className="growth_items">
                <div className="growth_box">
                  <span>01</span>
                  <h3>Discover Needs</h3>
                  <p>We identify your core requirements, challenges, and objectives to ensure every solution is aligned with your business goals.</p>
                </div>
                <div className="growth_box">
                  <span>02</span>
                  <h3>Plan & Strategize</h3>
                  <p>Our planning and strategy phase aligns business goals with actionable insights to ensure clarity, efficiency, and long-term growth.</p>
                </div>
                <div className="growth_box">
                  <span>03</span>
                  <h3>Design & Develop</h3>
                  <p>We design and develop high-performance digital experiences that are visually compelling, user-focused, and built to scale.</p>
                </div>
                <div className="growth_box">
                  <span>04</span>
                  <h3>Deliver & Support</h3>
                  <p>We deliver solutions efficiently and provide ongoing support to ensure long-term performance, reliability, and client success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurClientSection />

        <section className="important_details_section">
          <div className="container">
            <div className="important_details_begin">
              <div className="faq_box_content">
                <div className="faq_heading">
                  <h2>Important Details Before <span className="heading_red_st">We Begin</span></h2>
                </div>
                <div className="faq_items">
                  <div className="singlefaq_area accordion-wrapper">
                    <div className="accordion-outer">
                      <div className="accordion-heading">What is the Actual Cost to Develop Custom Software?</div>
                      <div className="accordion-content" style={{ "display": "none" }}>
                        <p>Custom software development costs start at $15,000 and may increase depending on complexity and advanced features. Contact us for details.</p>
                      </div>
                    </div>
                    <div className="accordion-outer">
                      <div className="accordion-heading">From Idea to Execution — Here's What We Offer?</div>
                      <div className="accordion-content" style={{ "display": "none" }}>
                        <p>Here are some of our services that you can consider according to your business needs: Enterprise Software (ERPs), Product Development, UI/UX Design and Development, Custom Software Development, SaaS Development,
                          AI Development, Mobile App Development, and Digital Marketing Services, including On-Page SEO, Off-Page SEO, SMM, and more.</p>
                      </div>
                    </div>
                    <div className="accordion-outer">
                      <div className="accordion-heading">From Startups to Giants — Who We Work With?</div>
                      <div className="accordion-content" style={{ "display": "none" }}>
                        <p>Our software development expertise is beneficial for a range of industries such as healthcare, fintech, education, real estate, logistics, manufacturing, and eCommerce brands. Businesses can take advantage of our
                          solutions across the US, UK, Australia, Canada, the Middle East, and the UAE.</p>
                      </div>
                    </div>
                    <div className="accordion-outer">
                      <div className="accordion-heading">How Can I Get Started with my Product/Software Development Project?</div>
                      <div className="accordion-content" style={{ "display": "none" }}>
                        <p>Contact us using the information provided on our Contact Us page or email us with your project requirements. Our team will get in touch with you shortly to consult and guide you through the entire process of working
                          with our company.</p>
                      </div>
                    </div>
                    <div className="accordion-outer">
                      <div className="accordion-heading">What Automation and AI Tools Do You Offer?</div>
                      <div className="accordion-content" style={{ "display": "none" }}>
                        <p>The AI tools and automation solutions our team offers are Robotic Process Automation (RPA), chatbots, workflow automation systems, and AI-powered analytics dashboards to help streamline your business operations
                          smoothly.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="faq_box_images">
                <div className="faq_images">
                  <div className="faq_images_items1">
                    <img src="images/faq-1.png" alt="faq" title="faq" />
                  </div>
                  <div className="faq_images_items2">
                    <img src="images/faq-2.png" alt="faq" title="faq" />
                  </div>
                  <div className="faq_images_items3">
                    <img src="images/faq-3.png" alt="faq" title="faq" />
                  </div>
                  <div className="faq_icon_box">
                    <div className="faq_img">
                      <img src="images/text-frame.png" alt="faq" title="faq" className="rotate_img" />
                      <div className="faq_icon">
                        <img src="images/faqicon.png" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        <BlogSection />

        <div className="footer_section">
          <div className="container">
            <div className="footer_box">
              <div className="footer_items_1">
                <img src="images/logo-white.svg" />
                <div className="footer_text">
                  <p>Designing and developing next-generation digital products for global impact. Driven by 50+ talented developers in India, helping startups and enterprises shape the future of the web.</p>
                  <div className="form_box">
                    <form className="email-form">
                      <input type="email" placeholder="Enter Your Email" required />
                      <button type="submit"><img src="images/arrow-right.svg" /></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="footer_items_2">
                <h4>Quick Links</h4>
                <div className="footer_text">
                  <ul>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Sitemap</a></li>

                  </ul>
                </div>
              </div>
              <div className="footer_items_3">
                <h4>Social Media</h4>
                <div className="footer_text">
                  <ul>
                    <li><a href="#"><span className="social_icon"><img src="images/facebook.png" /></span>Facebook</a></li>
                    <li><a href="#"><span className="social_icon"><img src="images/instagram.png" /></span>Instagram</a></li>
                    <li><a href="#"><span className="social_icon"><img src="images/linkedin.png" /></span>Linkedin</a></li>
                    <li><a href="#"><span className="social_icon"><img src="images/dribbble.png" /></span>Dribbble</a></li>
                    <li><a href="#"><span className="social_icon"><img src="images/behance.png" /></span>Behance</a></li>

                  </ul>
                </div>
              </div>
              <div className="footer_items_4">
                <h4>Our Footprints</h4>
                <div className="footer_footprints_img">
                  <div className="footprints_img"><img src="images/footprints-1.png" /></div>
                  <div className="footprints_img"><img src="images/footprints-2.png" /></div>
                  <div className="footprints_img"><img src="images/footprints-3.png" /></div>
                  <div className="footprints_img"><img src="images/footprints-4.png" /></div>
                </div>
              </div>
            </div>
            <div className="copyright_section">
              <div className="copy_right_text">
                <p>© 2025 The Obsidians All Rights Reserved</p>
              </div>
              <div className="privacy_policy_text">
                <ul>
                  <li><a href="#">Terms and conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>




      </main >
      <div id="videoModal" style={{
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className="modal-content" style={{
          position: 'relative',
          maxWidth: '800px',
          width: '90%',
        }}>
          <span className="video-close" style={{
            position: 'absolute',
            top: '10px',
            right: '20px',
            cursor: 'pointer',
            color: 'white',
            fontSize: '30px',
            zIndex: 9,
          }}>&times;</span>
          {/* <iframe id="popupIframe" style="width:100%; height:450px; display:none;" frameborder="0" allowfullscreen></iframe>
          <video id="popupVideo" style="width:100%; display:none; max-height: 500px;" controls>
            <source src="" type="video/mp4">
          </video> */}
          <iframe
            id="popupIframe"
            style={{
              width: '100%',
              height: '450px',
              display: 'none',
              border: 'none',
            }}

            allowFullScreen
          ></iframe>

          <video
            id="popupVideo"
            style={{
              width: '100%',
              display: 'none',
              maxHeight: '500px',
            }}
            controls
          >
            {/* <source src="" type="video/mp4" /> */}
          </video>

        </div>
      </div>
    </>

  );
};

export default page;
