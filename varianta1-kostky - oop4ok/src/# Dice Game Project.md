# Dice Game Project

## 📜 Description
This is an interactive web-based dice game inspired by "The Settlers of Catan." The application simplifies game management by allowing users to:
- Select the number of players and customize their colors.
- Simulate dice rolls with animations.
- Automatically track turns and highlight the current player.

The project is designed as a learning experience and demonstrates the use of TypeScript, HTML5, and modern JavaScript features.

---

## 🚀 How to Run
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd dice-game
   ```
3. Install dependencies (if any, e.g., TypeScript):
   ```bash
   npm install
   ```
4. Compile TypeScript files:
   ```bash
   npx tsc
   ```
5. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

---

## 🛠️ Technologies Used
- **TypeScript**: For type-safe and maintainable code.
- **HTML5**: For structuring the application.
- **CSS3**: For styling the application.
- **LocalStorage**: For persisting player data.

---

## 🌟 Features
- Select up to 6 players and assign custom colors.
- Animated dice rolls with unique designs for each player.
- Dynamic turn tracking with player-specific backgrounds and button colors.
- Modular and reusable codebase with clear documentation.

---

## 📂 Project Structure
```plaintext
src/
├── constants.ts       # Static texts and color options
├── dice.ts            # Class to render dice visuals
├── game.ts            # Game logic and dice roll animations
├── main.ts            # Player setup and game initialization
├── player.ts          # Player class definition
├── players.ts         # Rendering player list

public/
├── index.html         # Game setup interface
├── players.html       # Displays list of players
├── game.html          # Dice rolling interface
├── info.html          # Game instructions

styles/
├── style.css         # Styling for the application
├── menu-style.css    # Styling for menu the application
├── script.css        # Script for menu the application
```

---

## ✨ Code Example
Here's an example of the dice drawing logic from `dice.ts`:
```typescript
export class Dice {
  background: string; // Dice background color
  dots: string;       // Dice dots color

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

## 🧑‍💻 Author
**Karel Provázek**

Feel free to contact me via email at [provazek@24s.cz](mailto:provazek@24s.cz) or connect with me on Discord: `provazek24s.cz_84357`.

---

## 📜 License
This project is licensed under the MIT License. See the `LICENSE` file for details.