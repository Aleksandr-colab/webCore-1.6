import '../scss/style.scss';
import './sliders.js';

const toggleButton = document.querySelector(".brand-block__show-more-button");
let isHidden = true;
const element = document.getElementById("element"); // Замените 'yourElementId' на идентификатор вашего элемента
const height = element.offsetHeight;
const brandShowMore = document.querySelector(".brand-block__show-more-button");

brandShowMore.addEventListener("click", () => {
  changeCSS();
});

function changeCSS() {
  if (height === 160) {
    if (window.innerWidth > 1200) {
      const mediaQuery = window.matchMedia("(min-width: 1120px)");
      const swiperSlides = document.querySelectorAll(".swiper-slide-brand");
      if (isHidden) {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style.display = "flex";
            toggleButton.innerHTML = "Скрыть";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(180deg)"
            );
            isHidden = false;
          }
        }
      } else {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style =
              ".swiper-slide-brand:nth-last-child(-n + 3) { display: none;  }";
            toggleButton.innerHTML = "Показать все";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(0deg)"
            );
            isHidden = true;
          }
        }
      }
    } else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      const swiperSlides = document.querySelectorAll(".swiper-slide-brand");
      if (isHidden) {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style.display = "flex";
            toggleButton.innerHTML = "Скрыть";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(180deg)"
            );
            isHidden = false;
          }
        }
      } else {
        if (mediaQuery.matches) {
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].style =
              ".swiper-slide-brand:nth-last-child(-n + 3) { display: none;  }";
            toggleButton.innerHTML = "Показать все";
            toggleButton.style.setProperty(
              "--transform-rotate",
              "rotate(0deg)"
            );
            isHidden = true;
          }
        }
      }
    } else {}
  } else {}
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");

  // Sidebar + Header
  const sidebarOpen = document.querySelector(".js-sidebar-open");
  const sidebarClose = document.querySelector(".js-sidebar-close");
  const sidebar = document.querySelector(".side-navigation");
  const sidebarContent = document.querySelector(".side-navigation__content");

  sidebarOpen.addEventListener("click", (evt) => {
    sidebar.classList.add("side-navigation--active");
    page.classList.add("page--no-scroll");
    evt.stopPropagation();
  });

  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("side-navigation--active");
  });

  sidebarContent.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });

  page.addEventListener("click", () => {
    sidebar.classList.remove("side-navigation--active");
  });

  // Popup
  const buttonPopupFeedback = document.querySelector(".js-popup-feedback");
  const buttonPopupRequestСall = document.querySelector(
    ".js-popup-request-call"
  );

  const popupFeedback = document.querySelector("#popup-feedback");
  const popupPopupRequestСall = document.querySelector("#popup-request-call");

  const popupFeedbackContent = popupFeedback.querySelector(".popup__content");
  const popupRequestСallContent =
    popupPopupRequestСall.querySelector(".popup__content");

  const popupClose = document.querySelectorAll(".js-popup-close");

  buttonPopupFeedback.addEventListener("click", (evt) => {
    popupFeedback.classList.add("popup--active");
    page.classList.add("page--no-scroll");
    evt.stopPropagation();
  });
  buttonPopupRequestСall.addEventListener("click", (evt) => {
    popupPopupRequestСall.classList.add("popup--active");
    page.classList.add("page--no-scroll");
    evt.stopPropagation();
  });

  popupFeedbackContent.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
  popupRequestСallContent.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });

  popupClose.forEach((button) => {
    button.addEventListener("click", () => {
      popupFeedback.classList.remove("popup--active");
      popupPopupRequestСall.classList.remove("popup--active");
      page.classList.remove("page--no-scroll");
    });
  });

  page.addEventListener("click", () => {
    popupFeedback.classList.remove("popup--active");
    popupPopupRequestСall.classList.remove("popup--active");
    page.classList.remove("page--no-scroll");
  });

  // Secondary Functions
  function toggleMoreInfoText(moreInfoButton, textClose, textOpen) {
    if (moreInfoButton.textContent === textClose) {
      moreInfoButton.textContent = textOpen;
    } else {
      moreInfoButton.textContent = textClose;
    }
  }
});
document.addEventListener('DOMContentLoaded', () => {
  
  const moreInfoButton = document.querySelector('.equipment-repair__more-info');
  
 
  const slides = document.querySelectorAll('.equipment-repair-slider__slide');

  
  if (!moreInfoButton || !slides.length) {
      console.error('Кнопка или слайды не найдены.');
      return;
  }

  
  let isHidden = true;


  moreInfoButton.addEventListener('click', () => {
      toggleSlidesVisibility();
  });

  function toggleSlidesVisibility() {
      
      const visibleSlidesCount = 4;

      
      slides.forEach((slide, index) => {
          if (isHidden) {
             
              slide.style.display = 'block'; 
          } else {
             
              slide.style.display = index < visibleSlidesCount ? 'block' : 'none';
          }
      });

      
      moreInfoButton.textContent = isHidden ? 'Скрыть' : 'Показать все';

     
      isHidden = !isHidden;
  }
});


  


document.addEventListener('DOMContentLoaded', () => {
  // Находим кнопку "Читать далее"
  const showMoreButton = document.querySelector('.content__button-show-more');

  // Находим элементы текста, которые нужно скрыть/показать
  const hiddenTextElements = document.querySelectorAll('.content__text--show-hide, .content__text-element--show-hide');

  // Проверяем, что кнопка и текстовые элементы существуют
  if (!showMoreButton || !hiddenTextElements.length) {
      console.error('Кнопка или текстовые элементы не найдены.');
      return;
  }

  // Переменная для отслеживания состояния (показано/скрыто)
  let isHidden = true;

  // Добавляем обработчик события на кнопку
  showMoreButton.addEventListener('click', () => {
      toggleTextVisibility();
  });

  function toggleTextVisibility() {
      // Перебираем все текстовые элементы
      hiddenTextElements.forEach((element) => {
          if (isHidden) {
              // Если текст скрыт, показываем его
              element.style.display = 'block';
          } else {
              // Если текст показан, скрываем его
              element.style.display = 'none';
          }
      });

      // Обновляем текст кнопки
      showMoreButton.textContent = isHidden ? 'Скрыть' : 'Читать далее';

      // Добавляем/удаляем класс для поворота иконки
      showMoreButton.classList.toggle('rotated');

      // Меняем состояние
      isHidden = !isHidden;
  }
});
