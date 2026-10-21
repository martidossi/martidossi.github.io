// All news items, newest first. Add new items at the top.
// The about page shows the first 5; news.html shows them all.
// `text` can contain HTML (links etc.).
const NEWS = [
  {
    date: "Oct 2026",
    text: `Our poster <em>OrCaPCP: Overlapping Categories Parallel Coordinates Plots</em> (M. Dossi, S. Agarwal, M. Poddar, F. Beck, A. Chatzimparmpas) won the Audience Award Runner-up in the poster contest at <a href="https://alice-and-eve.github.io/2026/" target="_blank" rel="noopener">Alice &amp; Eve 2026</a> in Utrecht, NL 🏆`,
  },
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
    text: `Attended the ASCI PhD course <a href="https://asci.school/project/a17-visualization-and-virtual-reality/" target="_blank" rel="noopener">A17 Visualization</a> at Eindhoven University of Technology, Eindhoven, NL.`,
  },
  {
    date: "Jun 2026",
    text: `Attended <a href="https://graphichuntersshow.nl/" target="_blank" rel="noopener">&amp;MOVE</a>, a two-day event on data visualization and information design in Utrecht. My notes are in <a href="https://martinadossi.substack.com/p/june-2026-notes-from-and-move" target="_blank" rel="noopener">this newsletter issue</a> (and <a href="https://www.linkedin.com/feed/update/urn:li:activity:7472256624666058754/" target="_blank" rel="noopener">on LinkedIn</a>).`,
  },
  {
    date: "May 2026",
    text: `Gave a seminar on reactive Python notebooks with <a href="https://marimo.io/" target="_blank" rel="noopener">marimo</a> for data visualization, in the course Laboratorio di software statistici at Sapienza University of Rome, IT. See <a href="talks.html">talks</a>.`,
  },
  {
    date: "Mar 2026",
    text: `Ran a booth on AI in airport security screening at <a href="https://marie-sklodowska-curie-actions.ec.europa.eu/science-is-wonderful" target="_blank" rel="noopener">Science is Wonderful!</a>, the European Commission's science fair in Brussels, BE, with Angelos Chatzimparmpas and Niels Teunissen. Kids tried an AI object detector and compared language models in a parallel coordinates plot. I worked on its physical version, a string plot 🧵 where kids shared their opinions before and after the experience (<a href="https://www.linkedin.com/feed/update/urn:li:activity:7444068673138503681/" target="_blank" rel="noopener">post</a>).`,
  },
  {
    date: "Oct 2025",
    text: `Attended the ASCI PhD course <a href="https://asci.school/project/a2-brain-inspired-neuromorphic-computing/" target="_blank" rel="noopener">A2 Brain-Inspired Neuromorphic Computing</a> in Utrecht, NL.`,
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
    date: "Jul 2025",
    text: `Attended the <a href="https://malga.unige.it/education/schools/dvss/" target="_blank" rel="noopener">Data Visualization Summer School</a> organized by MaLGa, the Machine Learning Genoa Center, in Genova, IT (<a href="https://www.linkedin.com/feed/update/urn:li:activity:7351300131226382337/" target="_blank" rel="noopener">post</a>).`,
  },
  {
    date: "May 2025",
    text: `Started my PhD in the <a href="https://www.projects.science.uu.nl/ics-vig/" target="_blank" rel="noopener">Visualization and Graphics group</a> at Utrecht University, working on the <a href="https://vr4evr.nl/" target="_blank" rel="noopener">VR4eVR project</a>. 🥽`,
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
  {
    date: "Feb 2024",
    text: `Four of my visualizations were featured in the book <em>Glamorous Infographics</em> by Designerbooks: two of my earliest projects, on the weather in Milan and the Golden Globes for TV series, plus <a href="dataviz.html">A Matter of Time</a> (DVS SOTI challenge) and <a href="dataviz.html">Rural–urban nexus</a> (Viz for Social Good and Bridges to Prosperity) 📖 (<a href="https://www.linkedin.com/feed/update/urn:li:activity:7161815939594891264/" target="_blank" rel="noopener">post</a>).`,
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
