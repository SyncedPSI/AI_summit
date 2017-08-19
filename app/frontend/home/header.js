import $ from 'jquery';
import navSlide from 'nav-slide';
import { isMobileUA } from 'mdetect';


const header = () => {
  navSlide({ offset: 100, duration: isMobileUA() ? 0 : 800 });

  const $header = $('header.header');
  if (!isMobileUA()) return;

  const $hamburger = $('.js-hamburger');
  $hamburger.on('click', () => {
    $hamburger.toggleClass('is-active');
    $header.toggleClass('is-active');
  });

  $header.find('a').on('click', () => {
    $hamburger.removeClass('is-active');
    $header.removeClass('is-active');
  });
}

export default header;
