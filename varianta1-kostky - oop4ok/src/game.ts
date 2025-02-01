// Importy použitých tříd a konstant
import { buttonTexts } from "./constants.js";
import { Player } from "./player.js";
import { Dice } from "./dice.js"; // Import třídy Dice

// HTML elementy použité ve hře
const playerNameElement = document.getElementById("playerName") as HTMLElement;
const nextPlayerButton = document.getElementById("nextPlayer") as HTMLButtonElement;
const trowAgainSection = document.getElementById("trowAgain") as HTMLElement;
const diceCanvas = document.getElementById("diceCanvas") as HTMLCanvasElement;
const ctx = diceCanvas.getContext("2d")!;

// Načtení hráčů ze storage
const players: Player[] = JSON.parse(localStorage.getItem("players") || "[]");
let currentPlayerIndex = 0; // Index aktuálního hráče

/**
 * Funkce pro zesvětlení barvy.
 * @param hex - Hexadecimální hodnota barvy
 * @param percent - Procento zesvětlení (0-100)
 * @returns Zesvětlená barva ve formátu RGB
 */
function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.floor((num >> 16) + (255 - (num >> 16)) * (percent / 100)));
  const g = Math.min(255, Math.floor(((num >> 8) & 0x00ff) + (255 - ((num >> 8) & 0x00ff)) * (percent / 100)));
  const b = Math.min(255, Math.floor((num & 0x0000ff) + (255 - (num & 0x0000ff)) * (percent / 100)));

  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Funkce pro ztmavení barvy.
 * @param hex - Hexadecimální hodnota barvy
 * @param percent - Procento ztmavení (0-100)
 * @returns Ztmavená barva ve formátu RGB
 */
function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, Math.floor((num >> 16) * (1 - percent / 100)));
  const g = Math.max(0, Math.floor(((num >> 8) & 0x00ff) * (1 - percent / 100)));
  const b = Math.max(0, Math.floor((num & 0x0000ff) * (1 - percent / 100)));

  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Aktualizace pozadí aktuálního hráče.
 * Zesvětlí pozadí podle barvy hráče.
 */
function updatePlayerBackground(): void {
  const currentPlayer = players[currentPlayerIndex];
  const lightenedColor = lightenColor(currentPlayer.color.background, 50);
  document.body.style.backgroundColor = lightenedColor;
}

/**
 * Aktualizace pozadí tlačítek.
 * Ztmaví tlačítka podle barvy hráče.
 */
function updateButtonBackgrounds(): void {
  const currentPlayer = players[currentPlayerIndex];
  const darkenedColor = darkenColor(currentPlayer.color.background, 20);

  nextPlayerButton.style.backgroundColor = darkenedColor;
  const rollAgainButton = trowAgainSection.querySelector("button") as HTMLButtonElement;
  if (rollAgainButton) {
    rollAgainButton.style.backgroundColor = darkenedColor;
  }
}

/**
 * Funkce pro animaci hodu kostek.
 * @param finalValue1 - Finální hodnota první kostky
 * @param finalValue2 - Finální hodnota druhé kostky
 */
function animateDiceRoll(finalValue1: number, finalValue2: number): void {
  let frame = 0; // Aktuální snímek animace
  const totalFrames = 20; // Celkový počet snímků
  const interval = 50; // Interval mezi snímky (v ms)

  const animationInterval = setInterval(() => {
    ctx.clearRect(0, 0, diceCanvas.width, diceCanvas.height);

    // Generování náhodných hodnot pro animaci
    const tempValue1 = Math.floor(Math.random() * 6) + 1;
    const tempValue2 = Math.floor(Math.random() * 6) + 1;

    // Vykreslení animace kostek
    const dice1 = new Dice(players[currentPlayerIndex].color.background, players[currentPlayerIndex].color.dots);
    dice1.draw(ctx, 20, 20, tempValue1);

    const dice2 = new Dice(players[currentPlayerIndex].color.dots, players[currentPlayerIndex].color.background);
    dice2.draw(ctx, 140, 20, tempValue2);

    frame++;

    // Konec animace - vykreslení finálních hodnot
    if (frame >= totalFrames) {
      clearInterval(animationInterval);

      ctx.clearRect(0, 0, diceCanvas.width, diceCanvas.height);

      const finalDice1 = new Dice(players[currentPlayerIndex].color.background, players[currentPlayerIndex].color.dots);
      finalDice1.draw(ctx, 20, 20, finalValue1);

      const finalDice2 = new Dice(players[currentPlayerIndex].color.dots, players[currentPlayerIndex].color.background);
      finalDice2.draw(ctx, 140, 20, finalValue2);
    }
  }, interval);
}

/**
 * Funkce pro spuštění hodu kostkami.
 */
function rollDice(): void {
  const diceValue1 = Math.floor(Math.random() * 6) + 1;
  const diceValue2 = Math.floor(Math.random() * 6) + 1;

  animateDiceRoll(diceValue1, diceValue2); // Spuštění animace
}

/**
 * Aktualizace zobrazení aktuálního hráče a nastavení tlačítek.
 */
function updatePlayerDisplay(): void {
  const currentPlayer = players[currentPlayerIndex];
  const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
  const nextPlayerName = players[nextPlayerIndex].name;

  //playerNameElement.textContent = `Zahrál: ${currentPlayer.name}`;
  playerNameElement.innerHTML = `Zahrál nebo zahrála:<br> <span class="player-name">${currentPlayer.name}</span>`;

  //nextPlayerButton.textContent = `Další hráč: ${nextPlayerName}`;
  nextPlayerButton.innerHTML = `Házej: <span class="player-name">${nextPlayerName}</span>`;

  updatePlayerBackground();
  updateButtonBackgrounds();
}

/**
 * Inicializace tlačítka "Házej znovu".
 */
function setupThrowAgainButton(): void {
  const rollAgainButton = document.createElement("button");
  rollAgainButton.textContent = buttonTexts.rollAgain;
  rollAgainButton.addEventListener("click", rollDice);

  trowAgainSection.innerHTML = ""; // Vyčištění sekce
  trowAgainSection.appendChild(rollAgainButton);
}

// Událost pro přepínání hráče
nextPlayerButton.addEventListener("click", () => {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  localStorage.setItem("currentPlayerIndex", currentPlayerIndex.toString());
  updatePlayerDisplay();
  rollDice();
});

// Inicializace hry
document.addEventListener("DOMContentLoaded", () => {
  updatePlayerDisplay();
  setupThrowAgainButton();
  rollDice();
});
