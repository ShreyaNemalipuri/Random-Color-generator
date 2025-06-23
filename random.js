let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");
bgContainerElement.style.backgroundColor = bgColorsArray[0];

function generateRandomColor() {
    let noOfbgColors = bgColorsArray.length;
    let randomBgColor = Math.ceil(Math.random() * noOfbgColors);
    if (randomBgColor === noOfbgColors) {
        randomBgColor = randomBgColor - 1;
    }
    bgContainerElement.style.backgroundColor = bgColorsArray[randomBgColor];
}