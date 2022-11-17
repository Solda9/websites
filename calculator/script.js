let reset= false;

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
        if(input === '/' || input === '*' || input === '-' || input === '+' || input === '.') {
            input = '';
        }
        else {
            reset = false;
            document.getElementById("result").value = '';
        }
    }
    else if(input === '/' || input === '*' || input === '-' || input === '+' || input === '.') {
        if(resultLength === 0) {
            input = '';
        }
        else if(resultLength > 0) {
            if(prevInput === '/' || prevInput === '*' || prevInput === '-' || prevInput === '+' || prevInput === '.') {
                input = '';
            }
            else if(input === '.') {
                let clearInput = false;
                let exitLoop = false;
                for(let i = 2; i <= resultLength; i++) {
                    prevInput = result.charAt(resultLength - i);
                    if(prevInput === '/' || prevInput === '*' || prevInput === '-' || prevInput === '+') {
                        exitLoop = true;
                    }
                    else if(prevInput === '.') {
                        clearInput = true;
                        exitLoop = true;
                    }

                    if(exitLoop === true) {
                        break;
                    }
                }
                if(clearInput === true) {
                    input = '';
                }
            }
        }
    }
    else if(input === '0' && prevInput === '0') {
        let clearInput = true;
        let exitLoop = false;
        for(let i = 2; i <= resultLength; i++) {
            prevInput = result.charAt(resultLength - i);
            if(prevInput === '/' || prevInput === '*' || prevInput === '-' || prevInput === '+') {
                prevInput = result.charAt(resultLength - i + 1);
                let x = parseInt(prevInput);
                if(x > 0 && x < 10) {
                    clearInput = false;
                }
                exitLoop = true;
            }
            else if(prevInput === '.') {
                clearInput = false;
                exitLoop = true;
            }
            else if(i === resultLength) {
                let x = parseInt(prevInput);
                if(x > 0 && x < 10) {
                    clearInput = false;
                }
            }

            if(exitLoop === true) {
                break;
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
    document.getElementById("result").value = eval(result);
    reset = true;
}

// function to clear the display
function clr() {
    document.getElementById("result").value = '';
}

// function to get string length
function getCharacterLength(str) {
    return [...str].length;
}
