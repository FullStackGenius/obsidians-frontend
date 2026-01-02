'use client'
import Slider from "react-slick";

const BlogSection = () => {

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

    var settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,   // ⭐ MAIN KEY
        arrows: true,
        dots: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

    };


    return (
        <section className="blogs_section">
            <div className="container">
                <div className="strategies_box">
                    <div className="blogs_heading">
                        <h2>Learn Strategies for <br /><span className="heading_red_st">Smarter Innovation</span></h2>
                    </div>

                    <div className="blogs_slider">

                        <div className="blogs_box">
                            <Slider {...settings} >
                                <div className="blogs_items w-50" >
                                    <img src="images/blogs-1.jpg" alt="blogs" title="blogs" />
                                    <div className="blog_content">
                                        <h4>Choosing the Best Mobile App Development...</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="blogs_items w-25" >
                                    <div className="blog_content mt-bottom">
                                        <h4>Choosing the Best Mobile App Development...</h4>
                                        <p>Lorem ipsum dolor sit amet, conser adipiscing elit, sed do eiusmod tempor incididunt ut...</p>
                                    </div>
                                    <img src="images/blogs-2.jpg" alt="blogs" title="blogs" />
                                </div>
                                <div className="blogs_items w-25" >
                                    <img src="images/blogs-3.jpg" alt="blogs" title="blogs" />
                                    <div className="blog_content">
                                        <h4>Choosing the Best Mobile App Development...</h4>
                                        <p>Lorem ipsum dolor sit amet, conser adipiscing elit, sed do eiusmod tempor incididunt ut...</p>
                                    </div>
                                </div>
                                <div className="blogs_items w-50" >
                                    <img src="images/blogs-1.jpg" alt="blogs" title="blogs" />
                                    <div className="blog_content">
                                        <h4>Choosing the Best Mobile App Development...</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="blogs_items w-25" >
                                    <div className="blog_content mt-bottom">
                                        <h4>Choosing the Best Mobile App Development...</h4>
                                        <p>Lorem ipsum dolor sit amet, conser adipiscing elit, sed do eiusmod tempor incididunt ut...</p>
                                    </div>
                                    <img src="images/blogs-2.jpg" alt="blogs" title="blogs" />
                                </div>
                                <div className="blogs_items w-25" >
                                    <img src="images/blogs-2.jpg" alt="blogs" title="blogs" />
                                    <div className="blog_content ">
                                        <h4>Choosing the Best Mobile App Development...</h4>
                                        <p>Lorem ipsum dolor sit amet, conser adipiscing elit, sed do eiusmod tempor incididunt ut...</p>
                                    </div>

                                </div>
                            </Slider>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogSection