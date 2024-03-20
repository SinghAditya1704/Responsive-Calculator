let outputScreen = document.getElementById("Calculator"); 

function display(num){
    outputScreen.value += num;  //Adding the number to the screen
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);   //Evaluating
    }
    catch(err)
    {
        alert("Invalid  Input!");  //If input is invalid, show error message
    }
}

function Clear(){
    outputScreen.value = "";   //Clearing the Screen
}

function del(){
    outputScreen.value  = outputScreen.value.slice(0,-1);    //Removing last character from the screen
}