function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs ={
  blockCounterEl: document.querySelector('input'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
  blockWrapEl:document.querySelector('#boxes')
}

refs.blockWrapEl.style.display = 'flex'
refs.blockWrapEl.style.width = '600px'
refs.blockWrapEl.style.flexWrap = 'wrap'
refs.blockWrapEl.style.justifyContent = 'space-between'
refs.blockWrapEl.style.alignItems = 'center'

const startedData = {
  array: [],
  width: 20,
  height: 20,
  costumerValue:0
}



refs.blockCounterEl.addEventListener('blur', (event) => {
  startedData.costumerValue = Number(event.currentTarget.value);
})

  function createBoxes() {
    if (refs.blockWrapEl.children.length !== 0) {
      refs.blockWrapEl.textContent = ""
    }
    
    const activeObj = { ...startedData }
    
    for (let i = 0; i < activeObj.costumerValue; i++){
      
        activeObj.array[i] = document.createElement('div');
        activeObj.array[i].style.width = `${activeObj.width += 10}px`;
        activeObj.array[i].style.height = `${activeObj.height += 10}px`;
        activeObj.array[i].style.backgroundColor = getRandomHexColor();
      }
    refs.blockWrapEl.append(...activeObj.array);
    console.log( refs.blockWrapEl.children.length)
    activeObj = { ...startedData };
    }
  
refs.createBtnEl.addEventListener('click', createBoxes)  

refs.destroyBtnEl.addEventListener('click', clearBoxes)

function clearBoxes() {
    refs.blockWrapEl.textContent = "";
    refs.blockCounterEl.value = "";
  }