# TicTacToe

> A browser-based PvP implementation of the classic Tic-Tac-Toe game.

A simple and interactive web version of Tic-Tac-Toe where two players take turns marking X and O on a 3×3 grid. The game handles turns, detects wins across all valid patterns, identifies draws, and provides options to reset or start a new match.

---

## 🎮 Features
- Two-player turn-based gameplay  
- Real-time win detection using predefined board patterns  
- Draw detection when all cells are filled  
- Reset and New Game controls  
- Clean UI with responsive styling

---

## 🛠️ Tech Stack
- **HTML** – Page structure  
- **CSS** – Styling and layout  
- **JavaScript** – Game logic and interactions  

---

## 📁 Project Structure

```
TicTacToe/
│── index.html # Main UI
│── style.css # Game styling
│── script.js # Game logic
│── README.md
```

---

## 📌 How It Works
- The game initializes a 3×3 board of clickable boxes.  
- Players alternate turns, placing **X** and **O**.  
- Every turn triggers a check against predefined **winning patterns** (rows, columns, diagonals).  
- If three matching symbols align, the winner is displayed and further input is disabled.  
- If all boxes are filled without a match, the game declares a **draw**.  
- **Reset** and **New Game** buttons re-enable the board and clear the UI.


