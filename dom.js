const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function() {
    message.textContent = "The text has been changed!";
});


const styleBox = document.getElementById("styleBox");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");

colorBtn.addEventListener("click", function() {
    styleBox.style.backgroundColor = "#ffc8e8";
});

fontBtn.addEventListener("click", function() {
    styleBox.style.fontSize = "24px";
});



const itemList = document.getElementById("itemList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let itemCount = 2;

addBtn.addEventListener("click", function() {
    itemCount++;

    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;

    itemList.appendChild(newItem);
});

removeBtn.addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    }
});
