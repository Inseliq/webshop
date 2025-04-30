const display = document.getElementById('display');
let current = '';

// Ввод цифр и точки
document.querySelectorAll('[data-num]').forEach(btn => {
  btn.addEventListener('click', () => {
    current += btn.getAttribute('data-num');
    display.value = current;
  });
});

// Операции +, -, *, /
document.querySelectorAll('.operation').forEach(btn => {
  btn.addEventListener('click', () => {
    const op = btn.getAttribute('data-op');
    if (current === '' && op === '-') {
      current = '-';
    } else if (current !== '' && !/[+\-*/]$/.test(current)) {
      current += op;
    }
    display.value = current;
  });
});

// Сброс всего выражения
document.getElementById('clear').addEventListener('click', () => {
  current = '';
  display.value = '';
});

// Удаление одного символа
document.getElementById('clear-element').addEventListener('click', () => {
  current = current.slice(0, -1);
  display.value = current;
});

// Обработчик %: просто добавляем символ процента
document.getElementById('percent').addEventListener('click', () => {
  if (current !== '' && /[0-9]$/.test(current)) {
    current += '%';
    display.value = current;
  }
});

// Вычисление результата
document.getElementById('equals').addEventListener('click', () => {
  try {
    let expr = current;
    // Логика процента: A op B% => A op (A * B/100)
    const pctMatch = expr.match(/(.+?)([+\-*/])([0-9.]+)%$/);
    if (pctMatch) {
      const left = parseFloat(pctMatch[1]);
      const op = pctMatch[2];
      const right = parseFloat(pctMatch[3]);
      const pctValue = left * right / 100;
      expr = `${pctMatch[1]}${op}${pctValue}`;
    }
    const result = eval(expr);
    display.value = result;
    current = String(result);
  } catch (e) {
    display.value = 'Ошибка';
    current = '';
  }
});