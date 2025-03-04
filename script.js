const userInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const resultBox = document.getElementById("resultBox")
const output = document.getElementById("output");

const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
]

const convertNumber = () => {
    resultBox.style.display = "grid";
    let userNum = userInput.value
    let romanResult = "";

    switch (true) {
        case (userNum == ""):
            output.innerHTML = "Please enter a valid number"
            break;
        case (userNum < 1):
            output.innerHTML = "Please enter a number greater than or equal to 1";
            break;
        case (userNum >= 4000):
            output.innerHTML = "Please enter a number less than or equal to 3999";
            break;
        default:
            for (let i = 0; i < romanNumerals.length; i++) {
                while (userNum >= romanNumerals[i].value) {
                    romanResult += romanNumerals[i].symbol;
                    userNum -= romanNumerals[i].value;
                }
            }
            output.innerHTML = romanResult;
            break;
    }
}

convertButton.addEventListener("click", convertNumber);
