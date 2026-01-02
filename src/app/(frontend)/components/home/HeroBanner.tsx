import Image from "next/image";
const HeroBanner = () => {
  return (
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
                    <a href="#"><Image src="/images/play_icon.svg" alt="play icon" width={22} height={22}  /></a>
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
                      <Image src="/images/ic_round-plus.svg" alt="ic round plus" width={26} height={26}  />
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
                      <Image src="/images/ic_round-plus.svg" alt="ic round plus" width={26} height={26}  />
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
                    <Image src="/images/ic_round-plus.svg" alt="ic round plus" width={26} height={26}  />
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
  )
}

export default HeroBanner