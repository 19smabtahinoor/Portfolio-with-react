import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub } from "react-icons/fa";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  EffectCoverflow, Pagination
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <SwiperSlide>
        <div key={projects.projectTitle} className="columns portfolio-item card bg-white p-8 rounded-xl shadow-xl">
            <div className="item-wrap rounded-xl shadow-xl" style={{height:'300px',overflow:'hidden'}}>
              <img className="rounded-xl shadow-xl" alt={projects.projectTitle} src={projectImage} />
          </div>

            <h2 className="text-gray-600 py-6 text-3xl">{projects.projectTitle}</h2>
            <span>Used: {projects.projectTools}</span>

            <div className="flex items-center space-x-3">
              <a className="link-live-demo" href={projects.liveDemo} target="_blank" rel="noreferrer">
                <button className="live-demo-button px-5 py-3 rounded-lg shadow-xl my-7 text-white font-bold">
                  Live Demo
                </button>
              </a>
            
              <a className="github_icon" href={projects.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-5xl" />
              </a>
            </div>
        </div>
        </SwiperSlide>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed" data-aos="fade-right" data-aos-duration="1500">
          <h2 className="text-center text-3xl text-gray-600 pb-12">Check Out Some of My Works.</h2>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <Swiper autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}effect={'coverflow'} grabCursor={true} centeredSlides={false} slidesPerView={3} coverflowEffect={{ "rotate": 50, "stretch": 0, "depth": 100, "modifier": 1, "slideShadows": false }} pagination={true} className="mySwiper p-9 box-border"
              breakpoints={{
                320:{
                  slidesPerView: 1,
                },
                375:{
                  slidesPerView: 1,
                },
                425:{
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3
                },
                1200: {
                  slidesPerView: 3
                },
                1400: {
                  slidesPerView: 3
                }
              }}
            >
                {projects}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
