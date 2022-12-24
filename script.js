const screen = document.getElementById('input-screen')
var onlyText = /^[a-zA-Z]*$/;
var onlyNumbers = /^\d+$/;
var onlyDot = /^.*\.$/;
var onlyDiv = /^.*\/$/;
var onlyMult = /^.*\*$/;
var onlyMin = /^.*\-$/;
var onlyPlus = /^.*\+$/;
var onlyPer = /^.*\%$/;
screen.value = 0

document.addEventListener('keydown', (e) => {
    var key = e.key;
    if (onlyDot.test(key) || onlyDiv.test(key) || onlyMult.test(key) ||
        onlyMin.test(key) || onlyPlus.test(key) || onlyPer.test(key) ||
        key === 'Enter' || key === 'Backspace') {
        switch (key) {
            case '.':
                writeInScreen('dot')
                break;
            case '/':
                writeInScreen('divide')
                break;
            case '*':
                writeInScreen('multiply')
                break;
            case '-':
                writeInScreen('minus')
                break;
            case '+':
                writeInScreen('plus')
                break;
            case '%':
                writeInScreen('percent')
                break;
            case 'Backspace':
                writeInScreen('erase')
                break;
            case 'Enter':
                operation()
                break;
        }
    } else if (onlyNumbers.test(key)) {
        writeInScreen(key)
    }
}, false)

function writeInScreen(sign) {
    switch (sign) {
        case 'divide':
            screen.value != 0 ? screen.value += "" + '/' : screen.value = 0
            break;
        case 'multiply':
            screen.value != 0 ? screen.value += "" + '*' : screen.value = 0
            break;
        case 'minus':
            screen.value != 0 ? screen.value += "" + '-' : screen.value = 0
            break;
        case 'plus':
            screen.value != 0 ? screen.value += "" + '+' : screen.value = 0
            break;
        case 'percent':
            screen.value != 0 ? screen.value += "" + '%' : screen.value = 0
            break;
        case 'dot':
            screen.value += "" + '.'
            break;
        case 'erase':
            let op = screen.value
            let i = op.slice(0, -1)
            screen.value = i
            break;
        default:
            screen.value === '0.' || screen.value != 0 ? screen.value += "" + sign : screen.value = sign
            break;
    }
}

function eraseAll() {
    screen.value = 0
}

function operation() {
    let op = screen.value
    screen.value = math.evaluate(op)
}