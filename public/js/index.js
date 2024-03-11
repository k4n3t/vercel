const texts = ["Acteur", "Chorégraphe", "Cascadeur", "Réalisateur"]
let tps = 0;
const carrouselTexts = document.querySelector(".carrouselTexts");

setInterval(() => {
  tps++;
  if (tps > texts.length - 1) tps = 0;
  carrouselTexts.textContent = texts[tps];
}, 3000);

const info = document.querySelector('.video-slider h2')
const box = document.querySelectorAll('.video-slider-box');
box.forEach(popup => popup.addEventListener('click', () => {
  info.classList.toggle('active')
  popup.classList.toggle('active')
}))
