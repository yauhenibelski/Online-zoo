import "./style.scss";
import { addHeader, openCloseBurger } from "./layout/header/header";
import { addDonatePage } from "./layout/pages/donate/donate";
import { addHomePage } from "./layout/pages/home/home";
import { addFooter } from "./layout/footer/footer";

addHeader();
addFooter();
addHomePage();

document.addEventListener('click', (elem) => {
  const elemClass = elem.target.classList;
  const parentElemClass = elem.target.parentElement.classList;
  const [header, activePage, footer] = document.body.children;

  if (elemClass.contains('logo')
                                || parentElemClass.contains('logo')
                                || elemClass.contains('about')) {
    activePage.remove();
    window.scrollTo(0, 0);
    addHomePage();
  }

  if (elemClass.contains('donate')
                                  || elemClass.contains('emergency-support_fund')
                                  || elemClass.contains('feed-a_friend_now')
                                  || elemClass.contains('footer-donate_button')) {
    activePage.remove();
    window.scrollTo(0, 0);
    addDonatePage();
  }

  if (elemClass.contains('contact')) {
    openCloseBurger();
    footer.scrollIntoView();
  }
});
