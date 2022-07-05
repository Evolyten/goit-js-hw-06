const textInputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')
let n=''
textInputEl.addEventListener('input', (event) => {
    
    let k = event.currentTarget.value
    outputEl.textContent = k;
      if (k == "") {
        outputEl.textContent="Anonymous"
    }
})
