const rangeInput = document.querySelector('#font-size-control')
rangeInput.addEventListener('input', (event) => {
    let inputContent = event.currentTarget.value
    const rangeText = document.querySelector('#text')
    rangeText.style.fontSize=`${inputContent}px`
    
})

