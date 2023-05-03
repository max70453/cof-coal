import 'swiper/css';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css/pagination';

Swiper.use([Navigation]);

const Gallery = function(){
  const gallery = new Swiper('.swiper-gallery', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,

    navigation: {
      nextEl: '.gallery-arrows__left',
      prevEl: '.gallery-arrows__right',
    }
  });
}

export default Gallery();