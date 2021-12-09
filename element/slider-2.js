function Slider2() {
  return (
    // <!-- Slider -->
    <div className="banner-two gradient">
      <div className="container">
        <div className="banner-inner">
          <img
            className="img1 move-2"
            src="images/main-slider/slider2/pic3.png"
            alt=""
          />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content text-white">
                <h6
                  className="wow fadeInUp sub-title bgl-light text-white"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  We are The Best
                </h6>
                <h1
                  className="wow fadeInUp m-b20"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  San Diego Web Development Company & Local Seo Experts

                </h1>
                <p
                  className="wow fadeInUp m-b30"
                  data-wow-delay="1.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Extrordinary web development company with a team of unique talents. From Logo Design to Digital Marketing.<br/> Based out of San Diego, California
                </p>
                <a
                  href="/about-us-2"
                  className="wow fadeInUp btn btn-light text-primary shadow rounded-xl"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <img className="img2 move-2 " src="images/pattern/pattern5.png" alt="" />
          <img className="img2 move-2" src="images/pattern/icon-bx/orange.png" alt="" />
          <img className="img3 move-2" src="images/pattern/pattern6.png" alt="" />
        </div>
      </div>
      <div className="dz-media">
        <img style={{opacity:".78"}}src="images/adi.jpg" alt="" />
      </div>
    </div>
  );
}

export default Slider2;
