const buttons = document.querySelector('.calc__buttons')
const display = document.querySelector('.calc__result')
let a = ''
let b = ''
let action = ''
let finish = false

const OPERATIONS = {
    sum: '+',
    sub: '-',
    mult: '*',
    div: '/',
}

document.querySelector('.button__clear').onclick = clearAll
document.querySelector('.button__delete').onclick = removeOne

buttons.addEventListener('click', function (e) {
    if (display.textContent === '') display.textContent = '0'

    let button = e.target
    let actionType = button.dataset.action
    let digit = button.innerHTML

    if (actionType === 'number') {
        if (b === '' && action === '') {
            a += digit
            display.textContent = a
        } else if (a !== '' && b !== '' && finish) {
            b = digit
            display.textContent = b
            finish = false

        } else {
            b += digit
            display.textContent = b
        }
        return
    }

    if (actionType in OPERATIONS) {
        action = getOperationType(actionType)
        display.textContent = action
        return
    }

    if (actionType === 'clear') {
        return;
    }
    if (actionType === 'delete') {
        return;
    }

    if (actionType === 'result') {
        if (b === '') b = a
        a = calc()
        finish = true
        display.textContent = a
    }
})

function getOperationType(type) {
    if (OPERATIONS[type]) {
        return OPERATIONS[type]
    }
}

function clearAll() {
    display.textContent = 0
    a = ''
    b = ''
    action = ''
    finish = false
}

function removeOne() {
    if (b === '') {
        if (a.length > 1) {
            let lastChar = a.length - 1
            a = a.slice(0, lastChar);
            display.textContent = a
            return display.textContent

        }
        if (a.length <= 1) {
            a = 0
            display.textContent = 0
            return display.textContent
        }
    } else {
        if (b.length > 1) {
            let lastChar = b.length - 1
            b = b.slice(0, lastChar);
            display.textContent = b
            return display.textContent

        }
        if (b.length <= 1) {
            b = 0
            display.textContent = 0
            return display.textContent
        }
    }
}

function calc() {
    switch (action) {
        case '+':
            return (+a) + (+b)
        case '-':
            return (+a) - (+b)
        case '/':
            if (b === '0') {

            }
            return (+a) / (+b)
        case '*':
            return (+a) * (+b)
    }
}