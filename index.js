const display = document.getElementById('display');

function appendToDisplay(input){
    if (display.value === "Error"){
        display.value = input;
    }
    else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        if(display.value === 'Error' || display.value === "Infinity"){
            clearDisplay();
        }
        else if(display.value == ""){
            clearDisplay();
        }
        else{
            display.value = eval(display.value);
            // k nên dùng eval()
        }
    }
    catch(error){
        display.value = 'Error';
    }
}
