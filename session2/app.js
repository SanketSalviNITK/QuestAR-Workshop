document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const quitBtn = document.getElementById('quit-btn');
    const splashScreen = document.getElementById('splash-screen');
    const gameUI = document.getElementById('game-ui');

    // Start Game Function
    const startGame = () => {
        splashScreen.classList.add('hidden');
        gameUI.classList.remove('hidden');
        console.log("Game Started!");
    };

    // Quit Game Function
    const quitGame = () => {
        gameUI.classList.add('hidden');
        splashScreen.classList.remove('hidden');
        console.log("Game Reset.");
    };

    // Event Listeners
    startBtn.addEventListener('click', startGame);
    quitBtn.addEventListener('click', quitGame);
});
