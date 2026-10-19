const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operation) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers";
        return;
    }

    const a = Number(num1.value);
    const b = Number(num2.value);

    let answer;

    if (operation === "add") {
        answer = a + b;
    } else if (operation === "subtract") {
        answer = a - b;
    } else if (operation === "multiply") {
        answer = a * b;
    } else if (operation === "divide") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero!";
            return;
        }
        answer = a / b;
    }

    result.textContent = answer;
}

document.getElementById("addBtn").addEventListener("click", function() {
    calculate("add");
});

document.getElementById("subtractBtn").addEventListener("click", function() {
    calculate("subtract");
});

document.getElementById("multiplyBtn").addEventListener("click", function() {
    calculate("multiply");
});

document.getElementById("divideBtn").addEventListener("click", function() {
    calculate("divide");
});
