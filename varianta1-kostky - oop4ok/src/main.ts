// Importy použitých tříd a konstant
import { Player } from "./player.js";
import { colors, buttonTexts } from "./constants.js";

// HTML elementy na stránce
const playerSetup = document.getElementById("playerSetup")!;
const startGameButton = document.getElementById("startGame")!;
const playersSelect = document.getElementById("players") as HTMLSelectElement;

// Výchozí počet hráčů
const DEFAULT_PLAYER_COUNT = 3;

/**
 * Aktualizuje sekci pro nastavení hráčů podle zvoleného počtu.
 * @param playerCount - Počet hráčů, pro které se má připravit vstupní formulář.
 */
function updatePlayerSetup(playerCount: number = DEFAULT_PLAYER_COUNT): void {
  playerSetup.innerHTML = ""; // Vymaže aktuální obsah sekce

  for (let i = 1; i <= playerCount; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.innerHTML = `
      <div class="selection"><label for="playerName${i}">Hráč ${i} - Jméno:</label><br>
      <input type="text" id="playerName${i}" placeholder="Jméno hráče ${i}" value="Hráč ${i}" required>
      <label for="playerColor${i}"><br>Barva:<br></label>
      <select id="playerColor${i}">
        ${colors.map((color, index) => `<option value="${index}" ${i - 1 === index ? "selected" : ""}>${color.label}</option>`).join("")}
      </select></div>
    `;
    playerSetup.appendChild(playerDiv); // Přidá hráče do sekce
  }
}

/**
 * Ukládá data hráčů a přesměrovává na stránku se seznamem hráčů.
 */
function startGame(): void {
  const playerCount = parseInt(playersSelect.value, 10); // Získá zvolený počet hráčů
  const players: Player[] = [];

  for (let i = 1; i <= playerCount; i++) {
    const nameInput = document.getElementById(`playerName${i}`) as HTMLInputElement;
    const colorSelect = document.getElementById(`playerColor${i}`) as HTMLSelectElement;

    const name = nameInput.value || `Hráč ${i}`; // Pokud není jméno vyplněné, použije default
    const colorIndex = parseInt(colorSelect.value, 10);
    const color = colors[colorIndex]; // Barvy jsou definované v constants.js

    players.push(new Player(name, color)); // Vytvoří nového hráče a přidá do pole
  }

  localStorage.setItem("players", JSON.stringify(players)); // Uloží hráče do localStorage
  window.location.href = "players.html"; // Přesměrování na další stránku
}

// Události pro inicializaci stránky
/**
 * Nastavuje výchozí hodnoty při načtení stránky.
 */
document.addEventListener("DOMContentLoaded", () => {
  playersSelect.value = DEFAULT_PLAYER_COUNT.toString(); // Nastaví default počet hráčů
  updatePlayerSetup(DEFAULT_PLAYER_COUNT); // Vytvoří výchozí formuláře pro hráče
});

/**
 * Změní formuláře hráčů při změně počtu hráčů v dropdownu.
 */
playersSelect.addEventListener("change", () => {
  const playerCount = parseInt(playersSelect.value, 10);
  updatePlayerSetup(playerCount); // Aktualizuje formuláře podle počtu hráčů
});

/**
 * Spustí hru při kliknutí na tlačítko "Start".
 */
startGameButton.addEventListener("click", startGame);
