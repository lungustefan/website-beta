const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
