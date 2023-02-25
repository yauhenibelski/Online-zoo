import donate from './donate.html';
import { openCloseBurger } from '../../header/header';

function addDonatePage() {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', donate);

  const moneyNum = document.querySelector('.input-number');
  const progressBar = document.querySelector('.progress-bar_radio');
  const donatePage = document.querySelector('.donate-page');

  progressBar.onclick = (elem) => {
    moneyNum.value = elem.target.id;
  };

  moneyNum.oninput = (e) => {
    for (const key of progressBar.children) {
      if (moneyNum.value === key.id) key.checked = true;
    }
  };

  if (openCloseBurger.open) {
    openCloseBurger();
    donatePage.classList.remove('shadow');
  }
}

export { addDonatePage };
