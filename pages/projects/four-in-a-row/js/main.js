const playBtn = document.querySelector('.play-btn');
const playBtnTextLabel = document.querySelector('.play-btn-text');

const enterNameInput = document.querySelector('.enter-name');

const clickAudio = document.querySelector('.click-audio');

clickAudio.volume = .55;

enterNameInput.value = localStorage.getItem('username');

playBtn.addEventListener('click', () => {
    clickAudio.play();

    if (enterNameInput.value) {
        localStorage.setItem('username', enterNameInput.value);
        setInterval(() => {
            window.location.href = 'pages/game.html';
        }, 300);
    } else {
        setTimeout(() => {
            playBtnTextLabel.innerHTML = 'PLAY';
        }, 500);

        playBtnTextLabel.innerHTML = 'Enter a username';
    }
})