document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const link = icon.dataset.link;
    window.location.href = link;
  });
});