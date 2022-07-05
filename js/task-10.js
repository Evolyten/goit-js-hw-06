function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const blockCounterEl = document.querySelector('input')
const createBtnEl = document.querySelector('button[data-create]')
const destroyBtnEl = document.querySelector('button[data-destroy]')
const blockWrapEl = document.querySelector('#boxes')
blockWrapEl.style.display = 'flex'
blockWrapEl.style.width = '600px'
blockWrapEl.style.flexWrap = 'wrap'
blockWrapEl.style.justifyContent = 'space-between'
blockWrapEl.style.alignItems = 'center'




blockCounterEl.addEventListener('blur', (event) => {
  let k = event.currentTarget.value;
  let array = [];
  let width = 20;
  let height = 20;

    function createBoxes(amount) {
      for (let i = 0; i < amount; i++){
        array[i] = document.createElement('div');
        array[i].style.width = `${width += 10}px`;
        array[i].style.height = `${height += 10}px`;
        array[i].style.backgroundColor = getRandomHexColor();
      }
      blockWrapEl.append(...array)
      amount=0
    }
  
  createBtnEl.addEventListener('click',createBoxes(k))
  destroyBtnEl.addEventListener('click',()=> {
    blockWrapEl.textContent = "";
    blockCounterEl.textContent = "";
  })
  console.log(array)
   
    console.log(k)

})
 
