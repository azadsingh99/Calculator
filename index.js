let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == '=') {
            screen.value = eval(screenValue);

        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == 'B') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })

}