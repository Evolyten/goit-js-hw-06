const input = document.querySelector('#validation-input')

input.addEventListener('blur', (event) => {
    let outputContext = event.currentTarget.value
    
    if (outputContext.length === 6) {
        input.classList.add('valid');
        input.classList.remove('invalid');


    } else if(outputContext.length !== 6){ input.classList.add('invalid'); input.classList.remove('valid'); }
    
})