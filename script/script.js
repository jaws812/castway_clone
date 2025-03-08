let scrollButton = document.querySelector(".scroll");

window.onscroll = function () {
  if (window.scrollY > 900) {
    scrollButton.classList.remove("visually-hidden");
  } else {
    scrollButton.classList.add("visually-hidden");
  }
};

scrollButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
