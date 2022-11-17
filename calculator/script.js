let reset = false;
let negative_number = false;

// assign functions to buttons
const buttonList = document.getElementsByClassName("button");
for(let i = 0; i < buttonList.length; i++) {
	//alert(buttonList[i].innerHTML);
	buttonList[i].onclick = function() {display(buttonList[i].value);}

	if(buttonList[i].id === 'clr') {
		buttonList[i].onclick = clr;
	}
	else if(buttonList[i].id === 'solve') {
		buttonList[i].onclick = solve;
	}
}

// function to display the digits
function display(input) {
	let result = document.getElementById("result").value;
	let resultLength = getCharacterLength(result);
	let prevInput = ''
	if(resultLength > 0) {
		prevInput = result.charAt(resultLength - 1);
	}

	if(reset === true) {
		if(input !== '/' && input !== '*' && input !== '-' && input !== '+') {
			document.getElementById("result").value = '';
			if(input === '.') {
				input = '0.';
			}
		}
		reset = false;
	}
	else if(input === '/' || input === '*' || input === '+') {
		if(resultLength === 0) {
			input = '';
		}
		else if(prevInput === '/' || prevInput === '*' || prevInput === '-' || prevInput === '+') {
			input = '';
		}
		else if(negative_number === true) {
			if(prevInput === '.') {
				input = '0)' + input;
			}
			else {
				input = ')' + input;
			}
			negative_number = false;
		}
		else if(prevInput === '.') {
			input = '0' + input
		}
	}
	else if(input === '-') {
		if(negative_number === true) {
			if(prevInput === '-') {
				input = '';
			}
			else if(prevInput === '.') {
				input = '0)-';
				negative_number = false;
			}
			else {
				input = ')-';
				negative_number = false;
			}
		}
		else if(resultLength === 0 || prevInput === '/' || prevInput === '*' || prevInput === '+') {
			input = '(-'
			negative_number = true;
		}
		else if(prevInput === '.') {
			input = '0-';
		}
		else if(resultLength >= 2 && prevInput === '-') {
			prevInput = result.charAt(resultLength - 2);
			if(prevInput === '(') {
				input = '';
				negative_number = true;
			}
			else {
				input = '(-';
				negative_number = true;
			}
		}
	}
	else if(input === '.') {
		if(resultLength === 0) {
			input = '0.';
		}
		else if(prevInput === '/' || prevInput === '*' || prevInput === '-' || prevInput === '+') {
			input = '0.';
		}
		else {
			for(let i = 1; i <= resultLength; i++) {
				prevInput = result.charAt(resultLength - i);
				if(prevInput === '.') {
					input = '';
					break;
				}
			}
		} 	
	}
	else if(input === '0' && prevInput === '0') {
		let clearInput = true;
		for(let i = 2; i <= resultLength; i++) {
			prevInput = result.charAt(resultLength - i);
			if(prevInput === '/' || prevInput === '*' || prevInput === '-' || prevInput === '+') {
				prevInput = result.charAt(resultLength - i + 1);
				let x = parseInt(prevInput);
				if(x > 0 && x < 10) {
					clearInput = false;
				}
				break;
			}
			else if(prevInput === '.') {
				clearInput = false;
				break;
			}
			else if(i === resultLength) {
				let x = parseInt(prevInput);
				if(x > 0 && x < 10) {
					clearInput = false;
				}
			}
		}
		if(clearInput === true) {
			input = '';
		}
	}
	else if(parseInt(input) > 0 && parseInt(input) < 10 && prevInput === '0') {
		if(resultLength > 1) {
			prevInput = result.charAt(resultLength - 2);
			if(prevInput === '/' || prevInput === '*' || prevInput === '-' || prevInput === '+') {
				let text = '';
				for(let i = 0; i < resultLength - 1; i++) {
					text += result.charAt(i);
				}
				document.getElementById("result").value = text;
			}
		}
		else {
			document.getElementById("result").value = '';
		}
	}

	document.getElementById("result").value += input;
}

// function to evaluate the digits and display the result
function solve() {
	let result = document.getElementById("result").value;
	if(negative_number === true){
		result += ')'
		negative_number = false;
	}
	document.getElementById("result").value = eval(result);
	reset = true;
}

// function to clear the display
function clr() {
	document.getElementById("result").value = '';
	reset = false;
	negative_number = false;
}

// function to get string length
function getCharacterLength(str) {
	return [...str].length;
}