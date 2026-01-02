'use client'
import { useRef, useState } from "react";
import Slider from "react-slick";
const OurClientSection = () => {

    const [open, setOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [isIframe, setIsIframe] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const openVideo = (url: string) => {
        setOpen(true);

        if (url.includes('youtube.com') || url.includes('vimeo.com')) {
            setIsIframe(true);
            const separator = url.includes('?') ? '&' : '?';
            setVideoUrl(url + separator + 'autoplay=1&mute=1');
        } else {
            setIsIframe(false);
            setVideoUrl(url);
        }
    };

    const closeModal = () => {
        setOpen(false);
        setVideoUrl('');

        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };


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
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

    };
    return (
        <>

            <section className="our_client_section">
                <div className="container">
                    <div className="our_client">
                        <div className="client_heading">
                            <h2>What our <span className="heading_red_st">clients say</span></h2>
                        </div>
                        <div className="client_slider">
                            <Slider {...settings}>
                                <div className="client_items">
                                    <div className="client_box">
                                        <div className="video_review">
                                            <div className="video_box">
                                                <img src="images/client_image.png" />
                                                <div className="video-play-btns" data-video="https://theobsidians.com/wp-content/uploads/2025/06/Video-Introduction-1.mp4"
                                                    onClick={() =>
                                                        openVideo(
                                                            'https://theobsidians.com/wp-content/uploads/2025/06/Video-Introduction-1.mp4'
                                                        )
                                                    }>
                                                    <div className="waves wave-1"></div>
                                                    <div className="waves wave-2"></div>
                                                    <div className="waves wave-3"></div>
                                                    <img className="playBtnIcon" src="./images/play-icons.svg" alt="Play" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="client_review_text">
                                            <img src="images/client_icon.png" alt="icon" title="icon" />
                                            <p>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.</p>
                                            <div className="client_name">
                                                <h4>Eli Angote</h4>
                                                <p>Chief Executive Officer</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="client_items">
                                    <div className="client_box">
                                        <div className="video_review">
                                            <div className="video_box">
                                                <img src="images/client_image.png" />
                                                <div className="video-play-btns" data-video="https://theobsidians.com/wp-content/uploads/2025/06/Video-Introduction-1.mp4"

                                                    onClick={() =>
                                                        openVideo(
                                                            'https://theobsidians.com/wp-content/uploads/2025/06/Video-Introduction-1.mp4'
                                                        )
                                                    }

                                                >
                                                    <div className="waves wave-1"></div>
                                                    <div className="waves wave-2"></div>
                                                    <div className="waves wave-3"></div>
                                                    <img className="playBtnIcon" src="/images/play-icons.svg" alt="Play" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="client_review_text">
                                            <img src="images/client_icon.png" alt="icon" title="icon" />
                                            <p>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.</p>
                                            <div className="client_name">
                                                <h4>Eli Angote</h4>
                                                <p>Chief Executive Officer</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="client_items">
                                    <div className="client_box">
                                        <div className="video_review">
                                            <div className="video_box">
                                                <img src="images/client_image.png" />
                                                <div className="video-play-btns" data-video="https://theobsidians.com/wp-content/uploads/2025/06/Video-Introduction-1.mp4"

                                                    onClick={() =>
                                                        openVideo(
                                                            'https://theobsidians.com/wp-content/uploads/2025/06/Video-Introduction-1.mp4'
                                                        )
                                                    }

                                                >
                                                    <div className="waves wave-1"></div>
                                                    <div className="waves wave-2"></div>
                                                    <div className="waves wave-3"></div>
                                                    <img className="playBtnIcon" src="/images/play-icons.svg" alt="Play" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="client_review_text">
                                            <img src="images/client_icon.png" alt="icon" title="icon" />
                                            <p>posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.</p>
                                            <div className="client_name">
                                                <h4>Eli Angote</h4>
                                                <p>Chief Executive Officer</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO MODAL ================= */}
            {open && (
                <div
                    className="videoModal"
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            maxWidth: '800px',
                            width: '90%',
                        }}
                    >
                        <span
                            className="video-close"
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 20,
                                cursor: 'pointer',
                                color: '#fff',
                                fontSize: 30,
                                zIndex: 10,
                            }}
                        >
                            &times;
                        </span>

                        {isIframe ? (
                            <iframe
                                src={videoUrl}
                                style={{ width: '100%', height: 450, border: 'none' }}
                                allowFullScreen
                            />
                        ) : (
                            <video
                                ref={videoRef}
                                src={videoUrl}
                                style={{ width: '100%', maxHeight: 500 }}
                                controls
                                autoPlay
                            />
                        )}
                    </div>
                </div>
            )}

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
    )
}

export default OurClientSection