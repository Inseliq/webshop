  const overview = document.getElementById('overview');
  const canvasFogot = document.getElementById('canvas-fogot');
  const emailInput = document.getElementById('email-fgt');
  const codeInput = document.getElementById('code-verify');
  const fogotButton = document.querySelector('button[data-name="fgt-pass"]');
  const fgtOpenBtn = document.getElementById('fgt-open-btn');
  const fgtCloseBtn = document.getElementById('fgt-close-btn');

  function resetForm() {
    fogotButton.textContent = 'Отправить';
    fogotButton.disabled = true;
    emailInput.value = '';
    emailInput.readOnly = false;
    codeInput.value = '';
    codeInput.style.display = 'none';
    codeInput.removeEventListener('input', onCodeInput);
  }

  fgtOpenBtn.addEventListener('click', () => {
    resetForm();
    overview.classList.add('open');
    canvasFogot.classList.add('open');
  });

  fgtCloseBtn.addEventListener('click', closeCanvas);
  overview.addEventListener('click', closeCanvas);
  function closeCanvas() {
    overview.classList.remove('open');
    canvasFogot.classList.remove('open');
  }

  emailInput.addEventListener('input', () => {
    fogotButton.disabled = emailInput.value.trim() === '';
  });

  document.getElementById('fogot-password').addEventListener('submit', function (event) {
    event.preventDefault();
    if (fogotButton.textContent === 'Отправить') {
      fogotButton.textContent = 'Сбросить пароль';
      fogotButton.disabled = true;
      emailInput.readOnly = true;
      codeInput.style.display = 'block';
      codeInput.focus();
      codeInput.addEventListener('input', onCodeInput);
    } else {
      window.location.href = '../profile.html';
    }
  });

  function onCodeInput() {
    codeInput.value = codeInput.value.replace(/\D/g, '').slice(0, 6);
    fogotButton.disabled = codeInput.value.length !== 6;
  }