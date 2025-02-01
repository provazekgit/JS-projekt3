# Projekt Hra s kostkami

## 📜 Popis
Tento projekt představuje interaktivní webovou hru s kostkami inspirovanou "Osadníky z Katanu". Aplikace zjednodušuje správu hry a umožňuje:
- Vybrat počet hráčů a přizpůsobit jejich barvy.
- Simulovat hody kostkami s animacemi.
- Automaticky sledovat tahy a zvýraznit aktuálního hráče.

Projekt byl vytvořen jako učební příklad a demonstruje použití TypeScriptu, HTML5 a moderních funkcí JavaScriptu.

---

## 🚀 Jak spustit
1. Naklonujte repozitář:
   ```bash
   git clone <url_repozitare>
   ```
2. Přejděte do adresáře projektu:
   ```bash
   cd dice-game
   ```
3. Nainstalujte závislosti (pokud jsou potřeba, např. TypeScript):
   ```bash
   npm install
   ```
4. Zkompilujte TypeScriptové soubory:
   ```bash
   npx tsc
   ```
5. Otevřete soubor `index.html` v prohlížeči:
   ```bash
   open index.html
   ```

---

## 🛠️ Použité technologie
- **TypeScript**: Pro bezpečný a snadno udržovatelný kód.
- **HTML5**: Pro strukturování aplikace.
- **CSS3**: Pro stylování aplikace.
- **LocalStorage**: Pro uchování dat o hráčích.

---

## 🌟 Funkce
- Výběr až 6 hráčů a přiřazení vlastních barev.
- Animované hody kostkami s unikátními designy pro každého hráče.
- Dynamické sledování tahů s barevným pozadím a tlačítky.
- Modulární a znovupoužitelný kód s jasnou dokumentací.

---

## 📂 Struktura projektu
```plaintext
src/
├── constants.ts       # Statické texty a barevné možnosti
├── dice.ts            # Třída pro vykreslování kostek
├── game.ts            # Logika hry a animace hodů
├── main.ts            # Nastavení hráčů a inicializace hry
├── player.ts          # Definice třídy hráče
├── players.ts         # Vykreslení seznamu hráčů

public/
├── index.html         # Rozhraní pro nastavení hry
├── players.html       # Zobrazení seznamu hráčů
├── game.html          # Rozhraní pro hody kostkami
├── info.html          # Instrukce ke hře

styles/
styles/
├── style.css         # Stylování aplikace
├── menu-style.css    # Stylování mobilního menu aplikace
├── script.css        # Script mobilního menu aplikace
```

---

## ✨ Ukázka kódu
Ukázka logiky vykreslování kostek ze souboru `dice.ts`:
```typescript
export class Dice {
  background: string; // Barva pozadí kostky
  dots: string;       // Barva bodů na kostce

  constructor(background: string, dots: string) {
    this.background = background;
    this.dots = dots;
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number, value: number): void {
    ctx.fillStyle = this.background;
    ctx.fillRect(x, y, 100, 100);
    ctx.fillStyle = this.dots;

    const positions = [
      [50, 50],
      [30, 30, 70, 70],
      [30, 30, 50, 50, 70, 70],
    ];

    positions[value - 1].forEach((pos, i) => {
      if (i % 2 === 0) {
        ctx.beginPath();
        ctx.arc(x + pos, y + positions[value - 1][i + 1], 10, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }
}
```

---

## 🧑‍💻 Autor
**Karel Provázek**

Neváhejte mě kontaktovat na emailu [provazek@24s.cz](mailto:provazek@24s.cz) nebo se spojte na Discordu: `provazek24s.cz_84357`.

---

## 📜 Licence
Tento projekt je licencován pod MIT licencí. Více informací naleznete v souboru `LICENSE`.

