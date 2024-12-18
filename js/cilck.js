let rightarow = document.querySelector(".one_button");
clock.addEventListener("click", () => {
  history.forward();
  history.pushState({}, "", "index.html");
});
