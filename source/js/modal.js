var menuLink = document.querySelector(".main-nav__toggle--open");
var menulModal = document.querySelector(".modal__menu");
var close = modalMenu.querySelector(".main-nav__toggle--close");

menuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  menulModal.classList.add("modal__show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menulModal.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (menulModal.classList.contains("modal__show")) {
      menulModal.classList.remove("modal__show");
    }
  }
});

var sizeLink = document.querySelector(".button__open-size-form");
var sizeModal = document.querySelector(".modal__size-form");

sizeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  sizeModal.classList.add("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (sizeModal.classList.contains("modal__show")) {
      sizeModal.classList.remove("modal__show");
    }
  }
});
