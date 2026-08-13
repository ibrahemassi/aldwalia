'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const blogData = [
  {
    id: 1,
    title: "Design Inspiration: Where to Find Creative Ideas",
    date: "August 14, 2023",
    author: "Admin",
    image: "/assets/imgs/blog/1.jpg",
    link: "/blog-details"
  },
  {
    id: 2,
    title: "Typography: Choosing Fonts for Maximum Impact",
    date: "August 14, 2023",
    author: "Admin",
    image: "/assets/imgs/blog/2.jpg",
    link: "/blog-details"
  },
  {
    id: 3,
    title: "The Future of Web Development in 2024",
    date: "August 15, 2023",
    author: "Admin",
    image: "/assets/imgs/blog/3.jpg",
    link: "/blog-details"
  },
  {
    id: 4,
    title: "Mastering UI/UX: A Comprehensive Guide",
    date: "August 16, 2023",
    author: "Admin",
    image: "/assets/imgs/blog/1.jpg",
    link: "/blog-details"
  }
];

function BlogSlider() {
  const swiperOptions = {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.blog-slider .swiper-button-next',
      prevEl: '.blog-slider .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="blog-slider section-padding main-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Blog</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Latest <span className="fw-200">News.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper {...swiperOptions} className="swiper-container">
          {blogData.map((item) => (
            <SwiperSlide key={item.id}>
              <div 
                className="item-box radius-30 overflow-hidden position-re"
                style={{ height: '450px', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* Background Image */}
                <div className="img-bg absolute-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Content Overlay with Blur */}
                <a 
                  href={item.link}
                  className="cont absolute-full d-flex flex-column justify-content-end p-40"
                  style={{ textDecoration: 'none', zIndex: 2 }}
                >
                  {/* Glass Blur Layer */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '60%',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      background: 'linear-gradient(to top, rgba(10, 22, 40, 0.9) 0%, rgba(10, 22, 40, 0.4) 60%, transparent 100%)',
                      maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                      zIndex: -1
                    }}
                  />

                  <div className="relative" style={{ padding:'20px' }}>
                    <div className="info sub-title text-white opacity-7 d-flex align-items-center mb-15 fz-12">
                      <span className="mr-20">BY : {item.author}</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-white fw-600 fz-24 mb-20 line-height-1-4">
                      {item.title}
                    </h4>
                    
                    <div className="d-flex align-items-center mt-20">
                      <div 
                        className="butn butn-md butn-light radius-30 d-inline-block"
                        style={{ padding: '10px 25px', background: '#fff', color: '#000', width: 'fit-content' }}
                      >
                        <span className="fz-14 fw-600">Read More</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BlogSlider;
