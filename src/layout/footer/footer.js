import footer from "./footer.html";
import { logoHtml } from "../../components/logo/logo";

export function addFooter() {
  document.body.insertAdjacentHTML('beforeend', footer);

  const containerContact = document.querySelector('.container-contact');
  containerContact.insertAdjacentHTML('afterbegin', logoHtml);
}
