const content = document.getElementById("content");

let state = JSON.parse(localStorage.getItem("elektroState")) || {
  level: "main"
};

function save() {
  localStorage.setItem("elektroState", JSON.stringify(state));
}

function mainMenu() {
  state.level = "main";
  save();

  content.innerHTML = `
    <button class="button">Bezpečnost</button>
    <button class="button">Elektrické obvody</button>
    <button class="button">Součástky</button>
    <button class="button" id="motory">Elektrické motory</button>
  `;

  document.getElementById("motory").onclick = motorsMenu;
}

function motorsMenu() {
  state.level = "motory";
  save();

  content.innerHTML = `
    <button class="button" id="async">Asynchronní motor</button>
    <button class="button" id="sync">Synchronní motor</button>
    <button class="button back" id="back">Zpět</button>
  `;

  document.getElementById("back").onclick = mainMenu;
}

if (state.level === "motory") {
  motorsMenu();
} else {
  mainMenu();
}