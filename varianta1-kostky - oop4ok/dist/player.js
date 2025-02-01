// Třída Player reprezentuje hráče ve hře
export class Player {
    name; // Jméno hráče
    color; // Barvy hráče (pozadí a body)
    /**
     * Konstruktor pro vytvoření instance hráče.
     * @param name - Jméno hráče
     * @param color - Objekt obsahující informace o barvách hráče
     */
    constructor(name, color) {
        this.name = name; // Nastaví jméno hráče
        this.color = color; // Nastaví barvy hráče
    }
}
