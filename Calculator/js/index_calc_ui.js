const buttons = document.querySelector('.calc__buttons')
const display = document.querySelector('.calc__result')

const clearBtn = document.querySelector('.button__clear')
const deleteBtn = document.querySelector('.button__delete')
const numberBtns = document.querySelectorAll('.button__number')

const divBtn = document.querySelector('.div')
const multBtn = document.querySelector('.mult')
const subBtn = document.querySelector('.sub')
const sumBtn = document.querySelector('.sum')

const OPERATIONS = {
    sum: '+',
    sub: '-',
    mult: '*',
    div: '/',
}

buttons.addEventListener('click', function (e) {
    let button = e.target
    let actionType = button.dataset.action
    let digit = button.innerHTML
    let number = display.value
    let result = 0

    if (actionType === 'number') {
        // getNumber(digit)
        number += digit
        display.value = number
    }
    if (actionType === 'clear') {
        display.value = ''
    }
    if (actionType === 'delete') {
        let lastChar = number.length - 1
        let newValue = number.slice(0, lastChar);
        display.value = newValue
    }
    if (actionType === 'sum' || actionType === 'sub' || actionType === 'mult' || actionType === 'div') {
        let action = getOperationType(actionType)
        let number1 = number
        number = 0
        display.value = ''

        console.log(number1)
    }

})

display.addEventListener('change', function (e) {
    let number = this.value
})


function getValue() {

}

function calc(a, b) {
    let numberA
    let numberB
}

function getOperationType(type) {
    if (OPERATIONS[type]) {
        return OPERATIONS[type]
    }
}

function getNumber(number) {
    let number1 = number

    return number1
}

getOperationType('sub')


