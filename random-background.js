function setRandomBackground() {
    const randomNumber = Math.floor(Math.random() * 20);
    const backgroundImagePath = `/assets/backgrounds/background-${randomNumber}.webp`;
    document.body.style.backgroundImage = `url("${backgroundImagePath}")`;
}

setRandomBackground();
