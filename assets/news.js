// All news items, newest first. Add new items at the top.
// The about page shows the first 5; news.html shows them all.
// `text` can contain HTML (links etc.).
const NEWS = [
  {
    date: "Oct 2026",
    text: `Launched my new personal website! 🎉`,
  },
  {
    date: "Sep 2026",
    text: `Volunteered at <a href="https://www.linkedin.com/feed/update/urn:li:activity:7505635629892907008/" target="_blank" rel="noopener">PyData Amsterdam 2026</a>! 🐍`,
  },
  {
    date: "Jun 2026",
    text: `Attended <a href="https://graphichuntersshow.nl/" target="_blank" rel="noopener">&amp;MOVE</a>, a two-day event on data visualization and information design in Utrecht. My notes are in <a href="https://martinadossi.substack.com/p/june-2026-notes-from-and-move" target="_blank" rel="noopener">this newsletter issue</a> (and <a href="https://www.linkedin.com/feed/update/urn:li:activity:7472256624666058754/" target="_blank" rel="noopener">on LinkedIn</a>).`,
  },
  {
    date: "Sep 2025",
    text: `Presented <a href="https://ppw.kuleuven.be/xrneglect/visual-analytics-for-explainable-visual-rehabilitation" target="_blank" rel="noopener">Visual Analytics for Explainable Visual Rehabilitation</a>, our work in the VR4eVR project, at the <a href="https://ppw.kuleuven.be/xrneglect/programme" target="_blank" rel="noopener">neuroXRehab COST Action meeting</a> in Leuven, BE. See <a href="talks.html">talks</a>.`,
  },
  {
    date: "Sep 2025",
    text: `Volunteered at <a href="https://www.linkedin.com/feed/update/urn:li:activity:7378100029049188352/" target="_blank" rel="noopener">PyData Amsterdam 2025</a>.`,
  },
  {
    date: "May 2025",
    text: `Started my PhD in the <a href="https://www.projects.science.uu.nl/ics-vig/" target="_blank" rel="noopener">Visualization and Graphics group</a> at Utrecht University, working on the <a href="https://vr4evr.nl/" target="_blank" rel="noopener">VR4eVR project</a>.`,
  },
  {
    date: "2024",
    text: `<a href="dataviz.html">Beyond the Score</a>, made with Emanuele Pizzuti, won <a href="https://www.informationisbeautifulawards.com/showcase/7422-beyond-the-score-wynton-marsalis-musical-legacy-visualized" target="_blank" rel="noopener">Bronze at the Information is Beautiful Awards</a> in the Arts, Entertainment &amp; Culture category 🥉`,
  },
  {
    date: "2024",
    text: `Joined the jury of the <a href="https://data-2-speak.com/award#51" target="_blank" rel="noopener">Make Your Data Speak 2024 Awards</a>.`,
  },
  {
    date: "Apr 2024",
    text: `Started co-teaching Descriptive Statistics and Data Visualization in the Master <a href="https://uel.unipd.it/master-e-corsi/mcs-comunicazione-delle-scienze/" target="_blank" rel="noopener">Comunicazione delle Scienze</a> at the University of Padova. See <a href="talks.html">teaching</a>.`,
  },
];

// Fills a <table data-news="N"> with the N newest items, or all items if data-news="all".
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("table[data-news]").forEach((table) => {
    const limit = table.dataset.news === "all" ? NEWS.length : Number(table.dataset.news);
    table.innerHTML = NEWS.slice(0, limit)
      .map((item) => `<tr><th>${item.date}</th><td>${item.text}</td></tr>`)
      .join("");
  });
});
