import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  slidesOffsetBefore: 0, // 不要預留空白
  slidesOffsetAfter: 0,
  autoHeight: true,
  autoplay: true,
});