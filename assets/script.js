// Theme: honour a saved choice, otherwise follow the system setting.
(function () {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");
})();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Abs / Bib toggles: opening one closes the other within the same publication.
  document.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pub = btn.closest(".pub-body");
      const target = pub.querySelector("." + btn.dataset.toggle);
      const wasHidden = target.classList.contains("hidden");
      pub.querySelectorAll(".abstract-text, .bibtex-text").forEach((el) => el.classList.add("hidden"));
      if (wasHidden) target.classList.remove("hidden");
    });
  });

  // Click a publication preview to zoom it.
  document.querySelectorAll(".preview").forEach((img) => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "zoom-overlay";
      overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });

  // Clicking the profile photo gives it a small wobble.
  const profile = document.querySelector(".profile");
  if (profile) {
    profile.addEventListener("click", () => {
      profile.classList.remove("nudge");
      void profile.offsetWidth; // restart the animation on every click
      profile.classList.add("nudge");
    });
  }

  // "Data point" cursor: a dot in the theme colour that grows over links,
  // like a point in a scatter plot on hover. Only for mouse/trackpad users.
  if (window.matchMedia("(pointer: fine)").matches) {
    const dot = document.createElement("div");
    dot.id = "cursor-dot";
    document.body.appendChild(dot);
    document.documentElement.classList.add("has-custom-cursor");

    document.addEventListener("mousemove", (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      dot.classList.add("visible");
      dot.classList.toggle("hovering", !!e.target.closest("a, button, .preview, .profile"));
    });
    document.documentElement.addEventListener("mouseleave", () => dot.classList.remove("visible"));
    document.addEventListener("mousedown", () => dot.classList.add("pressed"));
    document.addEventListener("mouseup", () => dot.classList.remove("pressed"));
  }

  // cv: keep the length of current roles up to date, counting both end months like LinkedIn
  document.querySelectorAll("[data-since]").forEach((el) => {
    const [y, m] = el.dataset.since.split("-").map(Number);
    const now = new Date();
    const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m) + 1;
    const yrs = Math.floor(months / 12), mos = months % 12;
    const parts = [];
    if (yrs) parts.push(yrs + (yrs === 1 ? " yr" : " yrs"));
    if (mos) parts.push(mos + (mos === 1 ? " mo" : " mos"));
    el.textContent = parts.join(" ");
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
