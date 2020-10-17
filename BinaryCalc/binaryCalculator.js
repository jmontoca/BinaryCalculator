let resultScreen = document.querySelector("#res");
let equalButton = document.querySelector("#btnEql");
let clearButton = document.querySelector("#btnClr");
let addButton = document.querySelector("#btnSum");
let subButton = document.querySelector("#btnSub");
let divButton = document.querySelector("#btnDiv");
let mulButton = document.querySelector("#btnMul");
let zeroButton = document.querySelector("#btn0");
let oneButton = document.querySelector("#btn1");

//empty the result screen
resultScreen.innerHTML = "";

//functions used in the binary calculator

//clear: 
//purpose: 
//  The function clears the screen and the result
//  in the innerHTML
//parameters:
//  none
//return:
//  none
function clear() {
    resultScreen.innerHTML = "";
}

//addSubPress:
//purpose:
//  The function checks which digit was pressed and 
//  concats that digit to the result innerHTML
//parameter:
//  e: the element that was clicked
//return:
//  none
function addSubPress(e) {
    let pressedButton = e.target || e.srcElement;

    if(document.getElementById(pressedButton.id).innerHTML == "0") {
        resultScreen.innerHTML += "0";
    }
    else if(document.getElementById(pressedButton.id).innerHTML == "1") {
        resultScreen.innerHTML += "1";
    }
}

//operator:
//purpose:
//  The function places a operator sign into the result innerHTML.
//  If one is already there, then the sign is not added into the string.
//  If the innerHTML is empty, the operator is not added into the string.
//parameter: 
//  e: the element that was clicked
//return:
//  none
function operator(e) {
    let buttn = e.target || e.srcElement;
    
    if(resultScreen.innerHTML == ""){
        console.log("Operator can't start input");
    }
    else if(resultScreen.innerHTML.includes("+") || resultScreen.innerHTML.includes("-") || resultScreen.innerHTML.includes("*") 
    || resultScreen.innerHTML.includes("/")) {
        console.log("There is already an operator on screen");
    }
    else {
        resultScreen.innerHTML += document.getElementById(buttn.id).innerHTML;
    }
}

//notes: need to add a check for having a zero in the division calculation
//       might need to adjust for the minus calculation, the negative results
//       may not display correctly using the toString function to go to binary
equalButton.addEventListener("click", function() {
    let tempInputString;
    let inputs;

    if(resultScreen.innerHTML.includes("+")) {
        inputs = resultScreen.innerHTML.split("+")
        tempInputString = parseInt(inputs[0], 2) + "+" + parseInt(inputs[1], 2);
        tempInputString = eval(tempInputString);
        resultScreen.innerHTML = tempInputString.toString(2);
    }
    else if(resultScreen.innerHTML.includes("-")) {
        inputs = resultScreen.innerHTML.split("-")
        tempInputString = parseInt(inputs[0], 2) + "-" + parseInt(inputs[1], 2);
        tempInputString = eval(tempInputString);
        resultScreen.innerHTML = tempInputString.toString(2);
    }
    else if(resultScreen.innerHTML.includes("*")) {
        inputs = resultScreen.innerHTML.split("*")
        tempInputString = parseInt(inputs[0], 2) + "*" + parseInt(inputs[1], 2);
        tempInputString = eval(tempInputString);
        resultScreen.innerHTML = tempInputString.toString(2);
    }
    else if(resultScreen.innerHTML.includes("/")) {
        inputs = resultScreen.innerHTML.split("/")
        tempInputString = parseInt(inputs[0], 2) + "/" + parseInt(inputs[1], 2);
        tempInputString = Math.floor(eval(tempInputString));
        resultScreen.innerHTML = tempInputString.toString(2);
    }
    console.log(tempInputString);
});

//eventlisteners
oneButton.addEventListener("click", addSubPress);
zeroButton.addEventListener("click", addSubPress);
clearButton.addEventListener("click", clear);
addButton.addEventListener("click", operator);
subButton.addEventListener("click", operator);
mulButton.addEventListener("click", operator);
divButton.addEventListener("click", operator);