const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('#counter button[data-action="increment"]')
const value = document.querySelector('#value')
console.log(decrement)
console.log(increment)
let counterValue = 0;
console.log(value.textContent)

decrement.addEventListener('click', negativeClick)

increment.addEventListener('click', positiveClick)

function positiveClick() {
    counterValue += 1;
    value.textContent = counterValue
}

function negativeClick() {
    counterValue -= 1;
    value.textContent = counterValue
}



