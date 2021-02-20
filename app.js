let cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
let cardSymbol = ["♦", "♥", "♠", "♣"];
let cardColor = ["red", "black"];

window.onload = () => {
    let cardValuePicker = Math.floor((Math.random() * cardValue.length)); // generate random number to pick card number
    let cardSymbolPicker = Math.floor((Math.random() * cardSymbol.length)); // generate random number to pick card symbol
    let cardColorPicker = Math.floor((Math.random() * cardColor.length)); // generate random number to pick card color

    let pushNumber = document.querySelector(".text-center"); // pick tag to push the card value
    pushNumber.innerHTML = cardValue[cardValuePicker];
    pushNumber.style.color = cardColor[cardColorPicker];
    let pushSymbol = document.querySelectorAll("i"); // pick tag to push the card symbol

    pushSymbol.forEach(tag => {
        tag.innerHTML = cardSymbol[cardSymbolPicker];
        tag.style.color = cardColor[cardColorPicker];
    });
}

let generateCard = () => {
    window.onload();
}

let generateCardOnTimer = () => {
    let progressBar = document.querySelector(".progress-bar-striped");
    let width = 0;
    let i = setInterval(progressCheck, 1000);
    function progressCheck() {
        if (width == 100) {
            clearInterval(i);
            window.onload();
        } else {
            width += 10;
            progressBar.style.width = width + '%';
        }
    }
}

let newWidth = document.getElementById("validationDefault01");
let newHeight = document.getElementById("validationDefault02");

newWidth.addEventListener(
    "keyup", function (event) {
        let card = document.getElementById("deck-card");
        if (event.keyCode === 13 && newWidth.value === "") {
            event.preventDefault();
            card.style.width = '18rem';
        }
        else if(event.keyCode === 13){
            event.preventDefault();
            card.style.width = newWidth.value + 'rem';
        }
    }
);

newHeight.addEventListener(
    "keyup", function (event) {
        let card = document.getElementById("deck-card");
        if (event.keyCode === 13 && newHeight.value === "") {
            event.preventDefault();
            card.style.height = '25rem';
        }
        else if(event.keyCode === 13){
            event.preventDefault();
            card.style.height = newHeight.value + 'rem';
        }
    }
);