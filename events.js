const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "#ff91c8";
    mouseBox.textContent = "Mouse is over the box!";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "#dcd6ff";
    mouseBox.textContent = "Hover over me!";
});




const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

textInput.addEventListener("keyup", function() {
    output.textContent = textInput.value;
});
