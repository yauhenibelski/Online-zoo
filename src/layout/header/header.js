import header from './header.html';

const addHeader = (() => {
  document.body.insertAdjacentHTML('afterbegin', header);
})();

export { addHeader };
