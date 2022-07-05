const input = document.querySelector('#validation-input')

input.addEventListener('blur', (event) => {
    let k = event.currentTarget.value
    
    if (k.length === 6) {
        input.classList.add('valid');
        input.classList.toggle('invalid');


    } else if(k.length !== 6){ input.classList.toggle('invalid'); }
    
})