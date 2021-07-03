function toggle_light_mode() {
    var app = document.getElementsByClassName("calci")[0];
    if (localStorage.lightMode == "dark") {
	localStorage.lightMode = "light";
	app.setAttribute("light-mode", "light");
    } else {
	localStorage.lightMode = "dark";
	app.setAttribute("light-mode", "dark");
    }		
}
function pow(base,exponent){
	base=screenValue;
	exponent=buttonText;
	return Math.pow(base,exponent);
}
//  function backspace() {   
//     screenValue = "";
//     screenValue=screenValue.substring(0,screenValue.length - 1);
//     screen.value=screenValue;                                          
//             screenValue = calc.display.value.length;
//             calc.display.value = calc.display.value.substring(0, size-1);
//         }

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
		else if(buttonText=='Del'){
		
            
            screenValue=screenValue.substring(0,screenValue.length - 1);
            screen.value=screenValue;
		 }
		else if (buttonText == '√') {
            screen.value = Math.sqrt(screenValue);
        }
        else if (buttonText == 'x²') {
            screenValue = screenValue*screenValue;
            screen.value=screenValue;
        }

        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
