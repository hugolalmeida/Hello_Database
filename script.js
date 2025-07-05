// This script adds an event listener to a button with the ID 'hello-btn'.
// get the button and add a click event listener
document.getElementById('hello-btn').addEventListener('click', function() {
    const hello = document.getElementById('hello');
    // set the text content and display the element
    hello.textContent = "Hello, World!";
    // make the element visible
    hello.style.display = 'block';
});