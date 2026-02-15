function zoomAndOpen(originX, originY, targetPage) {
  const scene = document.getElementById("scene");

  // nastavíme směr přiblížení
  scene.style.transformOrigin = `${originX}% ${originY}%`;

  // spustíme zoom
  scene.classList.add("zoom");

  // po animaci otevřeme stránku
  setTimeout(() => {
    window.location.href = targetPage;
  }, 1500);
}

function openElektro() {
  zoomAndOpen(20, 45, "elektro.html");
}

function openNulak() {
  zoomAndOpen(50, 70, "nulak.html");
}

