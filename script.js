let displayValue = document.getElementById("mainText");
let upperDisplay = document.getElementById("topText");
displayValue.textContent = "";
upperDisplay.textContent = "";
let num1 = 0;
let num2 = 0;
let operator = "";
const decimal = document.getElementById("point");
const clear = document.getElementById("clearButt");
const opButtons = document.getElementsByClassName("opButton");
const equals = document.getElementById("equal");
const allButt = document.querySelectorAll("button");



document.addEventListener("mousemove", function(){
	if(displayValue.textContent === "Error" || displayValue.textContent === "Nice Try" || displayValue.textContent === "Infinity"){
		for(let i=0; i< allButt.length; i++){
			if(allButt[i].id === "clearButt"){
				allButt[i].disabled = false;
			} else{
				allButt[i].disabled = true;
			}
		}
	} else{
		for(let i=0; i< allButt.length; i++){
			allButt[i].disabled = false;
		}
	}
})

document.addEventListener("mousemove", function(){
	if(displayValue.textContent.includes("!")){
		for(let i=0; i< allButt.length; i++){
			if(allButt[i].id === "clearButt"){
				allButt[i].disabled = false;
			} else if(allButt[i].id === "equal"){
				allButt[i].disabled = false;
			} else{
				allButt[i].disabled = true;
			}
		}
	}
})

equals.addEventListener("click", function(){
	upperDisplay.textContent = "";
	if(displayValue.textContent){
		num2 = parseFloat(displayValue.textContent);
		displayValue.textContent = operate(num1, num2, operator);
	} else{
		displayValue.textContent = "Error";
	}
	operator="";	
})

clear.addEventListener("click", function(){
	displayValue.textContent = "";
	upperDisplay.textContent = "";
	num1=0;
	num2=0;
	operator="";
})

decimal.addEventListener("click", function(){
	if(!displayValue.textContent.includes(".")){
		displayValue.textContent = displayValue.textContent + ".";
	}
})

for(let i = 0; i < 10; i++) {
    let element = document.getElementById("b"+(i+1));
    element.addEventListener("click", function() {
    displayValue.textContent = displayValue.textContent + element.value;
	}
)}

for(let i= 0; i < opButtons.length; i++) {
	opButtons[i].addEventListener("click", function(){
		if(displayValue.textContent){
			num1 = parseFloat(displayValue.textContent);
		}
		if(!operator && displayValue.textContent){
			operator = opButtons[i].value;
		} else if(operator && displayValue.textContent && upperDisplay.textContent){
			operator = opButtons[i].value;
		}

		if(displayValue.textContent && operator !== "factorial"){
			if(opButtons[i].value == "add"){
				upperDisplay.textContent = displayValue.textContent + " +";
				displayValue.textContent = "";
			} else if(opButtons[i].value == "subtract"){
				upperDisplay.textContent = displayValue.textContent + " -";
				displayValue.textContent = "";
			} else if(opButtons[i].value == "multiply"){
				upperDisplay.textContent = displayValue.textContent + " x";
				displayValue.textContent = "";
			} else if(opButtons[i].value == "divide"){
				upperDisplay.textContent = displayValue.textContent + " /";
				displayValue.textContent = "";
			} else if(opButtons[i].value == "power"){
				upperDisplay.textContent = displayValue.textContent + " **";
				displayValue.textContent = "";
			}
		} else if (displayValue.textContent){
			if(!displayValue.textContent.includes("!")){
				displayValue.textContent = displayValue.textContent + "!";
				upperDisplay.textContent = ""
				}
		}
		
	})
}

function add (a,b) {
	return (a + b);
}

function subtract (a,b) {
	return (a-b);
}

function times (a,b) {
	return (a * b);
}

function divide(a,b) {
	return (a/b);
}

function power(a,b) {
	return a ** b;
}

function factorial(a) {
	if(a <= 1) {
		return 1;
	} else {
		return a * factorial(a - 1)
	}
}

function operate(num1,num2, operator) {
	if(!operator) {
		return "Error";
	} else if(operator=="add") {
		return add(num1,num2);
	} else if(operator=="subtract"){
		return subtract(num1,num2);
	} else if(operator=="multiply") {
		return times(num1,num2);
	} else if(operator=="divide" && num2 == 0){
		return "Nice Try";
	} else if(operator=="divide"){
		return divide(num1,num2);
	} else if(operator=="factorial") {
		return factorial(num1);
	} else if(operator=="power"){
		return power(num1,num2);
	}	
}
