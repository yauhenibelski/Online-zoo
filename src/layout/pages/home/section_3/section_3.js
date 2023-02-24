import { animals } from "./animals";
import { createElem } from "../../../../utils/helper";

const animalsHtml = [];

export function addHomePagePats() {
  const j = window.innerWidth > 990 ? 6 : 4;
  const petsWrapper = document.querySelector('.pets');

  for (let i = 0; i < animals.length; i++) {
    const animalHtml = `
                      <div class="animals-block" data-num="${i}">
                        <img src="img/pats/pets_${i}.png"
                            class="animals-block_foto"
                            alt="animal">
                        <div class="animals-block_content">
                          <div class="animals-block_text">
                            <h2>${animals[i].name}</h2>
                            <h3>${animals[i].location}</h3>
                          </div>
                          <img src="img/pats/${animals[i].eating}"
                              class="eating"
                              alt="eating">
                        </div>
                      </div>`;

    animalsHtml.push([animalHtml, i]);

    if (i < j) {
      petsWrapper.insertAdjacentHTML('beforeend', animalHtml);
    }
  }

  const [leftSlideButton, rightSlideButton] = document.querySelector('.pets-buttons').children;
  rightSlideButton.onclick = addSlide;
  leftSlideButton.onclick = addSlide;
}

function addSlide(e) {
  const slider = document.querySelector('.slider');
  const firstSlide = slider.firstElementChild;
  const newPatsSlide = createNewSlide();
  const [leftSlideButton, rightSlideButton] = document.querySelector('.pets-buttons').children;

  if (e.currentTarget.classList.contains('button-right')) {
    rightSlideButton.onclick = null;

    newPatsSlide.style.transform = `translateX(103%)`;
    slider.append(newPatsSlide);

    setTimeout(() => {
      firstSlide.style.transform = `translateX(-103%)`;
      newPatsSlide.style.transform = `translateX(0%)`;
    }, 1);

    setTimeout(() => {
      firstSlide.remove();
      rightSlideButton.onclick = addSlide;
    }, 500);
  }
  if (e.currentTarget.classList.contains('button-left')) {
    leftSlideButton.onclick = null;

    newPatsSlide.style.transform = `translateX(-103%)`;
    slider.append(newPatsSlide);

    setTimeout(() => {
      firstSlide.style.transform = `translateX(103%)`;
      newPatsSlide.style.transform = `translateX(0%)`;
    }, 1);

    setTimeout(() => {
      firstSlide.remove();
      leftSlideButton.onclick = addSlide;
    }, 500);
  }
}

function createNewSlide() { // unique animals
  const activePets = Array.from(document.querySelector('.pets').children);
  const activePetsNum = activePets.map((e) => {
    e = e.dataset.num;
    return e;
  });

  const newPets = animalsHtml.filter((elem) => {
    const [html, num] = elem;
    return !activePetsNum.includes(`${num}`);
  });

  const animalBlock = createElem({
    element: 'div',
    class: 'pets',
  });

  while (newPets.length !== activePets.length) {
    const newPetsNum = newPets.map((elem) => {
      const [html, num] = elem;
      elem = num;
      return elem;
    });

    const randomPet = animalsHtml.sort(() => Math.random() - 0.5)[0];

    if (!newPetsNum.includes(randomPet[1])) {
      newPets.push(randomPet);
    }
  }

  newPets.forEach((elem) => {
    const [html, num] = elem;
    animalBlock.insertAdjacentHTML('afterbegin', html);
  });
  return animalBlock;
}
