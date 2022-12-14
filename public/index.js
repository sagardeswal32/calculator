let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons)
buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e);
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'MS':
                display.innerText += '*97.18'
                break;
            case 'HSD':
                display.innerText += '*90.05'
                break;
            case 'XG':
                display.innerText += '*93.86'
                break;
            case 'XP':
                display.innerText += '*104'
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

