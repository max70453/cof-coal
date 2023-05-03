import 'swiper/css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const Slider = function(){
  const swiper = new Swiper('.swiper-stock', {
    slidesPerView: 2,
    spaceBetween: 50,
    direction: 'horizontal',
    loop: true,
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: '.swiper-arrows__left',
      prevEl: '.swiper-arrows__right',
    }
  });
};

export default Slider();
