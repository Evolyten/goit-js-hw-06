const input = document.querySelector('#validation-input')

input.addEventListener('blur', (event) => {
    let outputContext = event.currentTarget.value
    
    if (outputContext.length === 6) {
        input.classList.add('valid');
        input.classList.toggle('invalid');


    } else if(outputContext.length !== 6){ input.classList.toggle('invalid'); }
    
})