import 'swiper/css';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css/pagination';

Swiper.use([Navigation]);

const Comment = function(){
  const comment = new Swiper('.swiper-comment', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: '.comment-arrows__left',
      prevEl: '.comment-arrows__right',
    }
  });
}

export default Comment();