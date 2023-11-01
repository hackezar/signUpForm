button = document.querySelector("#submit");

button.addEventListener('click', () => {
    if ( phone.value != `^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$)` {
        alert("Please enter phone number as defined: 123-456-7890, (123) 456-7890, 123 456 7890, 123.456.7890, +91 (123) 456-7890");
    }
})