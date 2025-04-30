const overwindow = document.getElementById('overview');
const canvasPP = document.getElementById('canvas-privacy_policy');
const PPOpenBtn = document.getElementById('privacy_policy-open-btn');
const PPCloseBtn = document.getElementById('privacy_policy-close-btn');

function openPPCanvas() {
  overwindow.classList.add('open');
  canvasPP.classList.add('open');
}

function closePPCanvas() {
  overwindow.classList.remove('open');
  canvasPP.classList.remove('open');
}

overwindow.addEventListener('click', closePPCanvas);
PPCloseBtn.addEventListener('click', closePPCanvas);
PPOpenBtn.addEventListener('click', openPPCanvas);