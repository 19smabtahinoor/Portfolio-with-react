import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Gallery() {
  return (
    <>
      <section className="about_page d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="pt-5 about_page_heading">
                <h1 className="text-center">Gallery</h1>
                <span className="d-block text-center bottom_border"></span>
              </div>

              <div className="row my-5 d-flex justify-content-center flex-row">
                <div className="col-12">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={3000}
                    className="carouselSlider"
                  >

                    <div>
                      <img src="https://i.ibb.co/ypHG7p8/pribncipalsirwithme2.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/GTpWvwh/teamphotoall.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/gTjRkDx/publiclibrary21.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/PchDGbC/mirpurcadetprize1.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/jvYnGR6/motherlanguageinstitute.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/mD0z1wh/martivhasains3.jpg" alt="image" />
                    </div>
                    <div>
                      <img src="https://i.ibb.co/FsZNxTW/IMG-20190423-185925.jpg" alt="image" />
                    </div>
                    <div>
                      <img src="https://i.ibb.co/jf4WX6R/IMG-20190422-104833.jpg" alt="image" />
                    </div>
                    <div>
                      <img src="https://i.ibb.co/7WQQ1Tk/iamwithprincipalsir.jpg" alt="image" />
                    </div>
                    <div>
                      <img src="https://i.ibb.co/j3sTpJ3/DSC01382.jpg" alt="image" />
                    </div>
                    <div>
                      <img src="https://i.ibb.co/jk363k0/DSC01116.jpg" alt="image" />
                    </div>
                    <div>
                      <img src="https://i.ibb.co/7XdNGjM/DSC01072.jpg" alt="image" />
                    </div>
                    <div>
                      <img src="https://i.ibb.co/HPSRwDH/DSC00775.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/xg8v41G/DSC00684.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/FYN1yGX/DSC00673.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/R6V9JTm/DSC00391.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/vdQWMzs/DSC00283.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/r6x35Z7/DSC00024.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/4P1zwpD/dhakadcwithme.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/6PVYBXn/ankara1.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/tQgCL5c/anadoluhotemoutside.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/5Bg7ZqM/turkeykabidprize.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/X8pMqDq/certificates.jpg" alt="image" />
                    </div>

                    <div>
                      <img src="https://i.ibb.co/0CCHjQ7/EMK-Certificate.jpg" alt="image" />
                    </div>

                  </Carousel>

                </div>
              </div>

            </div>


          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;



