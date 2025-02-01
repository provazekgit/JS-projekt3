// Konstanta pro texty tlačítek, která se používají v různých částech aplikace
export const buttonTexts = {
  startGame: "Spustit hru", // Tlačítko pro zahájení hry
  nextPlayer: "Další hráč", // Tlačítko pro přepnutí na dalšího hráče
  rollAgain: "Házej znovu", // Tlačítko pro opakování hodu
  resetGame: "Restartovat hru", // Tlačítko pro restartování hry
};

// Konstanta pro systémové zprávy zobrazované hráčům
export const messages = {
  currentPlayer: "Hraje:", // Zpráva označující aktuálního hráče
  noPlayers: "Nebyl nastaven žádný hráč. Vraťte se na úvodní stránku.", // Zpráva pro případ, že nejsou definovaní hráči
};

// Barvy, které lze přiřadit jednotlivým hráčům
export const colors = [
  { background: "#FF0000", dots: "#00FF00", label: "Červená - Zelená" }, // Červená pozadí, zelené body
  { background: "#00008B", dots: "#FFFF00", label: "Tmavě modrá - Žlutá" }, // Tmavě modré pozadí, žluté body
  { background: "#246268", dots: "#FFA500", label: "ZelenoModrá - Oranžová" }, // ZelenoModré pozadí, oranžové body
  { background: "#800080", dots: "#ADFF2F", label: "Fialová - Zelenožlutá" }, // Fialové pozadí, zelenožluté body
  { background: "#8C2F5F", dots: "#FAFBA5", label: "TmavěRůžová - SvětleŽlutá" }, // TmavěRůžové pozadí, světležluté body
  { background: "#000000", dots: "#FFFFFF", label: "Černá - Bílá" }, // Černé pozadí, bílé body
];
// { background: "#00FFFF", dots: "#FFA500", label: "Světle modrá - Oranžová" }, // Světle modré pozadí, oranžové body
//{ background: "#FFC0CB", dots: "#8B4513", label: "Růžová - Hnědá" }, // Růžové pozadí, hnědé body