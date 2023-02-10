import { createElem } from '../../../utils/helper';
import section1 from './section_1/section_1.html';
import section2 from './section_2/section_2.html';

(() => {
  const header = document.querySelector('.header');
  const homePage = createElem({
    element: 'main',
    class: 'home-page',
  });

  header.after(homePage);
  homePage.insertAdjacentHTML('beforeend', section1);
  homePage.insertAdjacentHTML('beforeend', section2);
})();
