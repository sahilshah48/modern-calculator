const display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    if (currentExpression === '0') {
        currentExpression = value;
    } else {
        currentExpression += value;
    }
    updateDisplay();
}

function appendDecimal() {
    const lastChar = currentExpression.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];

    if (currentExpression === '') {
        currentExpression = '0.';
    } else if (!operators.includes(lastChar) && !currentExpression.includes('.')) {
        currentExpression += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '0';
    updateDisplay();
}

function handleBackspace() {
    if (currentExpression.length > 1) {
        currentExpression = currentExpression.slice(0, -1);
    } else {
        currentExpression = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentExpression;
    
    // Prevent overflow by truncating
    if (display.textContent.length > 15) {
        display.textContent = 'Overflow';
        currentExpression = '0';
    }
}