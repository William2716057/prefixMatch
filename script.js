const words = [
    { word: "-fix", correctPrefix: "pre" },
    { word: "-scribe", correctPrefix: "pre" },
    { word: "-view", correctPrefix: "re" },
    { word: "-happy", correctPrefix: "un" },
    { word: "-script", correctPrefix: "post" }
];

let currentWordIndex = 0;
let score = 0;

const wordElement = document.getElementById('word');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const balloons = document.querySelectorAll('.balloon');

function loadWord() {
    if (currentWordIndex < words.length) {
        wordElement.textContent = words[currentWordIndex].word;
        resultElement.textContent = '';
    } else {
        wordElement.textContent = 'Game Over!';
        balloons.forEach(balloon => balloon.disabled = true);
        resultElement.textContent = `Final Score: ${score}`;
    }
}

balloons.forEach(balloon => {
    balloon.addEventListener('click', () => {
        const prefix = balloon.getAttribute('data-prefix');
        const correctPrefix = words[currentWordIndex].correctPrefix;

        if (prefix === correctPrefix) {
            resultElement.textContent = 'Correct!';
            resultElement.style.color = 'green';
            score++;
        } else {
            resultElement.textContent = `Wrong! The correct prefix is '${correctPrefix}'.`;
            resultElement.style.color = 'red';
        }

        scoreElement.textContent = `Score: ${score}`;
        currentWordIndex++;
        setTimeout(loadWord, 2000);
    });
});

loadWord();