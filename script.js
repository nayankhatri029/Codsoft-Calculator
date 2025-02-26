// CALCULATOR PROGRAM

const display = document.getElementById("display");

// Function to append values to display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}
