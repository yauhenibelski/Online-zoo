import { createElem } from '../../../utils/helper';
import section1 from './section_1/section_1.html';
import section2 from './section_2/section_2.html';
import section3 from './section_3/section_3.html';
import section4 from './section_4/section_4.html';
import section5 from './section_5/section_5.html';
import { addHomePagePats } from './section_3/section_3';
import { addTestimonial } from './section_5/section_5';

(() => {
  const header = document.querySelector('.header');
  const homePage = createElem({
    element: 'main',
    class: 'home-page',
  });

  header.after(homePage);
  homePage.insertAdjacentHTML('beforeend', section1);
  homePage.insertAdjacentHTML('beforeend', section2);
  homePage.insertAdjacentHTML('beforeend', section3);
  homePage.insertAdjacentHTML('beforeend', section4);
  homePage.insertAdjacentHTML('beforeend', section5);
  addHomePagePats();
  addTestimonial();
})();
