import { testimonial } from "./testimonials";
import { createElem } from "../../../../utils/helper";

export function addTestimonial() {
  const testimonialsContainer = document.querySelector('.testimonials-container');

  for (const i of testimonial) {
    testimonialsContainer.insertAdjacentHTML('beforeend', `
    <div class="testimonial-block">
        <div class="testimonial">
            <div class="info">
                <img src="img/user_icon/${i.icon}" alt="logo">
                <p class="name">${i.userName}</p>
                <p class="user_local">${i.local} • ${i.date}</p>
            </div>
            <div class="testimonial-text_block">
                <p>${i.testimonial}</p>
            </div>
        </div>`);
  }

  const scroll = document.querySelector('.scroll');
  const testimonialBlockStyle = getComputedStyle(testimonialsContainer.firstElementChild);
  const testimonialMarginR = parseInt(testimonialBlockStyle.marginRight, 10);
  const testimonialWidth = parseInt(testimonialBlockStyle.width, 10);
  scroll.oninput = () => {
    testimonialsContainer.style.transform = `
                  translateX(-${(testimonialWidth + testimonialMarginR) * scroll.value}px)`;
  };

  for (const key of testimonialsContainer.children) {
    key.onclick = testimonialPopUp;
  }
}

function testimonialPopUp() {
  const popUpContainer = createElem({
    element: 'div',
    class: 'pop-up_container',
  });

  popUpContainer.append(this.cloneNode(true));
  document.body.append(popUpContainer);

  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    popUpContainer.classList.toggle('testimonial-opacity');
  }, 40);

  popUpContainer.onclick = (e) => {
    if (!e.target.classList.contains('pop-up_container')) return;

    document.body.style.overflow = 'auto';
    popUpContainer.classList.toggle('testimonial-opacity');

    setTimeout(() => {
      popUpContainer.remove();
    }, 300);
  };
}
