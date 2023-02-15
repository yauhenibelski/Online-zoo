import header from './header.html';
import { logoHtml } from '../../components/logo/logo';

const addHeader = (() => {
  document.body.insertAdjacentHTML('afterbegin', header);

  const nav = document.querySelector('.nav');
  nav.insertAdjacentHTML('afterbegin', logoHtml);
})();

export { addHeader };
