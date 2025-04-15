// script.js

// Function to toggle between play and pause
let isPlaying = false;
let noteIndex = 0;
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];  // Example musical notes

const playPauseBtn = document.getElementById('playPauseBtn');
const noteDisplay = document.getElementById('noteDisplay');
const currentNumber = document.getElementById('currentNumber');

// Toggle play/pause
playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
  if (isPlaying) {
    playNextNote();
  }
});

// Function to play the next note in the sequence
function playNextNote() {
  if (isPlaying) {
    noteDisplay.textContent = notes[noteIndex];
    currentNumber.textContent = `Note: ${noteIndex + 1}`;
    noteIndex = (noteIndex + 1) % notes.length;

    setTimeout(playNextNote, 1000); // Change note every 1 second
  }
}

// Jump to specific note
document.getElementById('jumpBtn').addEventListener('click', () => {
  const jumpToInput = document.getElementById('jumpToInput');
  const targetNote = parseInt(jumpToInput.value) - 1; // 1-indexed to 0-indexed
  if (targetNote >= 0 && targetNote < notes.length) {
    noteIndex = targetNote;
    noteDisplay.textContent = notes[noteIndex];
    currentNumber.textContent = `Note: ${noteIndex + 1}`;
  }
});
