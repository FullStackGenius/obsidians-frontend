'use client'
import Slider from "react-slick";

const SmartSolutionSection = () => {
 

type ArrowProps = {
  className?: string;
  onClick?: () => void;
};

function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src="/images/slider_arrow-1.svg" alt="Prev" />
    </button>
  );
}

function NextArrow({ className, onClick }: ArrowProps) {
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src="/images/slider_arrow.svg" alt="Next" />
    </button>
  );
}

const settings = {
  infinite: true,
  speed: 300,

  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,

  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <>
      <section className="smart_solution_section">
        <div className="container">
          <div className="slider_heading">
            <h2>Smart Tech Solutions For <br /><span className="heading_red_st">our Development</span></h2>
          </div>
          <Slider {...settings} className="slider_smart_solution center">
            <div className="slider_items ">
              <div className="items_box">
                <div className="icon_slider">
                  <img src="images/slider_icon.png" />
                </div>
                <h4>Custom Software Development</h4>
                <p>We build software that fits your business like a glove. From concept to deployment, our team delivers tailor-made solutions that are fast, reliable...</p>
                <div className="slider_btn_col">
                  <a className="primary_btn" href="/">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="items_box">
                <div className="icon_slider">
                  <img src="images/slider_icon.png" />
                </div>
                <h4>Custom Software Development</h4>
                <p>We build software that fits your business like a glove. From concept to deployment, our team delivers tailor-made solutions that are fast, reliable...</p>
                <div className="slider_btn_col">
                  <a className="primary_btn" href="/">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="items_box">
                <div className="icon_slider">
                  <img src="images/slider_icon.png" />
                </div>
                <h4>Custom Software Development</h4>
                <p>We build software that fits your business like a glove. From concept to deployment, our team delivers tailor-made solutions that are fast, reliable...</p>
                <div className="slider_btn_col">
                  <a className="primary_btn" href="/">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="items_box">
                <div className="icon_slider">
                  <img src="images/slider_icon.png" />
                </div>
                <h4>Custom Software Development</h4>
                <p>We build software that fits your business like a glove. From concept to deployment, our team delivers tailor-made solutions that are fast, reliable...</p>
                <div className="slider_btn_col">
                  <a className="primary_btn" href="/">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="items_box">
                <div className="icon_slider">
                  <img src="images/slider_icon.png" />
                </div>
                <h4>Custom Software Development</h4>
                <p>We build software that fits your business like a glove. From concept to deployment, our team delivers tailor-made solutions that are fast, reliable...</p>
                <div className="slider_btn_col">
                  <a className="primary_btn" href="/">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="items_box">
                <div className="icon_slider">
                  <img src="images/slider_icon.png" />
                </div>
                <h4>Custom Software Development</h4>
                <p>We build software that fits your business like a glove. From concept to deployment, our team delivers tailor-made solutions that are fast, reliable...</p>
                <div className="slider_btn_col">
                  <a className="primary_btn" href="/">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="items_box">
                <div className="icon_slider">
                  <img src="images/slider_icon.png" />
                </div>
                <h4>Custom Software Development</h4>
                <p>We build software that fits your business like a glove. From concept to deployment, our team delivers tailor-made solutions that are fast, reliable...</p>
                <div className="slider_btn_col">
                  <a className="primary_btn" href="/">Learn More</a>
                </div>
              </div>
            </div>
          </Slider>
         
        </div>
      </section>


    </>
  )
}

export default SmartSolutionSection