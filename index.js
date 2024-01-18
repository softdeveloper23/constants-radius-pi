// Const = a variable that cannot be reassigned

const PI = 3.141593;
let radius;
let circumference;

// Function to calculate the circumference of a circle
document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = parseFloat(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").innerHTML = `The circumference is ${circumference}cm`
}


