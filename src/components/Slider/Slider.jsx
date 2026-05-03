

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import HomeSlider from "../../assets/Images/home-slider.png";

export default function Slider() {
  return (
    <div className="relative">

      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        <SwiperSlide>
            <div
              className="h-100"
              style={{
                backgroundImage: `url('${HomeSlider}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="py-20 px-10 h-full bg-linear-to-r from-primary-500/90 to-primary-400/50 flex items-center">
                <div className="container text-white space-y-3">
                  <h2 className="text-3xl font-bold">
                    Fresh Products Delivered
                    <br />
                    to your Door
                  </h2>

                  <p>Get 20% off your first order</p>

                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 rounded-lg text-primary-600 bg-white hover:scale-105 transition">
                      Shop Now
                    </button>
                    <button className="px-4 py-2 rounded-lg text-white border-2 border-white/50 hover:scale-105 transition">
                      View Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-100"
              style={{
                backgroundImage: `url('${HomeSlider}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="py-20 px-10 h-full bg-linear-to-r from-primary-500/90 to-primary-400/50 flex items-center">
                <div className="container text-white space-y-3">
                  <h2 className="text-3xl font-bold">
                    Premium Quality 
                    <br />
                    Guaranteed
                  </h2>

                  <p>Fresh from farm to your table</p>

                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 rounded-lg text-blue-600 bg-white hover:scale-105 transition">
                      Shop Now
                    </button>
                    <button className="px-4 py-2 rounded-lg text-white border-2 border-white/50 hover:scale-105 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-100"
              style={{
                backgroundImage: `url('${HomeSlider}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="py-20 px-10 h-full bg-linear-to-r from-primary-500/90 to-primary-400/50 flex items-center">
                <div className="container text-white space-y-3">
                  <h2 className="text-3xl font-bold">
                    Fast & Free Delivery
                  </h2>

                  <p>Same day delivery available</p>

                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 rounded-lg text-purple-500 bg-white hover:scale-105 transition">
                      Order Now
                    </button>
                    <button className="px-4 py-2 rounded-lg text-white border-2 border-white/50 hover:scale-105 transition">
                      Delivery Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>

      <button className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition z-10">
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="custom-next absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition z-10">
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
}
