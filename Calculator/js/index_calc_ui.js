const buttons = document.querySelector('.calc__buttons')
const display = document.querySelector('.calc__result')

const clearBtn = document.querySelector('.button__clear')
const deleteBtn = document.querySelector('.button__delete')
const numberBtns = document.querySelectorAll('.button__number')

const divBtn = document.querySelector('.div')
const multBtn = document.querySelector('.mult')
const subBtn = document.querySelector('.sub')
const sumBtn = document.querySelector('.sum')

buttons.addEventListener('click', function (e) {
    let button = e.target
    let actionType = button.dataset.action
    let action = button.innerHTML

    if (actionType === 'number') {
        console.log(action)
        display.value += action
    }
    if (actionType === 'clear') {
        display.value = ''
    }
    if (actionType === 'clear') {

    }


    console.log(display)
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

const OPERATIONS = {
    'sum' : '+',
    'div': '-',
}

