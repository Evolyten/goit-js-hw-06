
const summitFor = document.querySelector('.login-form')

summitFor.addEventListener('submit',submitEvent)


function submitEvent(event) {
    event.preventDefault();
    const {
        elements:{ email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === "") {
        alert('Please note that all fields are required.')
    } else {
    let userData = { email: email.value, password: password.value }
    console.log(userData)
    event.currentTarget.reset();}
    
}