// Liste von Songtext-Ausschnitten
const lyrics = [
    "The stars gonna fall every night",
    "I see the stranger look in your eyes",
    "I know that we've only just met",
    "But I don't wanna see you go"
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
  }, 7000);
