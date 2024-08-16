function expandPanel(panelIndex) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
  const panel = document.getElementById(`panel-${panelIndex}`);
  panel.classList.add('active');
}