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

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// ✅ Add Keyboard Support
document.addEventListener("keydown", function(event) {
    const key = event.key; // Get pressed key

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key); // Append numbers & operators
    } else if (key === "Enter") {
        calculate(); // Press Enter to calculate
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1); // Delete last character
    } else if (key === "Escape") {
        clearDisplay(); // Press Esc to clear display
    }
});


//vfigfoijfoivfoiv

//erpofgjerogfjr