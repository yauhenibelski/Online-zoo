import donate from './donate.html';

function addDonatePage() {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', donate);
}

export { addDonatePage };
