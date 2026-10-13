const display = document.getElementById('display');

// Agregar número a la pantalla
function appendNumber(number) {
  if (display.value === '0' && number !== '.') {
    display.value = number;
  } else {
    display.value += number;
  }
}

// Agregar operador
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else if (display.value !== '') {
    display.value += operator;
  }
}

// Limpiar la pantalla
function clearDisplay() {
  display.value = '';
}

// Calcular resultado de las 4 operaciones básicas
function calculateResult() {
  try {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = 'Error';
    setTimeout(() => clearDisplay(), 1500);
  }
}

// Soporte para entrada desde el teclado
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendOperator(key);
  } else if (key === 'Enter' || key === '=') {
    calculateResult();
  } else if (key === 'Escape' || key === 'Backspace') {
    clearDisplay();
  }
});
