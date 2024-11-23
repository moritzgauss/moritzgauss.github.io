// Liste von Songtext-Ausschnitten
const lyrics = [
    "Carry on, like flights,",
    "I just carry on",
    "With this pain inside of my chest",
    "Got no choice but",
    "To carry on"
];

const lyricsElement = document.getElementById("lyrics");

let index = 0;

// Funktion, um den Text alle 1,5 Sekunden zu ändern
function updateLyrics() {
    lyricsElement.textContent = lyrics[index];
    index = (index + 1) % lyrics.length; // Schleife durch die Texte
}

// Initialisiere den Textwechsel
setInterval(updateLyrics, 2000);

setTimeout(() => {
    window.location.href = "https://moritzgauss.com"; // Zielseite hier einfügen
  }, 10000);
