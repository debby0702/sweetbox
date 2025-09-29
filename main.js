import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 首頁//主題介紹swiper
const swiperThemeOpts = new Swiper(".swiper-themeOpts", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2500,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// 首頁//好評分享swiper
const swiper = new Swiper(".feedback-swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  slidesOffsetBefore: 0, // 不要預留空白
  slidesOffsetAfter: 0,
  autoHeight: true,
  autoplay: false,
  loop: true,
  speed: 800,
});

// 首頁//合作夥伴swiper
const swiperBrands = new Swiper(".brands-swiper", {
  slidesPerView: "auto",
  spaceBetween: 4, //手機版間距
  breakpoints: {
    576: { spaceBetween: 20 }, //桌面版間距
  },
  slidesOffsetBefore: 0, // 不要預留空白
  slidesOffsetAfter: 0,
  autoHeight: true,
  autoplay: true,
  loop: true, //循環
  speed: 800,
});
