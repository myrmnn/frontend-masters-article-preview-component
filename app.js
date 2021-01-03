const shareDiv = document.querySelector(".share");
const btn = document.querySelectorAll("button");

btn.forEach((el) =>
  el.addEventListener("click", () => {
    shareDiv.classList.toggle("active");
  })
);
