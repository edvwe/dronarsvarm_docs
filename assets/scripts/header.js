document.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");

  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
