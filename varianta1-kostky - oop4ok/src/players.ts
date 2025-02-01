// Importy konstant
import { colors, messages } from "./constants.js";

// Načtení hráčů z localStorage
const players = JSON.parse(localStorage.getItem("players") || "[]"); // Pokud nejsou hráči, vrátí prázdné pole

// Element pro seznam hráčů
const playerList = document.getElementById("playerList");

/**
 * Zobrazení chybové zprávy, pokud nebyl nalezen element playerList.
 */
if (!playerList) {
  console.error("Element #playerList nebyl nalezen.");
} else if (players.length === 0) {
  // Pokud nejsou žádní hráči, zobrazí zprávu z konstant
  playerList.innerHTML = `<p>${messages.noPlayers}</p>`;
} else {
  /**
   * Pro každého hráče vykreslí jeho jméno a barvy v seznamu hráčů.
   */
  players.forEach((player: { name: string; color: { background: string; dots: string; label: string } }, index: number) => {
    const playerDiv = document.createElement("div"); // Vytvoří div pro hráče
    playerDiv.classList.add("player-card"); // Přidá třídu player-card
    
    playerDiv.innerHTML = `
      <p class="player-info">Hráč ${index + 1}: <strong>${player.name}</strong><br> (${player.color.label})</p>
      <div class="player-colors" style="display: flex; gap: 10px; justify-content: center;">
        <div class="color-box" style="border: 1px solid grey; background-color: ${player.color.background}; width: 50px; height: 50px; border-radius: 5px;"></div>
        <div class="color-box" style="border: 1px solid grey; background-color: ${player.color.dots}; width: 50px; height: 50px; border-radius: 5px;"></div>
      </div>
    `; // Přidá informace o hráči
    playerList.appendChild(playerDiv); // Připojí hráče do seznamu
  });
}
