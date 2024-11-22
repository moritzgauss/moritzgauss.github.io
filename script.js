// Liste von Songtext-Ausschnitten
const lyrics = [
    "I want it that way",
    "Hit me baby one more time",
    "Hello from the other side",
    "We will rock you",
    "Cause you're amazing, just the way you are"
];

const lyricsElement = document.getElementById("lyrics");

let index = 0;

// Funktion, um den Text alle 1,5 Sekunden zu ändern
function updateLyrics() {
    lyricsElement.textContent = lyrics[index];
    index = (index + 1) % lyrics.length; // Schleife durch die Texte
}

// Initialisiere den Textwechsel
setInterval(updateLyrics, 1500);

setTimeout(() => {
    window.location.href = "https://moritzgauss.com"; // Zielseite hier einfügen
  }, 5000);
