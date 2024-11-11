
function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        console.log(document.getElementById("display").value)
        document.getElementById("display").value = eval(document.getElementById("display").value);
        console.log(document.getElementById("display").value)
    } catch (error) {
        document.getElementById("display").value = 'Error';
        }
}

function clearDisplay() {
    document.getElementById("display").value = '';
}
