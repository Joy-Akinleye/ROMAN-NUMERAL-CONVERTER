const userInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const resultBox = document.getElementById("resultBox")
const output = document.getElementById("output");

const checkNumber = () => {
switch (true) {
    case (userInput.value == ""):
        output.innerHTML = "Please enter a valid number"
        break;
    case (userInput.value <= 1):
        output.innerHTML = "Please enter a number greater than or equal to 1";
        break;
    case (userInput.value >= 4000):
        output.innerHTML = "Please enter a number less than or equal to 3999";
        break;
    default:
        output.innerHTML = "Please enter a valid number"
}
}


const convertNumber = () => {
    resultBox.style.display = "block";
    checkNumber()

}

convertButton.addEventListener("click", convertNumber);



// If/else statement that can be used in place of switch

//     if (userInput.value == "") {
//         output.innerHTML = "Please enter a valid number"
//     } else if (userInput.value <= 1) {
//         output.innerHTML = "Please enter a number greater than or equal to 1"
//     } else if (userInput.value >= 4000) {
//         output.innerHTML = "Please enter a number less than or equal to 3999"
//     }
