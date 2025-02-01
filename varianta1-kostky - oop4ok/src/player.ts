// Třída Player reprezentuje hráče ve hře
export class Player {
  name: string; // Jméno hráče
  color: { background: string; dots: string; label: string }; // Barvy hráče (pozadí a body)

  /**
   * Konstruktor pro vytvoření instance hráče.
   * @param name - Jméno hráče
   * @param color - Objekt obsahující informace o barvách hráče
   */
  constructor(name: string, color: { background: string; dots: string; label: string }) {
    this.name = name; // Nastaví jméno hráče
    this.color = color; // Nastaví barvy hráče
  }
}
