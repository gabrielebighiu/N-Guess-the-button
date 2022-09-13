let nrOfButtons = 0;

function setNrOfButtons() {
    nrOfButtons = document.getElementById("nrOfButtons").value;
    if (nrOfButtons === "" || nrOfButtons < 2) {
        window.alert("Please type in a number");
    }
}
