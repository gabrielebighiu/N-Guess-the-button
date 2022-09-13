let nrOfButtons = 0;
let winningBtn = 0;

function getNrOfButtons() {
    nrOfButtons = document.getElementById("nrOfButtons").value;
    if (nrOfButtons === "" || nrOfButtons < 2) {
        window.alert("Please type in a valid number");
    } else {
        prepareGame();
    }
}

function chooseWinningBtn() {
    winningBtn = Math.floor((Math.random() * nrOfButtons) + 1);
}

function createButton(index) {
    let button = document.createElement('button');
    button.id = index;
    button.className = "btn btn-outline-secondary";
    button.onclick = function checkButton() {
        if (button.id == winningBtn) {
            document.getElementById("displayText").innerHTML = "Well done, you found the button!";
            document.getElementById(button.id).className = "btn btn-success";
            document.getElementById(button.id).innerHTML = "You found me!";
        } else {
            document.getElementById("displayText").innerHTML = "Nope, try again -_-";
        }
    };
    button.innerHTML = "Click me!";
    document.getElementById("buttonArea").appendChild(button);
}

function prepareGame() {
    // Chooses winning button
    chooseWinningBtn();
    // Deletes input box
    document.getElementById("nrOfButtons").remove();
    // Changes the 2nd text and label
    document.getElementById("displayText").innerHTML = "Have a guess";
    document.getElementById("label").innerHTML = "Click button below to restart";
    // Edits the start button's text and attributes so that we can reset
    document.getElementById("startButton").outerHTML = "<button id=\"startButton\" class=\"btn btn-outline-dark\" onclick=\"restartGame()\">";
    document.getElementById("startButton").innerHTML = "Restart";
    // Generates all the buttons acording to the user's input
    for (let i = 1; i <= nrOfButtons; ++i) {
        createButton(i);
    }
}

function restartGame() {
    document.getElementById("startButton").addEventListener("click", location.reload());
}
