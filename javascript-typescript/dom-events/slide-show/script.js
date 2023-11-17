// 1 - Inicializar a página com a primeira imagem
// 2 - Descobrir o index do slide
// 3 - Trocar de slide ao clicar no botão next
const slides = document.getElementsByClassName("slide");
slides[0].classList.add("isActive");

function getActiveSlide() {
  let selectedSlideIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("isActive")) {
      selectedSlideIndex = i;
      break;
    }
  }
  return selectedSlideIndex;
}

function handleSlides(value) {
  const currentIndex = getActiveSlide();

  const isLastSlide = currentIndex + value > slides.length - 1;
  const isFirstSlide = currentIndex + value < 0;

  if (isLastSlide) {
    slides[currentIndex].classList.remove("isActive");
    slides[0].classList.add("isActive");
  } else if (isFirstSlide) {
    slides[0].classList.remove("isActive");
    slides[slides.length - 1].classList.add("isActive");
  } else {
    slides[currentIndex].classList.remove("isActive");
    slides[currentIndex + value].classList.add("isActive");
  }
}

setInterval(() => {
  handleSlides(1);
}, 3000);
