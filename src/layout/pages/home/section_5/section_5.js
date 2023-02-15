import { testimonial } from "./testimonials";

export function addTestimonial() {
  const testimonialsContainer = document.querySelector('.testimonials-container');

  // eslint-disable-next-line no-restricted-syntax
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
}
