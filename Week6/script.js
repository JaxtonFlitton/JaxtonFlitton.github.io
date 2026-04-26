const games = ["./assets/CODWaW.jpg", "./assets/CODBO1.webp", "./assets/CODBO2.webp", "./assets/CODBO3.webp", "./assets/CODBO4.jpg"];

let currentIndex = 0;

const descs = ["The first game to introduce the zombies gamemode in a treyarch game, it featured bosses, perks, and every basic compenent we know of today! AT the end of the game, pack-a-punch - which is now a staple in zombies - was invented! A story began to brew and thus a community of players flocked. It ended early to debut the next game among the boiling hype!",
     "This was the first game after the inventor, and was designed to foster love and development of the game mode. Special fictional weapons were made and the sci-fi of it all was embraced. The story took a compelling turn and ended cinematically at the end with a map on the moon. AMong the journey, easter eggs led players to be able to actually complete maps - so now there were more ways to play!",
      "Introducing a new story in the sameuniverse, the first creator of zombies ends his carreer off with a slow start, but a strong finish. AT the time, it was not looked favorably upon, it is now seen as 'glory days', just like every other game in the series. The game finished off with a new devolper taking over, and this new developer promised good fortune in the times ahead. The story has gotten more complicated...",
       "No longer is zombies justa  game mode. Its an actual game, within a game! The zombies reached what many consider the 'peak' among all the games. Future and modern games try so hard to replicate this one for profit - but it has not yet been achieved. The game mixes many new elements, twists, turns, compelling story arcs and animation, and powerups and micro-transactiosn that may have harolded the downfall that follows.",
        "The final rendition of the series, this game was looked poorly upon all through its life for not being comparable to the previous game. However, many years later, people have finally admitted it wasnt so bad. In fact, it was still very good, and its bar was just too high. Thus, the game signlaed the end of the new developers reign and the end of the reign of the old call of duty zombies we once knew..."];

const img = document.getElementById("gameImage");
const forwardButton = document.querySelector(".forward-button button");
const backButton = document.querySelector(".backward-button button");

const summary = document.querySelector(".Brief-Summary p");

function scrollImage() {
    img.src = games[currentIndex];
    summary.textContent = descs[currentIndex];
}

forwardButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= games.length) {
        currentIndex = 0;
    }

    scrollImage();
});

backButton.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = games.length - 1;
    }

    scrollImage();
});