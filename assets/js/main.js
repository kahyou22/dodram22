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
  const container = document.querySelector(
    ".recommends .right .swiper-wrapper"
  );
  const slides = [...container.children];
  for (let s of slides) {
    container.appendChild(s.cloneNode(true));
  }
  const swiperOpts = {
    spaceBetween: 18,
    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  const recommendsSwiper = new Swiper(".recommends .right", swiperOpts);
}

{
  const container = document.querySelector(
    ".gift .right .swiper .swiper-wrapper"
  );
  const slides = [...container.children];
  for (let s of slides) {
    container.appendChild(s.cloneNode(true));
  }
  const swiperOpts = {
    spaceBetween: 18,
    loop: true,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  const giftSwiper = new Swiper(".gift .right .swiper", swiperOpts);
}
