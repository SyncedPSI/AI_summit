import $ from 'jquery';
import scrollTo from 'jquery-scroll';


const banner = () => {
  $('.js-scrollto-live').on('click', function () {
    scrollTo({
      selector: '#live',
      offset: 70
    });
  });
}

export default banner;
