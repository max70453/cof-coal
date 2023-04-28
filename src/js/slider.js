import 'swiper/css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const Slider = function(){
  const swiper = new Swiper('.swiper', {
    spaceBetween: 150,
    direction: 'horizontal',
    loop: false,
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: '.swiper-arrows__left',
      prevEl: '.swiper-arrows__right',
    },
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
      type: 'custom',
    renderCustom: function (swiper, current, total) {
      console.log((current + '/' + (total - 1)));
        return "<div>" + current + "</div>" + "<div>" + '/' + "</div>" + "<div>" + (total - 1) + "</div>"; 
    },
    },
  });
};

export default Slider();
