// Třída reprezentující jednu kostku
export class Dice {
  background: string; // Barva pozadí kostky
  dots: string; // Barva bodů na kostce

  /**
   * Konstruktor pro vytvoření nové kostky.
   * @param background - Barva pozadí kostky
   * @param dots - Barva bodů na kostce
   */
  constructor(background: string, dots: string) {
    this.background = background;
    this.dots = dots;
  }

  /**
   * Metoda pro vykreslení kostky na canvas.
   * @param ctx - Kontext canvasu
   * @param x - X-souřadnice levého horního rohu kostky
   * @param y - Y-souřadnice levého horního rohu kostky
   * @param value - Hodnota kostky (1–6)
   */
  draw(ctx: CanvasRenderingContext2D, x: number, y: number, value: number): void {
    // Vykreslení čtverce pro kostku
    ctx.fillStyle = this.background;
    ctx.fillRect(x, y, 100, 100);

    // Nastavení barvy bodů
    ctx.fillStyle = this.dots;

    // Definice pozic bodů pro jednotlivé hodnoty
    const positions = [
      [50, 50], // 1 bod
      [30, 30, 70, 70], // 2 body
      [30, 30, 50, 50, 70, 70], // 3 body
      [30, 30, 30, 70, 70, 30, 70, 70], // 4 body
      [30, 30, 50, 50, 70, 30, 30, 70, 70, 70], // 5 bodů
      [30, 30, 30, 50, 30, 70, 70, 30, 70, 50, 70, 70], // 6 bodů
    ];

    // Vykreslení bodů na základě pozic
    const pos = positions[value - 1];
    for (let i = 0; i < pos.length; i += 2) {
      ctx.beginPath();
      ctx.arc(x + pos[i], y + pos[i + 1], 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

/**
 * Vytvoření tlačítka "Házej znovu".
 * @returns HTML element tlačítka
 */
export function createRollAgainButton(): HTMLButtonElement {
  const button = document.createElement("button");
  button.textContent = "Házej znovu";
  button.id = "rollAgainButton";
  return button;
}

/**
 * Aktualizuje obsah tlačítka "Další hráč".
 * @param button - HTML tlačítko
 * @param playerName - Jméno dalšího hráče
 * @param playerIndex - Index dalšího hráče
 */
export function updateNextPlayerButton(button: HTMLButtonElement, playerName: string, playerIndex: number): void {
  button.textContent = `Další hráč: ${playerName} (${playerIndex})`;
}
