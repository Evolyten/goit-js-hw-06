const rangeInput = document.querySelector('#font-size-control')
rangeInput.addEventListener('input', (event) => {
    let k = event.currentTarget.value
    const rangeText = document.querySelector('#text')
    rangeText.style.fontSize=`${k}px`
    
})

