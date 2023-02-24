import donate from './donate.html';

function addDonatePage() {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', donate);

  const moneyNum = document.querySelector('.input-number');
  const progressBar = document.querySelector('.progress-bar_radio');

  progressBar.onclick = (elem) => {
    moneyNum.value = elem.target.id;
  };

  moneyNum.oninput = (e) => {
    for (const key of progressBar.children) {
      if (moneyNum.value === key.id) key.checked = true;
    }
  };
}

export { addDonatePage };
