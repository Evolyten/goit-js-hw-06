const counter = {
    value: 0,
    increment() {
        this.value += 1
        
    },
    decrement() {
        this.value-=1
    }
}

const refs = {
    decrementEl: document.querySelector('button[data-action="decrement"]'),
    incrementEl: document.querySelector('#counter button[data-action="increment"]'),
    valueEl:document.querySelector('#value')
}


refs.decrementEl.addEventListener('click', negativeClick)
refs.incrementEl.addEventListener('click', positiveClick)

function positiveClick() {
 
    counter.increment()
    refs.valueEl.textContent = counter.value
}

function negativeClick() {
   
    counter.decrement()
    refs.valueEl.textContent = counter.value

}



