import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer