const screens = [...document.querySelectorAll(".screen")];
const audio = document.getElementById("birthday-audio");
const video = document.getElementById("birthday-video");

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.toggle("active", screen.id === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Stop the video when leaving its screen so it doesn't keep playing in the background.
  if (id !== "screen-gift") {
    video.pause();
  }
}

document.getElementById("yes-first").addEventListener("click", () => showScreen("screen-photo"));
document.getElementById("no-first").addEventListener("click", () => showScreen("screen-bunny"));
document.getElementById("yes-bunny").addEventListener("click", () => showScreen("screen-photo"));
document.getElementById("to-letter").addEventListener("click", () => showScreen("screen-letter"));
document.getElementById("to-gift").addEventListener("click", () => showScreen("screen-gift"));
document.getElementById("to-final").addEventListener("click", () => {
  showScreen("screen-final");
});
document.getElementById("replay").addEventListener("click", () => {
  audio.pause();
  video.pause();
  showScreen("screen-welcome");
});

// Optional: update this title in index.html to match your song.
audio.addEventListener("play", () => {
  document.getElementById("music-icon").textContent = "♫ ♪ ♫";
});
audio.addEventListener("pause", () => {
  document.getElementById("music-icon").textContent = "♫";
});
