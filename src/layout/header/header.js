import navigation from './navigation.html';
import { logoHtml } from '../../components/logo/logo';
import { createElem } from '../../utils/helper';

export function addHeader() {
  document.body.append(createElem({
    element: 'header',
    class: 'header',
  }));

  const header = document.querySelector('header');
  header.insertAdjacentHTML('afterbegin', navigation);

  const nav = document.querySelector('.nav');
  nav.insertAdjacentHTML('afterbegin', logoHtml);

  // Add burger menu
  if (window.innerWidth < 990) {
    header.prepend(createElem({
      element: 'div',
      class: 'burger-button',
    }));

    header.append(createElem({
      element: 'div',
      class: 'burger-menu',
    }));

    const burgerMenu = document.querySelector('.burger-menu');
    const burgerButton = document.querySelector('.burger-button');

    burgerMenu.insertAdjacentHTML('afterbegin', `
          <nav class="burger-nav">
          ${logoHtml}
          <div class="burger-container-nav">
            <span class="about">About</span>
            <span class="map">Map</span>
            <span class="zoos">Zoos</span>
            <span class="donate">Donate</span>
            <span class="contact">Contact us</span>
          </div>
          <a href="https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks"
             class="designed-burger" >Designed by ©</a>
          </nav>
    `);

    document.body.addEventListener('click', (e) => {
      if (openCloseBurger.open && e.clientY > 330) {
        openCloseBurger();
      }
    });
    burgerButton.onclick = openCloseBurger;
  }
}

export function openCloseBurger() {
  const burgerButton = document.querySelector('.burger-button');
  const burgerMenu = document.querySelector('.burger-menu');

  if (openCloseBurger.open) {
    burgerMenu.style.top = '-400px';
    openCloseBurger.open = false;
  } else {
    burgerMenu.style.top = '0px';
    openCloseBurger.open = true;
  }

  const [head, main, footer] = document.body.children;
  burgerButton.classList.toggle('burger-button_close');
  main.classList.toggle('shadow');
  footer.classList.toggle('shadow');
  document.body.classList.toggle('no-scroll');
}
