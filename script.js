// Append clicked button value to the display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete last character
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    let display = document.getElementById('display').value;
    
    // Replace symbols for actual operators
    display = display.replace('×', '*').replace('÷', '/');
    
    try {
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
