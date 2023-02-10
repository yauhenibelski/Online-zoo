import section1 from './section_1/section_1.html'


const addSection1 = (() => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('beforeend', section1);
})();


export { addSection1 };