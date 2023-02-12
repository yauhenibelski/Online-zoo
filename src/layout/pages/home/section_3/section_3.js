import { animals } from "./animals";

export function addHomePagePats() {
  const j = window.innerWidth > 640 ? 6 : 4;
  const petsWrapper = document.querySelector('.pets');

  for (let i = 0; i < j; i++) {
    petsWrapper.insertAdjacentHTML('beforeend', `
      <div class="animals-block">
        <img src="img/pats/${animals[i].num}"
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
      </div>`);
  }
}
