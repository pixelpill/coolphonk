// 🔦 Hover effect on paragraphs
document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseover", () => {
    p.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
  });
  p.addEventListener("mouseout", () => {
    p.style.backgroundColor = "transparent";
  });
});

// 🌙 Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// 📖 Scroll to chapter
function scrollToChapter(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ✨ Verse of the Day banner
const verses = [
  "In the beginning God created the heavens and the earth. — Genesis 1:1",
  "Then the Lord God formed man from the dust of the ground. — Genesis 2:7",
  "God saw everything that He had made, and behold, it was very good. — Genesis 1:31",
  "So God blessed the seventh day and sanctified it. — Genesis 2:3"
];

window.onload = () => {
  const verse = verses[Math.floor(Math.random() * verses.length)];
  const banner = document.createElement("div");
  banner.textContent = verse;
  banner.style = `
    text-align: center;
    padding: 15px;
    font-style: italic;
    font-size: 1.2em;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid #ffcc70;
  `;
  document.body.prepend(banner);
};
