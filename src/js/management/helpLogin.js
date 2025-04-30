const overflow = document.getElementById('overview');
const canvasHelp = document.getElementById('canvas-help');
const helpOpenBtn = document.getElementById('help-open-btn');
const helpCloseBtn = document.getElementById('help-close-btn');

function openHelpCanvas () {
  overflow.classList.add('open');
  canvasHelp.classList.add('open');
}

function closeHelpCanvas () {
  overflow.classList.remove('open');
  canvasHelp.classList.remove('open');
}

overflow.addEventListener('click', closeHelpCanvas);
helpCloseBtn.addEventListener('click', closeHelpCanvas);
helpOpenBtn.addEventListener('click', openHelpCanvas);