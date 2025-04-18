# Simon Says Game

## Overview
The **Simon Says Game** is a classic memory game implemented using HTML, CSS, and JavaScript. Players must replicate a sequence of colored button presses that increases in length with each level. The game tests memory and attention, providing a fun and interactive experience.

## Features
- **Interactive Gameplay**: Press any key to start, then click the colored buttons in the correct sequence.
- **Dynamic Levels**: The sequence grows longer with each level, increasing difficulty.
- **Visual Feedback**: Buttons flash to indicate the sequence and user interactions.
- **Score Tracking**: Displays the current level and the highest score achieved.
- **Game Over and Reset**: Incorrect sequences trigger a game-over state, with an option to restart by pressing any key.

## Files
- `index.html`: The main HTML file that structures the game interface.
- `style.css`: Styles the game elements, including buttons, layout, and visual effects.
- `app.js`: Contains the game logic, including sequence generation, user input handling, and game state management.

## How to Play
1. Open `index.html` in a web browser.
2. Press any key to start the game.
3. Watch the sequence of flashing buttons.
4. Click the buttons in the same order as the sequence.
5. If correct, the game advances to the next level with a longer sequence.
6. If incorrect, the game ends, displaying your score. Press any key to restart.

## Setup
1. Clone or download the project files.
2. Ensure all files (`index.html`, `style.css`, `app.js`) are in the same directory.
3. Open `index.html` in a modern web browser (e.g., Chrome, Firefox).

## Technical Details
- **HTML**: Uses semantic elements and a simple layout with a button container for the four colored buttons.
- **CSS**: Styles buttons with distinct colors, hover effects, and a flash animation for feedback. The layout is centered using flexbox.
- **JavaScript**:
  - Manages game state (e.g., `started`, `level`, `highestScore`).
  - Generates random sequences and handles user input.
  - Provides visual feedback via the `flash` class and updates the UI with level and score information.
  - Resets the game on failure, with a brief red background flash to indicate game over.

## Future Enhancements
- Add sound effects for button presses and game events.
- Implement a start/restart button instead of relying on keypress.
- Enhance accessibility with keyboard support and screen reader compatibility.
- Add a difficulty setting to adjust sequence speed or length.
