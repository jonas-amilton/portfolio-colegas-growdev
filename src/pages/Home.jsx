import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/images/eva-avatar.png";
import slide_image_2 from "../assets/images/jonas-avatar.png";
import slide_image_3 from "../assets/images/img_3.jpg";
import slide_image_4 from "../assets/images/img_4.jpg";
import slide_image_5 from "../assets/images/img_5.jpg";
import slide_image_6 from "../assets/images/img_6.jpg";
import slide_image_7 from "../assets/images/img_7.jpg";

function Home() {
  return (
    <div className="container">
      <h1 className="heading">Atividade - Feedback</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        speed={1000} // Adicione isto
        freeMode={true} // Adicione isto
        freeModeMomentum={true} // Adicione isto
        slideToClickedSlide={true} // Adicione isto
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <div className="redes">
            <button className="linkedin">
              <a href="https://www.linkedin.com/in/evatavares/" target="_blank">
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <a href="#" target="_blank">
                Soft Skills
              </a>
            </button>
            <button className="github">
              <a href="https://github.com/EvaTavares" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <div className="redes">
            <button className="linkedin">
              <a
                href="https://www.linkedin.com/in/jonas-ag-silva/"
                target="_blank"
              >
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <a href="#" target="_blank">
                Soft Skills
              </a>
            </button>
            <button className="github">
              <a href="https://github.com/jonas-amilton" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <div className="redes">
            <button className="linkedin">
              <a href="#" target="_blank">
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <a href="#" target="_blank">
                Soft Skills
              </a>
            </button>
            <button className="github">
              <a href="#" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <div className="redes">
            <button className="linkedin">
              <a href="#" target="_blank">
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <a href="#" target="_blank">
                Soft Skills
              </a>
            </button>
            <button className="github">
              <a href="#" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <div className="redes">
            <button className="linkedin">
              <a href="#" target="_blank">
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <a href="#" target="_blank">
                Soft Skills
              </a>
            </button>
            <button className="github">
              <a href="#" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
          <div className="redes">
            <button className="linkedin">
              <a href="#" target="_blank">
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <a href="#" target="_blank">
                Soft Skills
              </a>
            </button>
            <button className="github">
              <a href="#" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
          <div className="redes">
            <button className="linkedin">
              <a href="#" target="_blank">
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <a href="#" target="_blank">
                Soft Skills
              </a>
            </button>
            <button className="github">
              <a href="#" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Home;