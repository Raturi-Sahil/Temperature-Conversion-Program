const input = document.querySelector(".user-input");
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const toFahrenheit = document.querySelector("#input1");
const toCelsius = document.querySelector("#input2");
const result = document.querySelector(".result");
let temp;

button.addEventListener('click', function() {
    
    let value = Number(input.value);
    
    if(!value) {
        
        alert('Please enter an input');
    } else if(value < 0 || value > 100) {
        alert('Please enter a number between 0 - 100')
    } else {
        if(toFahrenheit.checked) {
            temp = value;
            if (temp < 0) {
                container.style.backgroundColor = "#00bfff"; // deep blue
            } else if (temp <= 10) {
                container.style.backgroundColor = "#87cefa"; // light blue
            } else if (temp <= 17) {
                container.style.backgroundColor = "#66cdaa"; // aquamarine
            } else if (temp <= 24) {
                container.style.backgroundColor = "#ffd580"; // warm yellow
            } else if (temp <= 32) {
                container.style.backgroundColor = "#ff7f50"; // coral
            } else if (temp <= 40) {
                container.style.backgroundColor = "#ff4500"; // orange red
            } else {
                result.style.color= "black";
                container.style.backgroundColor = "#b22222"; // firebrick
            }
            
            temp = temp *(9/5) + 32;
            result.textContent = temp.toFixed(1) + "°F";

        } else {

            temp = value;
            if (temp < 32) {
                container.style.backgroundColor = "#00bfff";
            } else if (temp <= 50) {
                container.style.backgroundColor = "#87cefa";
            } else if (temp <= 62) {
                container.style.backgroundColor = "#66cdaa";
            } else if (temp <= 75) {
                container.style.backgroundColor = "#ffd580";
            } else if (temp <= 89) {
                container.style.backgroundColor = "#ff7f50";
            } else if (temp <= 104) {
                container.style.backgroundColor = "#ff4500";
            } else {
                result.style.color = "black";
                container.style.backgroundColor = "#b22222";
            }
            temp = (temp - 32) * (5/9);
            result.textContent = temp.toFixed(1) + "°C";
        }
    }
});