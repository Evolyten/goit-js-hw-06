const listEl = document.querySelector("#categories")
const categoriesEl = listEl.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesEl.length}`)

for (let i = 0; i < categoriesEl.length; i++){

    console.log(`Category: ${categoriesEl[i].querySelector('h2').textContent}
Elements: ${categoriesEl[i].querySelector('ul').children.length}`)
}



