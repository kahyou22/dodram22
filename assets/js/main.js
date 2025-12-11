{
  const defaultSwiperOpts = {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  };
  const swiperLeftOpts = {
    ...defaultSwiperOpts,
    pagination: {
      el: ".banner .left .swiper-pagination",
      clickable: true,
    },
  };
  const swiperRightOpts = {
    ...defaultSwiperOpts,
    pagination: {
      el: ".banner .right .swiper-pagination",
      clickable: true,
    },
  };
  const bannerSwiper1 = new Swiper(".banner .left", swiperLeftOpts);
  const bannerSwiper2 = new Swiper(".banner .right", swiperRightOpts);
}

{
  const swiperOpts = {
    spaceBetween: 18,
    loop: true,
    slidesPerView: 4,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  };
  const recommendsSwiper = new Swiper(".recommends .right", swiperOpts);
}
