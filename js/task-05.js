const textInputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')
textInputEl.addEventListener('input', (event) => {
    
    let currentInput = event.currentTarget.value
    outputEl.textContent = currentInput;
      if (currentInput == "") {
        outputEl.textContent="Anonymous"
    }
})
