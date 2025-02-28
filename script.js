//JavaScript for the counter Functionality
document.addEventListener("DOMContentLoaded", function() {
    //Initialize the count variable
    let count = 0;

    //Get references to the display to the button elements
    const counterDisplay = document.getElementById("counter-display");
    const counterButton = documents.getElementById("counter-button");

    //Add an event listner to the buttons
    counterButton.addEventListener("click", function() {
        //Increment the count variable
        count++;

        //update the display text with the new count value
        counterDisplay.textContent = `You clicked ${count} times`;
    });
});