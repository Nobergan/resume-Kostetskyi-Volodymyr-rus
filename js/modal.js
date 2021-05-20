const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  backdrop: document.querySelector(".backdrop"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", handleBackdropClick);
document.addEventListener("keydown", handleCloseModalByEscape);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

// Закрытие модального окна по клику на backdrop.

function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    toggleModal();
  }
}

// Закрытие модального окна по нажатию клавиши ESC.

function handleCloseModalByEscape(event) {
  if (event.code === "Escape") {
    toggleModal();
  }
}
